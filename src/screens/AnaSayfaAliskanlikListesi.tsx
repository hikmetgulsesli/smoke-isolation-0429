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
import { ErrorBanner } from "../components/ErrorBanner";

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
        {error && (
          <ErrorBanner
            title="Bağlantı Hatası"
            message={error}
            onClose={onClearError}
          />
        )}
        <section className="mb-xl">
          <HabitInput
            onAdd={onAddHabit}
            error={null}
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
      <nav className="md:hidden bg-surface-container-lowest-90 backdrop-blur-lg fixed bottom-0 w-full z-50 border-t border-surface-variant shadow-[0_-4px_6px_-1px_rgba(0,104,95,0.05)]">
        <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe">
          <button className="flex flex-col items-center justify-center text-primary bg-surface-container-low-50 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70 cursor-pointer">
            <span className="material-symbols-outlined mb-1" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            <span className="text-[11px] font-medium font-body">Bugün</span>
          </button>
          <button className="flex flex-col items-center justify-center text-outline px-4 py-1 hover:text-primary transition-all tap-highlight-transparent active:opacity-70 cursor-pointer">
            <span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
            <span className="text-[11px] font-medium font-body">İstatistik</span>
          </button>
          <button className="flex flex-col items-center justify-center text-outline px-4 py-1 hover:text-primary transition-all tap-highlight-transparent active:opacity-70 cursor-pointer">
            <span className="material-symbols-outlined mb-1" data-icon="settings">settings</span>
            <span className="text-[11px] font-medium font-body">Ayarlar</span>
          </button>
        </div>
      </nav>
    </>
  );
}
