import { AppStorage, STORAGE_KEY, STORAGE_SCHEMA_VERSION } from '../types/habit';

export function readStorage(): AppStorage | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    return migrateStorage(parsed);
  } catch {
    return null;
  }
}

export function writeStorage(data: AppStorage): void {
  try {
    const payload: AppStorage = {
      ...data,
      version: STORAGE_SCHEMA_VERSION,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    throw new StorageError('Veriler kaydedilemedi. Lütfen tarayıcınızda yer açın.');
  }
}

export function createDebouncedWriter(delayMs = 300, onError?: (error: Error) => void) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function debouncedWrite(data: AppStorage): void {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      try {
        writeStorage(data);
      } catch (err) {
        const error = err instanceof Error ? err : new StorageError('Veriler kaydedilemedi. Lütfen tarayıcınızda yer açın veya sayfayı yenileyin.');
        onError?.(error);
      }
      timeoutId = null;
    }, delayMs);
  };
}

export function migrateStorage(data: unknown): AppStorage | null {
  if (typeof data !== 'object' || data === null) {
    return null;
  }

  const record = data as Record<string, unknown>;

  if (!Array.isArray(record.habits)) {
    return null;
  }

  const habits = record.habits.map((item: unknown) => {
    if (typeof item !== 'object' || item === null) {
      return null;
    }
    const h = item as Record<string, unknown>;
    return {
      id: typeof h.id === 'string' ? h.id : (typeof globalThis !== 'undefined' && globalThis.crypto?.randomUUID) ? globalThis.crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      name: typeof h.name === 'string' ? h.name : 'Bilinmeyen Alışkanlık',
      createdAt: typeof h.createdAt === 'string' ? h.createdAt : new Date().toISOString(),
      completedDates: Array.isArray(h.completedDates)
        ? h.completedDates.filter((d): d is string => typeof d === 'string')
        : [],
      streak: typeof h.streak === 'number' ? h.streak : 0,
    };
  }).filter((h): h is NonNullable<typeof h> => h !== null);

  return {
    version: typeof record.version === 'number' ? record.version : STORAGE_SCHEMA_VERSION,
    habits,
    lastSyncedAt: typeof record.lastSyncedAt === 'string' ? record.lastSyncedAt : undefined,
  };
}

export function getSchemaVersion(): number {
  return STORAGE_SCHEMA_VERSION;
}

export class StorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StorageError';
  }
}
