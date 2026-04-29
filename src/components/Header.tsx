interface HeaderProps {
  title?: string;
}

export function Header({ title = 'Alışkanlık Takip' }: HeaderProps) {
  return (
    <header className="bg-surface-80 backdrop-blur-md docked full-width top-0 sticky border-b border-surface-variant z-40">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
        <h1 className="text-xl font-bold tracking-tight text-on-surface font-body antialiased">
          {title}
        </h1>
        <button
          aria-label="Hesap"
          type="button"
          className="text-primary hover:bg-surface-container-low-50 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center cursor-pointer"
          data-smoke-ignore disabled
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
