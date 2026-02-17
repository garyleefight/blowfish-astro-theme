import en from '../i18n/en';

type Params = Record<string, string | number>;

const getValue = (obj: unknown, path: string): unknown => {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
};

const interpolate = (template: string, params?: Params): string => {
  if (!params) return template;

  return template.replace(/{{\s*\.(\w+)\s*}}/g, (_, key: string) => {
    const value = params[key];
    return value == null ? '' : String(value);
  });
};

export const t = (key: string, params?: Params): string => {
  const value = getValue(en, key);

  if (typeof value === 'string') {
    return interpolate(value, params);
  }

  if (value && typeof value === 'object' && 'one' in value && 'other' in value) {
    const count = Number(params?.Count ?? 0);
    const template = count === 1 ? (value as { one: string }).one : (value as { other: string }).other;
    return interpolate(template, params);
  }

  return key;
};
