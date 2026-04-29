// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa - Alışkanlık Listesi
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { Habit } from "../types/habit";
import { HabitInput } from "../components/HabitInput";
import { Header } from "../components/Header";
import { HabitList } from "../components/HabitList";

interface AnaSayfaAliskanlikListesiProps {
  habits: Habit[];
  onAddHabit: (name: string) => boolean;
  onToggleHabit: (id: string) => void;
  onDeleteHabit: (id: string) => void;
  error?: string | null;
  onClearError?: () => void;
}

export function AnaSayfaAliskanlikListesi(props: AnaSayfaAliskanlikListesiProps) {
  const { habits, onAddHabit, onToggleHabit, onDeleteHabit, error, onClearError } = props;

  return (
    <>
      <Header />
      <main className="flex-grow w-full max-w-2xl mx-auto px-container-margin py-xl pb-3xl relative z-10">
        <section className="mb-xl">
          <HabitInput
            onAdd={onAddHabit}
            error={error}
            onClearError={onClearError}
            placeholder="Yeni bir alışkanlık yazın..."
          />
        </section>
        <HabitList
          habits={habits}
          onToggleHabit={onToggleHabit}
          onDeleteHabit={onDeleteHabit}
        />
      </main>
      <nav className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg fixed bottom-0 w-full z-50 border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(13,148,136,0.05)]">
        <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe">
          <button disabled data-smoke-ignore className="flex flex-col items-center justify-center text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70 cursor-not-allowed disabled:opacity-50">
            <span className="material-symbols-outlined mb-1" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="text-[11px] font-medium font-inter">Bugün</span>
          </button>
          <button disabled data-smoke-ignore className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 cursor-not-allowed disabled:opacity-50">
            <span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
            <span className="text-[11px] font-medium font-inter">İstatistik</span>
          </button>
          <button disabled data-smoke-ignore className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 cursor-not-allowed disabled:opacity-50">
            <span className="material-symbols-outlined mb-1" data-icon="settings">settings</span>
            <span className="text-[11px] font-medium font-inter">Ayarlar</span>
          </button>
        </div>
      </nav>
    </>
  );
}
