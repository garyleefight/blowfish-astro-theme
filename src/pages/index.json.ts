import { getSearchIndex } from '../lib/search-index';

export function GET() {
  const data = getSearchIndex();

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
