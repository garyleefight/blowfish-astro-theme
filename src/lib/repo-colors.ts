import repoColorsJson from '../data/repoColors.json';

const repoColors = repoColorsJson as Record<string, string | null>;
const defaultColor = '#0077b6';
const modelColor = '#ff6b35';

export function getRepoLanguageColor(language?: string | null): string {
  if (!language) return defaultColor;
  if (language === 'model') return modelColor;
  const color = repoColors[language];
  return color || defaultColor;
}
