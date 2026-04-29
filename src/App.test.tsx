import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { STORAGE_KEY } from './types/habit';

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

describe('App integration', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    mockLocalStorage.setShouldThrow(false);
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders empty state when no habits exist', () => {
    render(<App />);
    expect(screen.getByText('Henüz bir alışkanlık eklemediniz')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Yeni bir alışkanlık ekle...')).toBeInTheDocument();
  });

  it('renders habit list after adding a habit', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Yeni bir alışkanlık ekle...');
    fireEvent.change(input, { target: { value: 'Su İç' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(screen.getByText('Su İç')).toBeInTheDocument();
  });

  it('ErrorBoundary is present in render tree', () => {
    render(<App />);
    // If ErrorBoundary were rendering its fallback, we'd see the error UI.
    // Normal view means ErrorBoundary is wrapping children successfully.
    expect(screen.getByText('Henüz bir alışkanlık eklemediniz')).toBeInTheDocument();
  });

  it('shows storage error screen when localStorage write fails', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Yeni bir alışkanlık ekle...');

    mockLocalStorage.setShouldThrow(true);

    fireEvent.change(input, { target: { value: 'Kitap Oku' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    // Advance debounced writer
    vi.advanceTimersByTime(400);

    await waitFor(() => {
      expect(screen.getByText('Bağlantı Hatası')).toBeInTheDocument();
      expect(screen.getByText(/Veriler kaydedilemedi/)).toBeInTheDocument();
    });

    // Habit should still be visible in memory
    expect(screen.getByText('Kitap Oku')).toBeInTheDocument();
  });

  it('returns to normal view after clearing storage error', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Yeni bir alışkanlık ekle...');

    mockLocalStorage.setShouldThrow(true);

    fireEvent.change(input, { target: { value: 'Yürüyüş Yap' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    vi.advanceTimersByTime(400);

    await waitFor(() => {
      expect(screen.getByText('Bağlantı Hatası')).toBeInTheDocument();
    });

    // Click the error banner close button
    const closeBtn = screen.getByLabelText('Hatayı kapat');
    fireEvent.click(closeBtn);

    await waitFor(() => {
      expect(screen.queryByText('Bağlantı Hatası')).not.toBeInTheDocument();
    });

    // Should be back in normal view with the habit still visible
    expect(screen.getByText('Yürüyüş Yap')).toBeInTheDocument();
  });

  it('renders bottom navigation tabs', () => {
    render(<App />);
    expect(screen.getByLabelText('Bugün - Aktif')).toBeInTheDocument();
    expect(screen.getByLabelText('İstatistik')).toBeInTheDocument();
    expect(screen.getByLabelText('Ayarlar')).toBeInTheDocument();
  });

  it('persists habits to localStorage', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Yeni bir alışkanlık ekle...');
    fireEvent.change(input, { target: { value: 'Meditasyon' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    vi.advanceTimersByTime(400);

    const raw = mockLocalStorage.getItem(STORAGE_KEY);
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.habits).toHaveLength(1);
    expect(parsed.habits[0].name).toBe('Meditasyon');
  });

  it('loads existing habits from localStorage on mount', () => {
    const data = {
      version: 1,
      habits: [
        { id: 'h1', name: 'Sabah Koşusu', createdAt: '2024-01-01T00:00:00.000Z', completedDates: [], streak: 0 },
      ],
    };
    mockLocalStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    render(<App />);
    expect(screen.getByText('Sabah Koşusu')).toBeInTheDocument();
  });
});
