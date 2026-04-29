import { Habit } from '../types/habit';
import { HabitCard } from './HabitCard';
import { getToday } from '../utils/dateUtils';

interface HabitListProps {
  habits: Habit[];
  onToggleHabit: (id: string) => void;
  onDeleteHabit: (id: string) => void;
}

export function HabitList({ habits, onToggleHabit, onDeleteHabit }: HabitListProps) {
  if (habits.length === 0) {
    return null;
  }

  const today = getToday();

  return (
    <section className="space-y-md" aria-label="Alışkanlık listesi">
      {habits.map((habit, index) => (
        <div
          key={habit.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${Math.min(index * 50, 1000)}ms`,
          }}
        >
          <HabitCard
            habit={habit}
            today={today}
            onToggle={onToggleHabit}
            onDelete={onDeleteHabit}
          />
        </div>
      ))}
    </section>
  );
}
