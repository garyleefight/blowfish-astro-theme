export interface SearchEntry {
  date?: string;
  title: string;
  section: string;
  summary: string;
  content: string;
  permalink: string;
  externalUrl?: string;
  type: string;
}

export function getSearchIndex(): SearchEntry[] {
  return [
    {
      date: 'February 17, 2026',
      title: 'Blowfish Astro Rewrite',
      section: 'Docs',
      summary: 'Entry point for component demos and template parity routes.',
      content:
        'Live component demos, shortcode previews, article partials, and site template parity status for the Blowfish Astro rewrite.',
      permalink: '/',
      type: 'page'
    },
    {
      date: 'February 17, 2026',
      title: 'Homepage Layout',
      section: 'Theme',
      summary: 'Profile, page, hero, background, card, and custom homepage layout parity.',
      content:
        'Demonstrates all Blowfish homepage layout variants using Astro components and Tailwind utility classes.',
      permalink: '/homepage-layout/',
      type: 'page'
    },
    {
      date: 'February 17, 2026',
      title: 'Hero + Author Partials',
      section: 'Theme',
      summary: 'Mappings for hero partial variants and author partials.',
      content:
        'Covers basic, background, big, thumb-and-background hero components and author metadata blocks.',
      permalink: '/theme/hero/',
      type: 'page'
    },
    {
      date: 'February 17, 2026',
      title: 'List Template',
      section: 'Theme',
      summary: 'Parity demo for Blowfish list template.',
      content:
        'List view route mirroring Blowfish list template structure with header, cards, and pagination.',
      permalink: '/theme/list/',
      type: 'page'
    },
    {
      date: 'February 17, 2026',
      title: 'Single Template',
      section: 'Theme',
      summary: 'Single article template parity with toc, related, and series.',
      content:
        'Single page route includes article links, metadata blocks, table of contents, sharing links, related posts, and series links.',
      permalink: '/theme/single/',
      type: 'page'
    },
    {
      date: 'February 17, 2026',
      title: 'Term Template',
      section: 'Theme',
      summary: 'Term taxonomy route parity.',
      content:
        'Term template route demonstrating taxonomy listing and term-specific behavior.',
      permalink: '/theme/term/',
      type: 'page'
    },
    {
      date: 'February 17, 2026',
      title: 'Terms Template',
      section: 'Theme',
      summary: 'Terms index parity route.',
      content:
        'Top-level taxonomy terms page analogous to Blowfish terms template.',
      permalink: '/theme/terms/',
      type: 'page'
    },
    {
      date: 'February 17, 2026',
      title: 'Search',
      section: 'Theme',
      summary: 'Modal search behavior powered by Fuse.js and index.json.',
      content:
        'Search overlay supports keyboard shortcut slash, escape to close, and arrow navigation over search results.',
      permalink: '/search/',
      type: 'page'
    }
  ];
}
