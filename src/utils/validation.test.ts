import { describe, it, expect } from 'vitest';
import { validateHabitName } from './validation';

describe('validation utils', () => {
  it('accepts a valid Turkish habit name', () => {
    const result = validateHabitName('Su İç');
    expect(result.valid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it('accepts a name with Turkish characters', () => {
    const result = validateHabitName('Yürüyüş Yap');
    expect(result.valid).toBe(true);
  });

  it('rejects empty string', () => {
    const result = validateHabitName('');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Alışkanlık adı boş olamaz');
  });

  it('rejects whitespace-only string', () => {
    const result = validateHabitName('   ');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Alışkanlık adı boş olamaz');
  });

  it('rejects names over 100 characters', () => {
    const longName = 'a'.repeat(101);
    const result = validateHabitName(longName);
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Alışkanlık adı 100 karakterden uzun olamaz');
  });

  it('accepts exactly 100 characters', () => {
    const name = 'a'.repeat(100);
    const result = validateHabitName(name);
    expect(result.valid).toBe(true);
  });

  it('rejects names with invalid special characters', () => {
    const result = validateHabitName('Hack<script>');
    expect(result.valid).toBe(false);
    expect(result.error).toBe('Alışkanlık adı geçersiz karakterler içeriyor');
  });

  it('accepts names with allowed punctuation', () => {
    const result = validateHabitName('Kitap Oku - 30 dk.');
    expect(result.valid).toBe(true);
  });

  it('trims whitespace before validation', () => {
    const result = validateHabitName('  Su İç  ');
    expect(result.valid).toBe(true);
  });

  it('accepts numbers in habit name', () => {
    const result = validateHabitName('30 Dakika Yürüyüş');
    expect(result.valid).toBe(true);
  });
});
