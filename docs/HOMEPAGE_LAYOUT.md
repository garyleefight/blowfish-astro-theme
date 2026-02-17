# Homepage Layout

Use `BlowfishHomepage` to render Blowfish-like homepage layouts.

Supported `layout` values:

- `profile`
- `page`
- `hero`
- `background`
- `card`
- `custom`

Example:

```astro
---
import { BlowfishHomepage } from '@garyleefight/blowfish-astro-theme';

const config = {
  layout: 'hero',
  title: 'Build Better Themes Faster',
  subtitle: 'Homepage layout: hero',
  description: 'A bold introduction section with image and call-to-action.',
  image: '/images/hero.jpg',
  ctaLabel: 'Read Docs',
  ctaHref: '/docs',
  showRecent: true,
  recentLimit: 3,
  cardView: true
};

const recent = [
  { title: 'Post 1', href: '/posts/post-1' },
  { title: 'Post 2', href: '/posts/post-2' }
];
---

<BlowfishHomepage config={config} articles={recent} />
```

Config interfaces are exported from `src/types/homepage.ts`.
