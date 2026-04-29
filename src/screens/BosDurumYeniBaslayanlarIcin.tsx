// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum - Yeni Başlayanlar İçin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumYeniBaslayanlarIcinProps {}

export function BosDurumYeniBaslayanlarIcin(props: BosDurumYeniBaslayanlarIcinProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-teal-50/80 dark:bg-slate-950/80 backdrop-blur-md text-teal-600 dark:text-teal-400 font-inter antialiased docked full-width top-0 sticky border-b border-teal-100 dark:border-slate-800 flat no shadows z-40 transition-colors active:scale-95 duration-200">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold tracking-tight text-teal-900 dark:text-teal-50">Alışkanlık Takip</h1>
      <div className="flex items-center space-x-4">
      <button aria-label="Account" className="p-2 rounded-full hover:bg-teal-100/50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400">
      <span className="material-symbols-outlined" data-icon="account_circle" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-container-margin py-xl flex flex-col gap-2xl relative pb-3xl">
      {/* Input Section */}
      <section className="w-full">
      <div className="relative bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,104,95,0.03)] border border-surface-variant p-1">
      <div className="flex items-center">
      <span className="material-symbols-outlined text-outline pl-md" data-icon="add" style={{fontVariationSettings: "'FILL' 0"}}>add</span>
      <input aria-label="Yeni alışkanlık ekle" className="w-full bg-transparent border-none text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:ring-0 px-md py-sm h-12" placeholder="Yeni bir alışkanlık ekle..." type="text" />
      <button className="bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-colors rounded-lg px-lg py-sm mr-1 font-label-md text-label-md h-10 flex items-center justify-center">
                              Ekle
                          </button>
      </div>
      </div>
      </section>
      {/* Empty State Content Area */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-3xl px-lg">
      <div className="mb-xl relative">
      {/* Decorative background blob */}
      <div className="absolute inset-0 bg-primary-fixed-dim/20 rounded-full blur-2xl transform scale-150"></div>
      <div className="w-32 h-32 bg-surface-container-low rounded-full flex items-center justify-center relative z-10 border border-surface-variant shadow-[0_8px_24px_rgba(0,104,95,0.05)]">
      <span className="material-symbols-outlined text-[64px] text-primary-container/60" data-icon="self_improvement" style={{fontVariationSettings: "'FILL' 0"}}>self_improvement</span>
      </div>
      {/* Floating ambient elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary-fixed-dim/30 rounded-full blur-sm"></div>
      <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-tertiary-fixed-dim/20 rounded-full blur-md"></div>
      </div>
      <h2 className="font-h2 text-h2 text-on-surface mb-sm">Henüz bir alışkanlık eklemediniz</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mx-auto opacity-80 leading-relaxed">
                      Yukarıdaki alana yazarak ilk alışkanlığınızı ekleyebilirsiniz.
                  </p>
      <div className="mt-2xl flex flex-col gap-md items-center">
      <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Popüler Başlangıçlar</span>
      <div className="flex flex-wrap justify-center gap-sm">
      <button className="bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant px-md py-sm rounded-full font-body-sm text-body-sm border border-surface-variant/50 flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]" data-icon="water_drop">water_drop</span> Su İç
                          </button>
      <button className="bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant px-md py-sm rounded-full font-body-sm text-body-sm border border-surface-variant/50 flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]" data-icon="menu_book">menu_book</span> Kitap Oku
                          </button>
      <button className="bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant px-md py-sm rounded-full font-body-sm text-body-sm border border-surface-variant/50 flex items-center gap-2">
      <span className="material-symbols-outlined text-[18px]" data-icon="directions_walk">directions_walk</span> Yürüyüş Yap
                          </button>
      </div>
      </div>
      </section>
      </main>
      {/* BottomNavBar */}
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg fixed bottom-0 w-full z-50 border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(13,148,136,0.05)] md:hidden">
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe">
      <a aria-label="Bugün - Aktif" className="flex flex-col items-center justify-center text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70 group" href="#">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-teal-500 transition-all" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span className="text-[11px] font-medium font-inter group-hover:text-teal-500 transition-all">Bugün</span>
      </a>
      <a aria-label="İstatistik" className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 group" href="#">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-teal-500 transition-all" data-icon="insights" style={{fontVariationSettings: "'FILL' 0"}}>insights</span>
      <span className="text-[11px] font-medium font-inter group-hover:text-teal-500 transition-all">İstatistik</span>
      </a>
      <a aria-label="Ayarlar" className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70 group" href="#">
      <span className="material-symbols-outlined text-[24px] mb-1 group-hover:text-teal-500 transition-all" data-icon="settings" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      <span className="text-[11px] font-medium font-inter group-hover:text-teal-500 transition-all">Ayarlar</span>
      </a>
      </div>
      </nav>
      {/* Spacer for Bottom Nav on Mobile */}
      <div className="h-[80px] md:hidden w-full bg-transparent"></div>
    </>
  );
}
