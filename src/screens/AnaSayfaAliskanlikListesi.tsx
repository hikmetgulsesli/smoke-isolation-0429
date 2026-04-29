// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa - Alışkanlık Listesi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaAliskanlikListesiProps {}

export function AnaSayfaAliskanlikListesi(props: AnaSayfaAliskanlikListesiProps) {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-teal-50/80 dark:bg-slate-950/80 backdrop-blur-md docked full-width top-0 sticky border-b border-teal-100 dark:border-slate-800 flat no shadows z-40">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold tracking-tight text-teal-900 dark:text-teal-50 font-inter antialiased">
                      Alışkanlık Takip
                  </h1>
      <button className="text-teal-600 dark:text-teal-400 hover:bg-teal-100/50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </header>
      {/* Main Content Canvas */}
      <main className="flex-grow w-full max-w-2xl mx-auto px-container-margin py-xl pb-3xl relative z-10">
      {/* Input Section */}
      <section className="mb-xl">
      <div className="relative bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_-4px_rgba(0,104,95,0.05)] border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all flex items-center p-2">
      <input className="flex-grow bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-outline p-2 h-12 w-full outline-none" placeholder="Yeni bir alışkanlık yazın..." type="text" />
      <button className="bg-primary text-on-primary hover:bg-primary-container active:bg-on-primary-fixed-variant transition-colors rounded-lg px-md py-sm h-10 ml-2 font-label-md text-label-md shadow-sm whitespace-nowrap">
                          Ekle
                      </button>
      </div>
      </section>
      {/* List Section */}
      <section className="space-y-md">
      {/* Completed Item */}
      <div className="group flex items-center bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_12px_-4px_rgba(0,104,95,0.05)] transition-all hover:shadow-[0_8px_16px_-6px_rgba(0,104,95,0.1)] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <button className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center mr-md transition-colors shadow-sm">
      <span className="material-symbols-outlined text-[16px]" data-icon="check" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
      </button>
      <div className="flex-grow">
      <p className="font-body-lg text-body-lg text-outline line-through opacity-70">Su İç</p>
      </div>
      <button className="flex-shrink-0 text-outline hover:text-error transition-colors p-2 rounded-full hover:bg-error-container opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      {/* Pending Item 1 */}
      <div className="group flex items-center bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_12px_-4px_rgba(0,104,95,0.05)] transition-all hover:shadow-[0_8px_16px_-6px_rgba(0,104,95,0.1)] hover:border-primary-fixed-dim">
      <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-outline hover:border-primary text-transparent flex items-center justify-center mr-md transition-colors">
      <span className="material-symbols-outlined text-[16px]" data-icon="check">check</span>
      </button>
      <div className="flex-grow">
      <p className="font-body-lg text-body-lg text-on-surface">Kitap Oku</p>
      </div>
      <button className="flex-shrink-0 text-outline hover:text-error transition-colors p-2 rounded-full hover:bg-error-container opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      {/* Pending Item 2 */}
      <div className="group flex items-center bg-surface-container-lowest rounded-xl p-md border border-outline-variant shadow-[0_4px_12px_-4px_rgba(0,104,95,0.05)] transition-all hover:shadow-[0_8px_16px_-6px_rgba(0,104,95,0.1)] hover:border-primary-fixed-dim">
      <button className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-outline hover:border-primary text-transparent flex items-center justify-center mr-md transition-colors">
      <span className="material-symbols-outlined text-[16px]" data-icon="check">check</span>
      </button>
      <div className="flex-grow">
      <p className="font-body-lg text-body-lg text-on-surface">30 Dakika Yürüyüş</p>
      </div>
      <button className="flex-shrink-0 text-outline hover:text-error transition-colors p-2 rounded-full hover:bg-error-container opacity-0 group-hover:opacity-100 focus:opacity-100">
      <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
      </button>
      </div>
      </section>
      </main>
      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg fixed bottom-0 w-full z-50 border-t border-slate-100 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(13,148,136,0.05)]">
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe">
      <button className="flex flex-col items-center justify-center text-teal-600 dark:text-teal-400 bg-teal-50/50 dark:bg-teal-900/20 rounded-xl px-4 py-1 tap-highlight-transparent active:opacity-70">
      <span className="material-symbols-outlined mb-1" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span className="text-[11px] font-medium font-inter">Bugün</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70">
      <span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
      <span className="text-[11px] font-medium font-inter">İstatistik</span>
      </button>
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-4 py-1 hover:text-teal-500 transition-all tap-highlight-transparent active:opacity-70">
      <span className="material-symbols-outlined mb-1" data-icon="settings">settings</span>
      <span className="text-[11px] font-medium font-inter">Ayarlar</span>
      </button>
      </div>
      </nav>
    </>
  );
}
