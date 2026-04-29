import { describe, it, expect } from 'vitest';
import { Habit, AppStorage, STORAGE_SCHEMA_VERSION, STORAGE_KEY } from './habit';

describe('Habit types', () => {
  it('STORAGE_KEY is defined', () => {
    expect(STORAGE_KEY).toBe('habit-tracker-storage');
  });

  it('STORAGE_SCHEMA_VERSION is 1', () => {
    expect(STORAGE_SCHEMA_VERSION).toBe(1);
  });

  it('can construct a valid Habit object', () => {
    const habit: Habit = {
      id: 'abc-123',
      name: 'Su İç',
      createdAt: '2024-01-15T08:00:00.000Z',
      completedDates: ['2024-01-15'],
      streak: 3,
    };

    expect(habit.id).toBe('abc-123');
    expect(habit.name).toBe('Su İç');
    expect(habit.completedDates).toContain('2024-01-15');
    expect(habit.streak).toBe(3);
  });

  it('can construct a valid AppStorage object', () => {
    const storage: AppStorage = {
      version: 1,
      habits: [],
      lastSyncedAt: '2024-01-15T10:00:00.000Z',
    };

    expect(storage.version).toBe(1);
    expect(storage.habits).toEqual([]);
    expect(storage.lastSyncedAt).toBeDefined();
  });

  it('AppStorage works without lastSyncedAt', () => {
    const storage: AppStorage = {
      version: 1,
      habits: [],
    };

    expect(storage.lastSyncedAt).toBeUndefined();
  });
});
