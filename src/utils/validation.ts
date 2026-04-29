export interface ValidationResult {
  valid: boolean;
  error?: string;
}

const MAX_NAME_LENGTH = 100;

const ALLOWED_PATTERN = /^[a-zA-ZÇçĞğİıÖöŞşÜü0-9\s\-_.!,?()]+$/;

export function validateHabitName(name: string): ValidationResult {
  const trimmed = name.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: 'Alışkanlık adı boş olamaz' };
  }

  if (trimmed.length > MAX_NAME_LENGTH) {
    return { valid: false, error: `Alışkanlık adı ${MAX_NAME_LENGTH} karakterden uzun olamaz` };
  }

  if (!ALLOWED_PATTERN.test(trimmed)) {
    return { valid: false, error: 'Alışkanlık adı geçersiz karakterler içeriyor' };
  }

  return { valid: true };
}
