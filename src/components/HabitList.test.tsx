import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HabitList } from './HabitList';
import { Habit } from '../types/habit';

const mockToggle = vi.fn();
const mockDelete = vi.fn();

const habits: Habit[] = [
  {
    id: 'h1',
    name: 'Su İç',
    createdAt: '2024-01-01T00:00:00.000Z',
    completedDates: [],
    streak: 0,
  },
  {
    id: 'h2',
    name: 'Kitap Oku',
    createdAt: '2024-01-02T00:00:00.000Z',
    completedDates: [new Date().toISOString().split('T')[0]],
    streak: 1,
  },
];

describe('HabitList component', () => {
  it('renders all habits', () => {
    render(
      <HabitList
        habits={habits}
        onToggleHabit={mockToggle}
        onDeleteHabit={mockDelete}
      />
    );
    expect(screen.getByText('Su İç')).toBeInTheDocument();
    expect(screen.getByText('Kitap Oku')).toBeInTheDocument();
  });

  it('renders nothing when habits is empty', () => {
    const { container } = render(
      <HabitList habits={[]} onToggleHabit={mockToggle} onDeleteHabit={mockDelete} />
    );
    expect(container.firstChild).toBeNull();
  });

  it('has correct aria-label', () => {
    render(
      <HabitList
        habits={habits}
        onToggleHabit={mockToggle}
        onDeleteHabit={mockDelete}
      />
    );
    expect(screen.getByLabelText('Alışkanlık listesi')).toBeInTheDocument();
  });

  it('renders completed habit with check label', () => {
    render(
      <HabitList
        habits={habits}
        onToggleHabit={mockToggle}
        onDeleteHabit={mockDelete}
      />
    );
    expect(screen.getByLabelText('Tamamlanmadı olarak işaretle')).toBeInTheDocument();
  });

  it('renders pending habit with correct label', () => {
    render(
      <HabitList
        habits={habits}
        onToggleHabit={mockToggle}
        onDeleteHabit={mockDelete}
      />
    );
    expect(screen.getByLabelText('Tamamlandı olarak işaretle')).toBeInTheDocument();
  });
});
