// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum - Yeni Başlayanlar İçin
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { HabitInput } from "../components/HabitInput";
import { EmptyState } from "../components/EmptyState";

interface BosDurumYeniBaslayanlarIcinProps {
  onAddHabit: (name: string) => boolean;
  error?: string | null;
  onClearError?: () => void;
}

const QUICK_ADD_OPTIONS = ['Su İç', 'Kitap Oku', 'Yürüyüş Yap'];

export function BosDurumYeniBaslayanlarIcin({ onAddHabit, error, onClearError }: BosDurumYeniBaslayanlarIcinProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-teal-50/80 dark:bg-slate-950/80 backdrop-blur-md text-teal-600 dark:text-teal-400 font-inter antialiased docked full-width top-0 sticky border-b border-teal-100 dark:border-slate-800 flat no shadows z-40 transition-colors active:scale-95 duration-200">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold tracking-tight text-teal-900 dark:text-teal-50">Alışkanlık Takip</h1>
      <div className="flex items-center space-x-4">
      <button aria-label="Hesap" type="button" data-smoke-ignore className="p-2 rounded-full hover:bg-teal-100/50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 cursor-pointer">
      <span className="material-symbols-outlined" data-icon="account_circle" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-container-margin py-xl flex flex-col gap-2xl relative pb-3xl">
      {/* Input Section */}
      <HabitInput
        onAdd={onAddHabit}
        error={error}
        onClearError={onClearError}
        placeholder="Yeni bir alışkanlık ekle..."
        quickAddOptions={QUICK_ADD_OPTIONS}
      />
      {/* Empty State Content Area */}
      <EmptyState
        title="Henüz bir alışkanlık eklemediniz"
        description="Yukarıdaki alana yazarak ilk alışkanlığınızı ekleyebilirsiniz."
      />
      </main>
      {/* BottomNavBar */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg fixed bottom-0 w-full z-50 border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(13,148,136,0.05)] md:hidden">
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe">
      <button aria-label="Bugün - Aktif" data-smoke-ignore className="flex flex-col items-center justify-center text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70 group" type="button">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-teal-500 transition-all" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span className="text-[11px] font-medium font-inter group-hover:text-teal-500 transition-all">Bugün</span>
      </button>
      <button aria-label="İstatistik" data-smoke-ignore className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 group" type="button">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-teal-500 transition-all" data-icon="insights" style={{fontVariationSettings: "'FILL' 0"}}>insights</span>
      <span className="text-[11px] font-medium font-inter group-hover:text-teal-500 transition-all">İstatistik</span>
      </button>
      <button aria-label="Ayarlar" data-smoke-ignore className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 group" type="button">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-teal-500 transition-all" data-icon="settings" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      <span className="text-[11px] font-medium font-inter group-hover:text-teal-500 transition-all">Ayarlar</span>
      </button>
      </div>
      </nav>
      {/* Spacer for Bottom Nav on Mobile */}
      <div className="h-[80px] md:hidden w-full bg-transparent"></div>
    </>
  );
}
