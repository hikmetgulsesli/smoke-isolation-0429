import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EmptyState } from './EmptyState';

describe('EmptyState component', () => {
  it('renders title and description', () => {
    render(<EmptyState title="Henüz yok" description="Başlamak için ekle." />);
    expect(screen.getByRole('heading', { name: 'Henüz yok' })).toBeInTheDocument();
    expect(screen.getByText('Başlamak için ekle.')).toBeInTheDocument();
  });

  it('renders default icon', () => {
    render(<EmptyState title="Test" description="Desc" />);
    expect(screen.getByText('self_improvement')).toBeInTheDocument();
  });

  it('renders custom icon', () => {
    render(<EmptyState title="Test" description="Desc" icon="spa" />);
    expect(screen.getByText('spa')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <EmptyState title="Test" description="Desc">
        <button>Özel Buton</button>
      </EmptyState>
    );
    expect(screen.getByRole('button', { name: 'Özel Buton' })).toBeInTheDocument();
  });
});
