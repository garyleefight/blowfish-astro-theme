export async function fetchTextSafe(url: string): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'blowfish-astro-theme/0.1 (+https://github.com/nunocoracao/blowfish)'
      }
    });
    clearTimeout(timer);
    if (!response.ok) return null;
    return await response.text();
  } catch {
    clearTimeout(timer);
    return null;
  }
}

export async function fetchJsonSafe<T>(url: string): Promise<T | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
        'User-Agent': 'blowfish-astro-theme/0.1 (+https://github.com/nunocoracao/blowfish)'
      }
    });
    clearTimeout(timer);
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    clearTimeout(timer);
    return null;
  }
}
