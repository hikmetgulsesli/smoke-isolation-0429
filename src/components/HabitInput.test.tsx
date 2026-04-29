import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HabitInput } from './HabitInput';

describe('HabitInput component', () => {
  const mockAdd = vi.fn();
  const mockClearError = vi.fn();

  beforeEach(() => {
    mockAdd.mockReset();
    mockClearError.mockReset();
  });

  it('renders input with placeholder', () => {
    render(<HabitInput onAdd={mockAdd} />);
    expect(screen.getByPlaceholderText('Yeni bir alışkanlık ekle...')).toBeInTheDocument();
  });

  it('renders custom placeholder', () => {
    render(<HabitInput onAdd={mockAdd} placeholder="Özel placeholder..." />);
    expect(screen.getByPlaceholderText('Özel placeholder...')).toBeInTheDocument();
  });

  it('calls onAdd when Ekle button clicked', () => {
    render(<HabitInput onAdd={mockAdd} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Su İç' } });
    fireEvent.click(screen.getByRole('button', { name: 'Ekle' }));
    expect(mockAdd).toHaveBeenCalledWith('Su İç');
  });

  it('calls onAdd when Enter pressed', () => {
    render(<HabitInput onAdd={mockAdd} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Kitap Oku' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(mockAdd).toHaveBeenCalledWith('Kitap Oku');
  });

  it('does not call onAdd for empty input', () => {
    render(<HabitInput onAdd={mockAdd} />);
    fireEvent.click(screen.getByRole('button', { name: 'Ekle' }));
    expect(mockAdd).not.toHaveBeenCalled();
  });

  it('clears input after successful add', () => {
    mockAdd.mockReturnValue(true);
    render(<HabitInput onAdd={mockAdd} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Yürüyüş' } });
    fireEvent.click(screen.getByRole('button', { name: 'Ekle' }));
    expect(input).toHaveValue('');
  });

  it('keeps input after failed add', () => {
    mockAdd.mockReturnValue(false);
    render(<HabitInput onAdd={mockAdd} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Yürüyüş' } });
    fireEvent.click(screen.getByRole('button', { name: 'Ekle' }));
    expect(input).toHaveValue('Yürüyüş');
  });

  it('displays error message', () => {
    render(<HabitInput onAdd={mockAdd} error="Geçersiz alışkanlık" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Geçersiz alışkanlık');
  });

  it('calls onClearError when typing', () => {
    render(<HabitInput onAdd={mockAdd} error="Hata" onClearError={mockClearError} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });
    expect(mockClearError).toHaveBeenCalled();
  });

  it('renders quick add options', () => {
    render(<HabitInput onAdd={mockAdd} quickAddOptions={['Su İç', 'Kitap Oku']} />);
    expect(screen.getByRole('button', { name: 'Su İç' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Kitap Oku' })).toBeInTheDocument();
  });

  it('calls onAdd when quick add button clicked', () => {
    render(<HabitInput onAdd={mockAdd} quickAddOptions={['Su İç']} />);
    fireEvent.click(screen.getByRole('button', { name: 'Su İç' }));
    expect(mockAdd).toHaveBeenCalledWith('Su İç');
  });

  it('calls onQuickAdd when provided', () => {
    const mockQuickAdd = vi.fn();
    render(<HabitInput onAdd={mockAdd} quickAddOptions={['Su İç']} onQuickAdd={mockQuickAdd} />);
    fireEvent.click(screen.getByRole('button', { name: 'Su İç' }));
    expect(mockQuickAdd).toHaveBeenCalledWith('Su İç');
    expect(mockAdd).not.toHaveBeenCalled();
  });

  it('has aria-label on input', () => {
    render(<HabitInput onAdd={mockAdd} />);
    expect(screen.getByLabelText('Yeni alışkanlık ekle')).toBeInTheDocument();
  });
});
