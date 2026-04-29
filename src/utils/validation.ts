export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export function validateHabitName(name: string): ValidationResult {
  const trimmed = name.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: 'Alışkanlık adı boş olamaz' };
  }

  if (trimmed.length > 100) {
    return { valid: false, error: 'Alışkanlık adı 100 karakterden uzun olamaz' };
  }

  const allowedPattern = /^[a-zA-ZÇçĞğİıÖöŞşÜüÜü0-9\s\-_.!,?()]+$/;
  if (!allowedPattern.test(trimmed)) {
    return { valid: false, error: 'Alışkanlık adı geçersiz karakterler içeriyor' };
  }

  return { valid: true };
}
