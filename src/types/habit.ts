export interface Habit {
  id: string;
  name: string;
  createdAt: string;
  completedDates: string[];
  streak: number;
}

export interface AppStorage {
  version: number;
  habits: Habit[];
  lastSyncedAt?: string;
}

export const STORAGE_SCHEMA_VERSION = 1;
export const STORAGE_KEY = 'habit-tracker-storage';
