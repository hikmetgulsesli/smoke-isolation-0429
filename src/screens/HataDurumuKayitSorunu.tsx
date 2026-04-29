// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu - Kayıt Sorunu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataDurumuKayitSorunuProps {}

export function HataDurumuKayitSorunu(props: HataDurumuKayitSorunuProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="docked full-width top-0 sticky bg-teal-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-teal-100 dark:border-slate-800 flat no shadows font-inter z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
      <div className="text-xl font-bold tracking-tight text-teal-900 dark:text-teal-50">Alışkanlık Takip</div>
      {/* Desktop Nav Cluster */}
      <nav className="hidden md:flex items-center gap-4">
      <a className="text-teal-600 dark:text-teal-400 font-semibold px-3 py-2 rounded-lg bg-teal-50/50" href="#">Bugün</a>
      <a className="text-slate-500 dark:text-slate-400 hover:bg-teal-100/50 dark:hover:bg-slate-800 transition-colors px-3 py-2 rounded-lg" href="#">İstatistik</a>
      <a className="text-slate-500 dark:text-slate-400 hover:bg-teal-100/50 dark:hover:bg-slate-800 transition-colors px-3 py-2 rounded-lg" href="#">Ayarlar</a>
      </nav>
      <button className="text-teal-600 dark:text-teal-400 hover:bg-teal-100/50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Canvas */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-container-margin py-xl pb-3xl md:pb-xl">
      {/* Error Banner */}
      <div className="bg-error-container text-on-error-container rounded-lg p-md flex items-start gap-md mb-xl shadow-sm border border-error/20">
      <span className="material-symbols-outlined text-[24px] mt-0.5" style={{fontVariationSettings: "'FILL' 1"}}>error</span>
      <div className="flex-1">
      <h3 className="font-label-sm text-label-sm uppercase tracking-widest opacity-80 mb-1">Bağlantı Hatası</h3>
      <p className="font-body-md text-body-md font-medium">Veriler kaydedilemedi. Lütfen tarayıcınızda yer açın veya sayfayı yenileyin.</p>
      </div>
      <button className="text-on-error-container hover:opacity-70 p-1 rounded-full transition-opacity flex items-center justify-center">
      <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
      </div>
      {/* Dashboard Header */}
      <header className="mb-lg flex justify-between items-end">
      <div>
      <p className="font-label-md text-label-md text-on-surface-variant mb-1">24 Ekim Salı</p>
      <h1 className="font-h1 text-h1 text-on-surface">Bugün</h1>
      </div>
      <div className="w-12 h-12 rounded-full border-[4px] border-surface-container-highest relative flex items-center justify-center">
      <span className="font-label-sm text-label-sm text-on-surface-variant">40%</span>
      {/* Faked progress ring segment for disabled state */}
      <svg className="absolute inset-0 w-full h-full transform -rotate-90 opacity-40" viewBox="0 0 36 36">
      <path className="text-primary stroke-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" strokeDasharray="45, 100" strokeWidth="4"></path>
      </svg>
      </div>
      </header>
      {/* Secondary/Disabled Habit List Area */}
      <section className="relative">
      {/* Overlay to create the disabled feel */}
      <div className="absolute inset-0 z-10 bg-surface/30 backdrop-blur-[1px] pointer-events-none rounded-xl"></div>
      <div className="flex flex-col gap-sm opacity-60 grayscale-[0.2] transition-all">
      {/* Habit Card 1: Pending */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex items-center gap-md shadow-sm">
      <div className="w-6 h-6 rounded border-2 border-outline-variant flex items-center justify-center flex-shrink-0"></div>
      <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
      <h3 className="font-body-md text-body-md text-on-surface font-medium">Sabah Koşusu</h3>
      <div className="flex items-center gap-1 text-outline">
      <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
      <span className="font-label-sm text-label-sm">12</span>
      </div>
      </div>
      <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
      <div className="bg-primary w-0 h-full rounded-full"></div>
      </div>
      </div>
      </div>
      {/* Habit Card 2: Completed */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex items-center gap-md shadow-sm">
      <div className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
      <span className="material-symbols-outlined text-[16px]">check</span>
      </div>
      <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
      <h3 className="font-body-md text-body-md text-on-surface font-medium line-through opacity-70">Kitap Okuma</h3>
      <div className="flex items-center gap-1 text-primary">
      <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
      <span className="font-label-sm text-label-sm">5</span>
      </div>
      </div>
      <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden">
      <div className="bg-primary w-full h-full rounded-full"></div>
      </div>
      </div>
      </div>
      {/* Habit Card 3: Pending */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex items-center gap-md shadow-sm">
      <div className="w-6 h-6 rounded border-2 border-outline-variant flex items-center justify-center flex-shrink-0"></div>
      <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
      <h3 className="font-body-md text-body-md text-on-surface font-medium">Su Tüketimi</h3>
      <div className="flex items-center gap-1 text-outline">
      <span className="material-symbols-outlined text-[16px]">local_fire_department</span>
      <span className="font-label-sm text-label-sm">2</span>
      </div>
      </div>
      <div className="w-full bg-primary/10 h-1 rounded-full overflow-hidden flex">
      <div className="bg-primary w-1/3 h-full border-r border-surface-container-lowest"></div>
      <div className="bg-primary/20 w-1/3 h-full border-r border-surface-container-lowest"></div>
      <div className="bg-primary/20 w-1/3 h-full"></div>
      </div>
      </div>
      </div>
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
      {/* Active: Bugün */}
      <button className="flex flex-col items-center justify-center text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span className="text-[11px] font-medium font-inter mt-1">Bugün</span>
      </button>
      {/* Inactive: İstatistik */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70">
      <span className="material-symbols-outlined">insights</span>
      <span className="text-[11px] font-medium font-inter mt-1">İstatistik</span>
      </button>
      {/* Inactive: Ayarlar */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70">
      <span className="material-symbols-outlined">settings</span>
      <span className="text-[11px] font-medium font-inter mt-1">Ayarlar</span>
      </button>
      </div>
      </nav>
    </>
  );
}
