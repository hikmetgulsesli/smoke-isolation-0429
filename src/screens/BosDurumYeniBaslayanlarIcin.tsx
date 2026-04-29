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
import { ErrorBanner } from "../components/ErrorBanner";

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
      <header className="bg-surface-80 backdrop-blur-md text-primary font-body antialiased docked full-width top-0 sticky border-b border-surface-variant z-40 transition-colors active:scale-95 duration-200">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold tracking-tight text-on-surface">Alışkanlık Takip</h1>
      <div className="flex items-center space-x-4">
      <button aria-label="Hesap" type="button" className="p-2 rounded-full hover:bg-surface-container-low-50 transition-colors text-on-surface-variant cursor-pointer" data-smoke-ignore disabled>
      <span className="material-symbols-outlined" data-icon="account_circle" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-container-margin py-xl flex flex-col gap-2xl relative pb-3xl">
      {error && (
        <ErrorBanner
          title="Bağlantı Hatası"
          message={error}
          onClose={onClearError}
        />
      )}
      {/* Input Section */}
      <HabitInput
        onAdd={onAddHabit}
        error={null}
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
      <nav className="bg-surface-container-lowest-90 backdrop-blur-lg fixed bottom-0 w-full z-50 border-t border-surface-variant shadow-[0_-4px_6px_-1px_rgba(0,104,95,0.05)] md:hidden">
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe">
      <a aria-label="Bugün - Aktif" className="flex flex-col items-center justify-center text-primary bg-surface-container-low-50 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70 group" href="#">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-primary transition-all" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span className="text-[11px] font-medium font-body group-hover:text-primary transition-all">Bugün</span>
      </a>
      <a aria-label="İstatistik" className="flex flex-col items-center justify-center text-outline px-4 py-1 hover:text-primary transition-all tap-highlight-transparent active:opacity-70 group" href="#">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-primary transition-all" data-icon="insights" style={{fontVariationSettings: "'FILL' 0"}}>insights</span>
      <span className="text-[11px] font-medium font-body group-hover:text-primary transition-all">İstatistik</span>
      </a>
      <a aria-label="Ayarlar" className="flex flex-col items-center justify-center text-outline px-4 py-1 hover:text-primary transition-all tap-highlight-transparent active:opacity-70 group" href="#">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-primary transition-all" data-icon="settings" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      <span className="text-[11px] font-medium font-body group-hover:text-primary transition-all">Ayarlar</span>
      </a>
      </div>
      </nav>
      {/* Spacer for Bottom Nav on Mobile */}
      <div className="h-[80px] md:hidden w-full bg-transparent"></div>
    </>
  );
}
