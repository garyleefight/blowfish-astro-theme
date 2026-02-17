import { getSearchIndex } from '../lib/search-index';

export function GET() {
  const data = getSearchIndex().map((entry) => ({
    title: entry.title,
    summary: entry.summary,
    href: entry.permalink,
    section: entry.section,
    date: entry.date,
    tags: [entry.type, entry.section.toLowerCase()]
  }));

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
