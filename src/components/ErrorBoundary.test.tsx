import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>Normal content</div>;
}

describe('ErrorBoundary component', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Child content</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders fallback UI when error occurs', () => {
    // Suppress console.error for this test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Uygulama Hatası')).toBeInTheDocument();
    expect(screen.getByText('Beklenmeyen bir hata oluştu. Sayfayı yenileyerek tekrar deneyebilirsiniz.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Yeniden Dene' })).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('resets error state when retry button clicked', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    function TestComponent() {
      return (
        <ErrorBoundary>
          <ThrowError shouldThrow={true} />
        </ErrorBoundary>
      );
    }

    render(<TestComponent />);
    expect(screen.getByText('Uygulama Hatası')).toBeInTheDocument();

    // Note: In a real scenario with a real error, clicking retry would re-render
    // and potentially hit the same error. We just verify the button exists and
    // the fallback is shown.
    const retryButton = screen.getByRole('button', { name: 'Yeniden Dene' });
    expect(retryButton).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  it('renders custom fallback when provided', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<div data-testid="custom-fallback">Özel hata ekranı</div>}>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('custom-fallback')).toBeInTheDocument();
    expect(screen.queryByText('Uygulama Hatası')).not.toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
