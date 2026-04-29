import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';
import { useHabits } from './useHabits';
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

describe('useHabits hook', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initializes with empty habits when localStorage is empty', () => {
    const { result } = renderHook(() => useHabits());
    expect(result.current.habits).toEqual([]);
    expect(result.current.error).toBeNull();
  });

  it('loads habits from localStorage on mount', () => {
    const data: AppStorage = {
      version: 1,
      habits: [
        { id: 'h1', name: 'Su İç', createdAt: '2024-01-01T00:00:00.000Z', completedDates: [], streak: 0 },
      ],
    };
    mockLocalStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    const { result } = renderHook(() => useHabits());
    expect(result.current.habits).toHaveLength(1);
    expect(result.current.habits[0].name).toBe('Su İç');
  });

  it('adds a valid habit', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      const success = result.current.addHabit('Yürüyüş Yap');
      expect(success).toBe(true);
    });

    expect(result.current.habits).toHaveLength(1);
    expect(result.current.habits[0].name).toBe('Yürüyüş Yap');
    expect(result.current.habits[0].streak).toBe(0);
    expect(result.current.error).toBeNull();
  });

  it('rejects empty habit name', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      const success = result.current.addHabit('  ');
      expect(success).toBe(false);
    });

    expect(result.current.habits).toHaveLength(0);
    expect(result.current.error).toBe('Alışkanlık adı boş olamaz');
  });

  it('rejects invalid habit name', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      const success = result.current.addHabit('Hack<script>');
      expect(success).toBe(false);
    });

    expect(result.current.habits).toHaveLength(0);
    expect(result.current.error).toBe('Alışkanlık adı geçersiz karakterler içeriyor');
  });

  it('persists added habit to localStorage', async () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      result.current.addHabit('Kitap Oku');
    });

    // Advance debounced writer
    act(() => {
      vi.advanceTimersByTime(400);
    });

    const raw = mockLocalStorage.getItem(STORAGE_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.habits).toHaveLength(1);
    expect(parsed.habits[0].name).toBe('Kitap Oku');
  });

  it('toggles habit completion for today', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      result.current.addHabit('Meditasyon');
    });

    const id = result.current.habits[0].id;

    act(() => {
      result.current.toggleHabit(id);
    });

    expect(result.current.habits[0].completedDates).toHaveLength(1);
    expect(result.current.habits[0].streak).toBe(1);

    act(() => {
      result.current.toggleHabit(id);
    });

    expect(result.current.habits[0].completedDates).toHaveLength(0);
    expect(result.current.habits[0].streak).toBe(0);
  });

  it('deletes a habit', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      result.current.addHabit('Egzersiz');
    });

    const id = result.current.habits[0].id;

    act(() => {
      result.current.deleteHabit(id);
    });

    expect(result.current.habits).toHaveLength(0);
  });

  it('clearError resets error state', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      result.current.addHabit('');
    });

    expect(result.current.error).not.toBeNull();

    act(() => {
      result.current.clearError();
    });

    expect(result.current.error).toBeNull();
  });

  it('supports Turkish characters in habit names', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      const success = result.current.addHabit('Yürüyüş Yap');
      expect(success).toBe(true);
    });

    expect(result.current.habits[0].name).toBe('Yürüyüş Yap');
  });

  it('trims whitespace from habit names', () => {
    const { result } = renderHook(() => useHabits());

    act(() => {
      result.current.addHabit('  Su İç  ');
    });

    expect(result.current.habits[0].name).toBe('Su İç');
  });
});
