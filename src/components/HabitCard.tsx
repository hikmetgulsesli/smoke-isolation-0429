import { Habit } from '../types/habit';

interface HabitCardProps {
  habit: Habit;
  today: string;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitCard({ habit, today, onToggle, onDelete }: HabitCardProps) {
  const isCompleted = habit.completedDates.includes(today);

  return (
    <div
      className="group flex items-center bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_12px_-4px_rgba(0,104,95,0.05)] transition-all hover:shadow-[0_8px_16px_-6px_rgba(0,104,95,0.1)] relative overflow-hidden"
      data-testid={`habit-card-${habit.id}`}
    >
      {isCompleted && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
      )}
      <button
        aria-label={isCompleted ? 'Tamamlanmadı olarak işaretle' : 'Tamamlandı olarak işaretle'}
        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-md transition-colors cursor-pointer ${
          isCompleted
            ? 'bg-primary text-on-primary shadow-sm'
            : 'border-2 border-outline hover:border-primary text-transparent'
        }`}
        onClick={() => onToggle(habit.id)}
      >
        <span
          className="material-symbols-outlined text-[16px]"
          data-icon="check"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check
        </span>
      </button>
      <div className="flex-grow min-w-0">
        <p
          title={habit.name}
          className={`font-body-lg text-body-lg truncate ${
            isCompleted
              ? 'text-outline line-through opacity-70'
              : 'text-on-surface'
          }`}
        >
          {habit.name}
        </p>
      </div>
      <button
        aria-label="Sil"
        className="flex-shrink-0 text-outline hover:text-error transition-colors p-2 rounded-full hover:bg-error-container opacity-0 md:group-hover:opacity-100 focus:opacity-100 cursor-pointer"
        onClick={() => onDelete(habit.id)}
      >
        <span
          className="material-symbols-outlined text-[20px]"
          data-icon="delete"
        >
          delete
        </span>
      </button>
    </div>
  );
}
