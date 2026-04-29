import { useCallback, useEffect, useRef, useState } from 'react';
import { Habit, AppStorage } from '../types/habit';
import { readStorage, writeStorage, createDebouncedWriter } from '../utils/storage';
import { validateHabitName } from '../utils/validation';
import { getToday } from '../utils/dateUtils';

export interface UseHabitsReturn {
  habits: Habit[];
  error: string | null;
  addHabit: (name: string) => boolean;
  toggleHabit: (id: string) => void;
  deleteHabit: (id: string) => void;
  clearError: () => void;
}

function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export function useHabits(): UseHabitsReturn {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [error, setError] = useState<string | null>(null);
  const debouncedWriterRef = useRef(createDebouncedWriter(300, (message) => {
    setError(message);
  }));

  // Load from localStorage on mount
  useEffect(() => {
    const stored = readStorage();
    if (stored && Array.isArray(stored.habits)) {
      setHabits(stored.habits);
    }
  }, []);

  // Persist to localStorage whenever habits change
  useEffect(() => {
    const payload: AppStorage = {
      version: 1,
      habits,
    };
    debouncedWriterRef.current(payload);
  }, [habits]);

  const addHabit = useCallback((name: string): boolean => {
    const validation = validateHabitName(name);
    if (!validation.valid) {
      setError(validation.error ?? 'Geçersiz alışkanlık adı');
      return false;
    }

    const trimmed = name.trim();
    const newHabit: Habit = {
      id: generateId(),
      name: trimmed,
      createdAt: new Date().toISOString(),
      completedDates: [],
      streak: 0,
    };

    setHabits((prev) => [newHabit, ...prev]);
    setError(null);
    return true;
  }, []);

  const toggleHabit = useCallback((id: string) => {
    const today = getToday();
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;
        const isCompleted = habit.completedDates.includes(today);
        const completedDates = isCompleted
          ? habit.completedDates.filter((d) => d !== today)
          : [...habit.completedDates, today];

        const streak = calculateStreak(completedDates);

        return { ...habit, completedDates, streak };
      })
    );
  }, []);

  const deleteHabit = useCallback((id: string) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    habits,
    error,
    addHabit,
    toggleHabit,
    deleteHabit,
    clearError,
  };
}

function calculateStreak(completedDates: string[]): number {
  if (completedDates.length === 0) return 0;
  // Fix: remove duplicates with Set before calculating streak
  const uniqueDates = [...new Set(completedDates)];
  const sorted = [...uniqueDates].sort();
  const today = getToday();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  const lastCompleted = sorted[sorted.length - 1];
  if (lastCompleted !== today && lastCompleted !== yesterdayStr) {
    return 0;
  }

  let streak = 0;
  let checkDate = new Date(lastCompleted);
  for (let i = sorted.length - 1; i >= 0; i--) {
    const dateStr = sorted[i];
    const expected = checkDate.toISOString().split('T')[0];
    if (dateStr === expected) {
      streak++;
      checkDate.setDate(checkDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}
