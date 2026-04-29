interface HeaderProps {
  title?: string;
}

export function Header({ title = 'Alışkanlık Takip' }: HeaderProps) {
  return (
    <header className="bg-teal-50/80 dark:bg-slate-950/80 backdrop-blur-md docked full-width top-0 sticky border-b border-teal-100 dark:border-slate-800 flat no shadows z-40">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold tracking-tight text-teal-900 dark:text-teal-50 font-inter antialiased">
          {title}
        </h1>
        <button
          aria-label="Hesap"
          className="text-teal-600 dark:text-teal-400 hover:bg-teal-100/50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center cursor-pointer"
        >
          <span
            className="material-symbols-outlined"
            data-icon="account_circle"
          >
            account_circle
          </span>
        </button>
      </div>
    </header>
  );
}
