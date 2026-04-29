import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('renders default title', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: 'Alışkanlık Takip' })).toBeInTheDocument();
  });

  it('renders custom title', () => {
    render(<Header title="Özel Başlık" />);
    expect(screen.getByRole('heading', { name: 'Özel Başlık' })).toBeInTheDocument();
  });

  it('has account button with aria-label', () => {
    render(<Header />);
    expect(screen.getByLabelText('Hesap')).toBeInTheDocument();
  });

  it('renders account icon', () => {
    render(<Header />);
    expect(screen.getByText('account_circle')).toBeInTheDocument();
  });
});
