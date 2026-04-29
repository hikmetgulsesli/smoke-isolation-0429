import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HataDurumuKayitSorunu } from './HataDurumuKayitSorunu';
import { Habit } from '../types/habit';

const mockToggle = vi.fn();
const mockDelete = vi.fn();
const mockAdd = vi.fn();
const mockClearError = vi.fn();

const baseHabits: Habit[] = [
  { id: 'h1', name: 'Sabah Koşusu', createdAt: '2024-01-01T00:00:00.000Z', completedDates: [], streak: 12 },
  { id: 'h2', name: 'Kitap Okuma', createdAt: '2024-01-01T00:00:00.000Z', completedDates: [], streak: 5 },
  { id: 'h3', name: 'Su Tüketimi', createdAt: '2024-01-01T00:00:00.000Z', completedDates: [], streak: 2 },
];

function renderScreen(props: Partial<Parameters<typeof HataDurumuKayitSorunu>[0]> = {}) {
  return render(
    <HataDurumuKayitSorunu
      habits={baseHabits}
      onAddHabit={mockAdd}
      onToggleHabit={mockToggle}
      onDeleteHabit={mockDelete}
      error="Veriler kaydedilemedi."
      onClearError={mockClearError}
      {...props}
    />
  );
}

describe('HataDurumuKayitSorunu screen', () => {
  beforeEach(() => {
    mockToggle.mockClear();
    mockDelete.mockClear();
    mockAdd.mockClear();
    mockClearError.mockClear();
  });

  it('renders header', () => {
    renderScreen();
    expect(screen.getByText('Alışkanlık Takip')).toBeInTheDocument();
  });

  it('renders error banner with message', () => {
    renderScreen();
    expect(screen.getByText('Bağlantı Hatası')).toBeInTheDocument();
    expect(screen.getByText('Veriler kaydedilemedi.')).toBeInTheDocument();
  });

  it('calls onClearError when error banner close clicked', () => {
    renderScreen();
    const closeBtn = screen.getByLabelText('Hatayı kapat');
    fireEvent.click(closeBtn);
    expect(mockClearError).toHaveBeenCalledTimes(1);
  });

  it('renders dashboard header with date and progress', () => {
    renderScreen();
    expect(screen.getByRole('heading', { name: 'Bugün' })).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  it('renders habit input', () => {
    renderScreen();
    expect(screen.getByPlaceholderText('Yeni bir alışkanlık yazın...')).toBeInTheDocument();
  });

  it('renders habit list', () => {
    renderScreen();
    baseHabits.forEach((habit) => {
      expect(screen.getByText(habit.name)).toBeInTheDocument();
    });
  });

  it('renders offline hint message', () => {
    renderScreen();
    expect(screen.getByText(/Çevrimdışı moddasınız/)).toBeInTheDocument();
    expect(screen.getByText(/Değişiklikler yerel olarak bekletiliyor/)).toBeInTheDocument();
  });

  it('does not render error banner when no error', () => {
    renderScreen({ error: null });
    expect(screen.queryByText('Bağlantı Hatası')).not.toBeInTheDocument();
  });

  it('renders bottom navigation on mobile', () => {
    renderScreen();
    expect(screen.getAllByText('Bugün').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('İstatistik')).toBeInTheDocument();
    expect(screen.getByText('Ayarlar')).toBeInTheDocument();
  });

  it('calculates progress percentage correctly', () => {
    const completedHabits: Habit[] = [
      { ...baseHabits[0], completedDates: [new Date().toISOString().split('T')[0]] },
      baseHabits[1],
      baseHabits[2],
    ];
    renderScreen({ habits: completedHabits });
    expect(screen.getByText('33%')).toBeInTheDocument();
  });
});
