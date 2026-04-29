import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBanner } from './ErrorBanner';

describe('ErrorBanner component', () => {
  const mockClose = vi.fn();

  beforeEach(() => {
    mockClose.mockClear();
  });

  it('renders with default title and message', () => {
    render(<ErrorBanner message="Veriler kaydedilemedi." />);
    expect(screen.getByText('Bağlantı Hatası')).toBeInTheDocument();
    expect(screen.getByText('Veriler kaydedilemedi.')).toBeInTheDocument();
  });

  it('renders with custom title', () => {
    render(<ErrorBanner title="Kayıt Hatası" message="Lütfen yenileyin." />);
    expect(screen.getByText('Kayıt Hatası')).toBeInTheDocument();
    expect(screen.getByText('Lütfen yenileyin.')).toBeInTheDocument();
  });

  it('has alert role for accessibility', () => {
    render(<ErrorBanner message="Bir hata oluştu." />);
    expect(screen.getByTestId('error-banner')).toHaveAttribute('role', 'alert');
  });

  it('shows close button when onClose is provided', () => {
    render(<ErrorBanner message="Hata" onClose={mockClose} />);
    expect(screen.getByTestId('error-banner-close')).toBeInTheDocument();
  });

  it('does not show close button when onClose is not provided', () => {
    render(<ErrorBanner message="Hata" />);
    expect(screen.queryByTestId('error-banner-close')).not.toBeInTheDocument();
  });

  it('calls onClose when close button clicked', () => {
    render(<ErrorBanner message="Hata" onClose={mockClose} />);
    fireEvent.click(screen.getByTestId('error-banner-close'));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it('has aria-label on close button', () => {
    render(<ErrorBanner message="Hata" onClose={mockClose} />);
    expect(screen.getByLabelText('Hatayı kapat')).toBeInTheDocument();
  });

  it('renders error icon', () => {
    render(<ErrorBanner message="Hata" />);
    expect(screen.getByText('error')).toBeInTheDocument();
  });
});
