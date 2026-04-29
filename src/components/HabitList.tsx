import { Habit } from '../types/habit';
import { HabitCard } from './HabitCard';

interface HabitListProps {
  habits: Habit[];
  onToggleHabit: (id: string) => void;
  onDeleteHabit: (id: string) => void;
}

export function HabitList({ habits, onToggleHabit, onDeleteHabit }: HabitListProps) {
  if (habits.length === 0) {
    return null;
  }

  return (
    <section className="space-y-md" aria-label="Alışkanlık listesi">
      {habits.map((habit, index) => (
        <div
          key={habit.id}
          className="animate-fade-in"
          style={{
            animationDelay: `${index * 50}ms`,
          }}
        >
          <HabitCard
            habit={habit}
            onToggle={onToggleHabit}
            onDelete={onDeleteHabit}
          />
        </div>
      ))}
    </section>
  );
}
