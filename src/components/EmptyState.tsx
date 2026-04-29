interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function EmptyState({ icon = 'self_improvement', title, description, children }: EmptyStateProps) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center py-3xl px-lg">
      <div className="mb-xl relative">
        {/* Decorative background blob */}
        <div className="absolute inset-0 bg-primary-fixed-dim/20 rounded-full blur-2xl transform scale-150"></div>
        <div className="w-32 h-32 bg-surface-container-low rounded-full flex items-center justify-center relative z-10 border border-surface-variant shadow-[0_8px_24px_rgba(0,104,95,0.05)]">
          <span className="material-symbols-outlined text-[64px] text-primary-container/60" data-icon={icon} style={{ fontVariationSettings: "'FILL' 0" }}>{icon}</span>
        </div>
        {/* Floating ambient elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary-fixed-dim/30 rounded-full blur-sm"></div>
        <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-tertiary-fixed-dim/20 rounded-full blur-md"></div>
      </div>
      <h2 className="font-h2 text-h2 text-on-surface mb-sm">{title}</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm mx-auto opacity-80 leading-relaxed">
        {description}
      </p>
      {children && <div className="mt-2xl flex flex-col gap-md items-center w-full">{children}</div>}
    </section>
  );
}
