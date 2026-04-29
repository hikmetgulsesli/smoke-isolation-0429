import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HabitCard } from './HabitCard';
import { Habit } from '../types/habit';

const mockToggle = vi.fn();
const mockDelete = vi.fn();

const baseHabit: Habit = {
  id: 'h1',
  name: 'Su İç',
  createdAt: '2024-01-01T00:00:00.000Z',
  completedDates: [],
  streak: 0,
};

function renderCard(habit: Habit) {
  return render(
    <HabitCard habit={habit} onToggle={mockToggle} onDelete={mockDelete} />
  );
}

describe('HabitCard component', () => {
  beforeEach(() => {
    mockToggle.mockClear();
    mockDelete.mockClear();
  });

  it('renders habit name', () => {
    renderCard(baseHabit);
    expect(screen.getByText('Su İç')).toBeInTheDocument();
  });

  it('shows unchecked state when not completed', () => {
    renderCard(baseHabit);
    const toggleBtn = screen.getByLabelText('Tamamlandı olarak işaretle');
    expect(toggleBtn).toBeInTheDocument();
  });

  it('shows checked state when completed today', () => {
    const today = new Date().toISOString().split('T')[0];
    const completedHabit: Habit = {
      ...baseHabit,
      completedDates: [today],
    };
    renderCard(completedHabit);
    const toggleBtn = screen.getByLabelText('Tamamlanmadı olarak işaretle');
    expect(toggleBtn).toBeInTheDocument();
  });

  it('calls onToggle when check button clicked', () => {
    renderCard(baseHabit);
    fireEvent.click(screen.getByLabelText('Tamamlandı olarak işaretle'));
    expect(mockToggle).toHaveBeenCalledWith('h1');
  });

  it('calls onDelete when delete button clicked', () => {
    renderCard(baseHabit);
    fireEvent.click(screen.getByLabelText('Sil'));
    expect(mockDelete).toHaveBeenCalledWith('h1');
  });

  it('has delete button with correct aria-label', () => {
    renderCard(baseHabit);
    expect(screen.getByLabelText('Sil')).toBeInTheDocument();
  });

  it('applies completed styling when habit is done', () => {
    const today = new Date().toISOString().split('T')[0];
    const completedHabit: Habit = {
      ...baseHabit,
      completedDates: [today],
    };
    renderCard(completedHabit);
    expect(screen.getByText('Su İç')).toHaveClass('line-through');
  });

  it('does not apply completed styling when habit is pending', () => {
    renderCard(baseHabit);
    expect(screen.getByText('Su İç')).not.toHaveClass('line-through');
  });
});
