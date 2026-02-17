import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

type KatexApi = {
  renderToString: (
    expression: string,
    options?: {
      displayMode?: boolean;
      throwOnError?: boolean;
      strict?: 'warn' | 'ignore' | 'error' | boolean;
    }
  ) => string;
};

let katexApi: KatexApi | null = null;

const loadKatex = (): KatexApi | null => {
  if (katexApi) return katexApi;

  try {
    const katexPath = path.resolve(process.cwd(), 'public/blowfish-lib/katex/katex.min.js');
    const source = fs.readFileSync(katexPath, 'utf8');
    const context: Record<string, unknown> = { console };
    context.window = context;
    context.self = context;
    context.globalThis = context;

    vm.createContext(context as vm.Context);
    vm.runInContext(source, context as vm.Context);

    const maybeKaTeX = (context as { katex?: KatexApi }).katex;
    if (maybeKaTeX && typeof maybeKaTeX.renderToString === 'function') {
      katexApi = maybeKaTeX;
      return katexApi;
    }
  } catch {
    return null;
  }

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

