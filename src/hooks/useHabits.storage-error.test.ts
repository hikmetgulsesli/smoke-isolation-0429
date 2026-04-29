import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useHabits } from './useHabits';
import { AppStorage, STORAGE_KEY } from '../types/habit';

const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  let shouldThrow = false;
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      if (shouldThrow) {
        throw new Error('QuotaExceededError');
      }
      store[key] = value;
    },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; },
    setShouldThrow: (val: boolean) => { shouldThrow = val; },
  };
})();

Object.defineProperty(global, 'localStorage', {
  value: mockLocalStorage,
});

describe('useHabits storage error handling', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    mockLocalStorage.setShouldThrow(false);
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('surfaces storage write error when localStorage is full', () => {
    const { result } = renderHook(() => useHabits());

    // Enable throwing on write
    mockLocalStorage.setShouldThrow(true);

    act(() => {
      result.current.addHabit('Su İç');
    });

    // Advance debounced writer
    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(result.current.error).toBe('Veriler kaydedilemedi. Lütfen tarayıcınızda yer açın.');
  });

  it('clears storage error with clearError', () => {
    const { result } = renderHook(() => useHabits());

    mockLocalStorage.setShouldThrow(true);

    act(() => {
      result.current.addHabit('Su İç');
    });

    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(result.current.error).not.toBeNull();

    act(() => {
      result.current.clearError();
    });

    expect(result.current.error).toBeNull();
  });

  it('habits remain in memory even when storage write fails', () => {
    const { result } = renderHook(() => useHabits());

    mockLocalStorage.setShouldThrow(true);

    act(() => {
      result.current.addHabit('Kitap Oku');
    });

    act(() => {
      vi.advanceTimersByTime(400);
    });

    expect(result.current.habits).toHaveLength(1);
    expect(result.current.habits[0].name).toBe('Kitap Oku');
  });

  it('does not overwrite existing storage when write fails', () => {
    const existingData: AppStorage = {
      version: 1,
      habits: [{ id: 'h1', name: 'Egzersiz', createdAt: '2024-01-01T00:00:00.000Z', completedDates: [], streak: 0 }],
    };
    mockLocalStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));

    const { result } = renderHook(() => useHabits());

    mockLocalStorage.setShouldThrow(true);

    act(() => {
      result.current.addHabit('Yeni Alışkanlık');
    });

    act(() => {
      vi.advanceTimersByTime(400);
    });

    // Existing storage should not be overwritten
    const raw = mockLocalStorage.getItem(STORAGE_KEY);
    const parsed = JSON.parse(raw!);
    expect(parsed.habits).toHaveLength(1);
    expect(parsed.habits[0].name).toBe('Egzersiz');
  });
});
