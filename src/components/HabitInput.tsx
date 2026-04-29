import { useState, useCallback, KeyboardEvent } from 'react';

interface HabitInputProps {
  onAdd: (name: string) => boolean;
  error?: string | null;
  onClearError?: () => void;
  placeholder?: string;
  quickAddOptions?: string[];
  onQuickAdd?: (name: string) => void;
}

export function HabitInput({
  onAdd,
  error,
  onClearError,
  placeholder = 'Yeni bir alışkanlık ekle...',
  quickAddOptions,
  onQuickAdd,
}: HabitInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed) return;
    const success = onAdd(trimmed);
    if (success) {
      setValue('');
    }
  }, [value, onAdd]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (error && onClearError) {
        onClearError();
      }
    },
    [error, onClearError]
  );

  const handleQuickAdd = useCallback(
    (name: string) => {
      if (onQuickAdd) {
        onQuickAdd(name);
      } else {
        onAdd(name);
      }
    },
    [onAdd, onQuickAdd]
  );

  return (
    <section className="w-full">
      <div className="relative bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,104,95,0.03)] border border-surface-variant p-1">
        <div className="flex items-center">
          <span
            className="material-symbols-outlined text-outline pl-md"
            data-icon="add"
            style={{ fontVariationSettings: "'FILL' 0" }}
          >
            add
          </span>
          <input
            aria-label="Yeni alışkanlık ekle"
            className="w-full bg-transparent border-none text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 px-md py-sm h-12"
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button
            className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-colors rounded-lg px-lg py-sm mr-1 font-label-md text-label-md h-10 flex items-center justify-center cursor-pointer"
            onClick={handleSubmit}
          >
            Ekle
          </button>
        </div>
      </div>
      {error && (
        <p className="mt-sm text-error text-body-sm font-body-sm px-md" role="alert">
          {error}
        </p>
      )}
      {quickAddOptions && quickAddOptions.length > 0 && (
        <div className="mt-lg flex flex-col gap-md items-center">
          <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
            Popüler Başlangıçlar
          </span>
          <div className="flex flex-wrap justify-center gap-sm">
            {quickAddOptions.map((option) => (
              <button
                key={option}
                aria-label={option}
                className="bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant px-md py-sm rounded-full font-body-sm text-body-sm border border-surface-variant/50 flex items-center gap-2 cursor-pointer"
                onClick={() => handleQuickAdd(option)}
              >
                {getQuickAddIcon(option)}
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function getQuickAddIcon(name: string): React.ReactNode {
  const iconMap: Record<string, string> = {
    'Su İç': 'water_drop',
    'Kitap Oku': 'menu_book',
    'Yürüyüş Yap': 'directions_walk',
  };
  const icon = iconMap[name] ?? 'add_circle';
  return (
    <span className="material-symbols-outlined text-[18px]" data-icon={icon}>
      {icon}
    </span>
  );
}
