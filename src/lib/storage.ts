export function readStorage<T>(key: string, fallback: T, isValid?: (value: unknown) => value is T): T {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    return !isValid || isValid(parsed) ? parsed as T : fallback;
  } catch {
    return fallback;
  }
}
