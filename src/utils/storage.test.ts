import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
  readStorage,
  writeStorage,
  createDebouncedWriter,
  migrateStorage,
  getSchemaVersion,
  StorageError,
} from './storage';
import { AppStorage, STORAGE_KEY } from '../types/habit';

const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => { store[key] = value; },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: mockLocalStorage,
});

describe('storage utils', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('readStorage returns null when localStorage is empty', () => {
    expect(readStorage()).toBeNull();
  });

  it('writeStorage saves data to localStorage', () => {
    const data: AppStorage = {
      version: 1,
      habits: [
        {
          id: 'h1',
          name: 'Kitap Oku',
          createdAt: '2024-01-01T00:00:00.000Z',
          completedDates: [],
          streak: 0,
        },
      ],
    };

    writeStorage(data);
    const raw = mockLocalStorage.getItem(STORAGE_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.habits).toHaveLength(1);
    expect(parsed.habits[0].name).toBe('Kitap Oku');
  });

  it('readStorage returns parsed data after writeStorage', () => {
    const data: AppStorage = {
      version: 1,
      habits: [
        {
          id: 'h2',
          name: 'Yürüyüş Yap',
          createdAt: '2024-02-01T00:00:00.000Z',
          completedDates: ['2024-02-01'],
          streak: 1,
        },
      ],
    };

    writeStorage(data);
    const result = readStorage();
    expect(result).not.toBeNull();
    expect(result!.habits).toHaveLength(1);
    expect(result!.habits[0].name).toBe('Yürüyüş Yap');
    expect(result!.habits[0].streak).toBe(1);
  });

  it('createDebouncedWriter delays write', () => {
    const writer = createDebouncedWriter(300);
    const data: AppStorage = {
      version: 1,
      habits: [],
    };

    writer(data);
    expect(mockLocalStorage.getItem(STORAGE_KEY)).toBeNull();

    vi.advanceTimersByTime(299);
    expect(mockLocalStorage.getItem(STORAGE_KEY)).toBeNull();

    vi.advanceTimersByTime(1);
    expect(mockLocalStorage.getItem(STORAGE_KEY)).not.toBeNull();
  });

  it('createDebouncedWriter resets timer on consecutive calls', () => {
    const writer = createDebouncedWriter(300);
    const data: AppStorage = {
      version: 1,
      habits: [{ id: 'h3', name: 'Meditasyon', createdAt: '2024-03-01T00:00:00.000Z', completedDates: [], streak: 0 }],
    };

    writer(data);
    vi.advanceTimersByTime(200);
    writer(data);
    vi.advanceTimersByTime(299);
    expect(mockLocalStorage.getItem(STORAGE_KEY)).toBeNull();

    vi.advanceTimersByTime(1);
    expect(mockLocalStorage.getItem(STORAGE_KEY)).not.toBeNull();
  });

  it('migrateStorage handles legacy data without version', () => {
    const legacy = {
      habits: [
        { id: 'old1', name: 'Eski Alışkanlık', createdAt: '2023-01-01', completedDates: [], streak: 5 },
      ],
    };

    const result = migrateStorage(legacy);
    expect(result).not.toBeNull();
    expect(result!.version).toBe(1);
    expect(result!.habits[0].name).toBe('Eski Alışkanlık');
  });

  it('migrateStorage returns null for invalid data', () => {
    expect(migrateStorage(null)).toBeNull();
    expect(migrateStorage('string')).toBeNull();
    expect(migrateStorage(123)).toBeNull();
    expect(migrateStorage({})).toBeNull();
  });

  it('migrateStorage repairs malformed habit entries', () => {
    const broken = {
      version: 0,
      habits: [
        { name: 123, streak: 'many' },
        null,
        'not-an-object',
      ],
    };

    const result = migrateStorage(broken);
    expect(result).not.toBeNull();
    expect(result!.habits).toHaveLength(1);
    expect(result!.habits[0].name).toBe('Bilinmeyen Alışkanlık');
  });

  it('getSchemaVersion returns 1', () => {
    expect(getSchemaVersion()).toBe(1);
  });

  it('StorageError has correct name', () => {
    const err = new StorageError('Test hatası');
    expect(err.name).toBe('StorageError');
    expect(err.message).toBe('Test hatası');
  });

  it('writeStorage throws StorageError on quota exceeded', () => {
    const originalSetItem = mockLocalStorage.setItem;
    mockLocalStorage.setItem = () => { throw new Error('QuotaExceededError'); };

    const data: AppStorage = { version: 1, habits: [] };
    expect(() => writeStorage(data)).toThrow(StorageError);

    mockLocalStorage.setItem = originalSetItem;
  });
});
