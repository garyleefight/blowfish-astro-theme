export function GET() {
  const data = [
    {
      title: 'A post about Astro themes',
      summary: 'Implementing a full Blowfish parity layer.',
      href: '/theme/list',
      section: 'blog',
      date: '2026-02-17',
      tags: ['astro', 'theme']
    },
    {
      title: 'Single Post Template',
      summary: 'Single template parity target with meta, toc, related, and series.',
      href: '/theme/single',
      section: 'blog',
      date: '2026-02-17',
      tags: ['templates', 'parity']
    },
    {
      title: 'Homepage Layout Compatibility',
      summary: 'Profile, page, hero, background, card, and custom layout examples.',
      href: '/homepage-layout',
      section: 'docs',
      date: '2026-02-17',
      tags: ['homepage', 'layout']
    }
  ];

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
