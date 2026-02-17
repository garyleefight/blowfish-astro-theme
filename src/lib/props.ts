export function pickString(props: Record<string, unknown>, keys: string[], fallback = ''): string {
  for (const key of keys) {
    const value = props[key];
    if (typeof value === 'string' && value.length > 0) return value;
  }
  return fallback;
}

export function pickBoolean(props: Record<string, unknown>, keys: string[], fallback = false): boolean {
  for (const key of keys) {
    const value = props[key];
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      if (value === 'true') return true;
      if (value === 'false') return false;
    }
  }
  return fallback;
}

export function pickNumber(props: Record<string, unknown>, keys: string[], fallback = 0): number {
  for (const key of keys) {
    const value = props[key];
    if (typeof value === 'number' && Number.isFinite(value)) return value;
    if (typeof value === 'string' && value.trim() !== '') {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return fallback;
}

export function pickArray<T>(props: Record<string, unknown>, keys: string[], fallback: T[] = []): T[] {
  for (const key of keys) {
    const value = props[key];
    if (Array.isArray(value)) return value as T[];
  }
  return fallback;
}
