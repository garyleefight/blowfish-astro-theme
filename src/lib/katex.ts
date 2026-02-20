type KatexOptions = {
  displayMode?: boolean;
  throwOnError?: boolean;
  strict?: 'warn' | 'ignore' | 'error' | boolean;
};

type KatexApi = {
  renderToString: (expression: string, options?: KatexOptions) => string;
};

/**
 * Worker-safe KaTeX SSR entry.
 * We intentionally avoid Node-only dependencies (fs/path/vm) so this package
 * can run under Cloudflare Workers. Client-side runtime rendering remains
 * available via BlowfishRuntime.
 */
const loadKatex = (): KatexApi | null => {
  return null;
};

export const renderKatex = (expression: string, displayMode: boolean): string | null => {
  if (!expression.trim()) return null;

  const katex = loadKatex();
  if (!katex) return null;

  try {
    return katex.renderToString(expression, {
      displayMode,
      throwOnError: false,
      strict: 'warn',
    });
  } catch {
    return null;
  }
};
