import { Habit } from "../types/habit";
import { Header } from "../components/Header";
import { ErrorBanner } from "../components/ErrorBanner";
import { HabitList } from "../components/HabitList";
import { HabitInput } from "../components/HabitInput";
import { getToday } from "../utils/dateUtils";

interface HataDurumuKayitSorunuProps {
  habits: Habit[];
  onAddHabit: (name: string) => boolean;
  onToggleHabit: (id: string) => void;
  onDeleteHabit: (id: string) => void;
  error?: string | null;
  onClearError?: () => void;
}

export function HataDurumuKayitSorunu({
  habits,
  onAddHabit,
  onToggleHabit,
  onDeleteHabit,
  error,
  onClearError,
}: HataDurumuKayitSorunuProps) {
  const today = getToday();
  const completedCount = habits.filter((h) => h.completedDates.includes(today)).length;
  const progressPercent = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;

  // Format current date in Turkish
  const now = new Date();
  const dateFormatter = new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  });
  const formattedDate = dateFormatter.format(now);

  return (
    <div data-setfarm-root="us-004-error" className="min-h-screen bg-background text-on-background flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <main className="flex-1 w-full max-w-2xl mx-auto px-container-margin py-xl pb-3xl md:pb-xl relative z-10">
        {error && (
          <ErrorBanner
            title="Bağlantı Hatası"
            message={error}
            onClose={onClearError}
          />
        )}

        {/* Dashboard Header */}
        <header className="mb-lg flex justify-between items-end">
          <div>
            <p className="font-label-md text-label-md text-on-surface-variant mb-1">{formattedDate}</p>
            <h1 className="font-h1 text-h1 text-on-surface">Bugün</h1>
          </div>
          <div className="w-12 h-12 rounded-full border-[4px] border-surface-container-highest relative flex items-center justify-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant">{progressPercent}%</span>
            <svg className="absolute inset-0 w-full h-full transform -rotate-90 opacity-40" viewBox="0 0 36 36">
              <path
                className="text-primary stroke-current"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeDasharray={`${progressPercent}, 100`}
                strokeWidth="4"
              />
            </svg>
          </div>
        </header>

        {/* Input Section (still functional for in-memory changes) */}
        <section className="mb-xl">
          <HabitInput
            onAdd={onAddHabit}
            error={null}
            onClearError={onClearError}
            placeholder="Yeni bir alışkanlık yazın..."
          />
        </section>

        {/* Disabled Habit List Area */}
        <section className="relative">
          <div className="absolute inset-0 z-10 bg-surface/30 backdrop-blur-[1px] pointer-events-none rounded-xl" />
          <div className="flex flex-col gap-sm opacity-60 grayscale-[0.2] transition-all">
            <HabitList
              habits={habits}
              onToggleHabit={onToggleHabit}
              onDeleteHabit={onDeleteHabit}
            />
          </div>
          {/* Contextual action hint due to error */}
          <div className="mt-lg text-center opacity-70">
            <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">cloud_off</span>
              Çevrimdışı moddasınız. Değişiklikler yerel olarak bekletiliyor.
            </p>
          </div>
        </section>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(13,148,136,0.05)]">
        <div className="w-full flex justify-around items-center px-4 py-3 pb-safe">
          <button
            className="flex flex-col items-center justify-center text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70 cursor-pointer"
            data-smoke-ignore
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="text-[11px] font-medium font-inter mt-1">Bugün</span>
          </button>
          <button
            className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 cursor-pointer"
            data-smoke-ignore
          >
            <span className="material-symbols-outlined">insights</span>
            <span className="text-[11px] font-medium font-inter mt-1">İstatistik</span>
          </button>
          <button
            className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 cursor-pointer"
            data-smoke-ignore
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[11px] font-medium font-inter mt-1">Ayarlar</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
