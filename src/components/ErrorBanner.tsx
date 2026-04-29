import { useCallback } from 'react';

interface ErrorBannerProps {
  title?: string;
  message: string;
  onClose?: () => void;
}

export function ErrorBanner({ title = 'Bağlantı Hatası', message, onClose }: ErrorBannerProps) {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <div
      className="bg-error-container text-on-error-container rounded-lg p-md flex items-start gap-md mb-xl shadow-sm border border-error/20"
      role="alert"
      data-testid="error-banner"
    >
      <span
        className="material-symbols-outlined text-[24px] mt-0.5"
        style={{ fontVariationSettings: "'FILL' 1" }}
        aria-hidden="true"
      >
        error
      </span>
      <div className="flex-1">
        <h3 className="font-label-sm text-label-sm uppercase tracking-widest opacity-80 mb-1">
          {title}
        </h3>
        <p className="font-body-md text-body-md font-medium">{message}</p>
      </div>
      {onClose && (
        <button
          aria-label="Hatayı kapat"
          className="text-on-error-container hover:opacity-70 p-1 rounded-full transition-opacity flex items-center justify-center cursor-pointer"
          onClick={handleClose}
          data-testid="error-banner-close"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      )}
    </div>
  );
}
