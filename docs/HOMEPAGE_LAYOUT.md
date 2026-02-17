# Homepage Layout

Use `BlowfishHomepage` to render Blowfish-like homepage layouts.

Supported `layout` values:

- `profile`
- `page`
- `hero`
- `background`
- `card`
- `custom`

Key config options aligned with Blowfish docs:

- `layout`
- `homepageImage`
- `showRecent`
- `showRecentItems`
- `cardView`
- `cardViewScreenWidth`

Example:

```astro
---
import { BlowfishHomepage } from '@garyleefight/blowfish-astro-theme';

const config = {
  layout: 'hero',
  title: 'Sirui Li',
  subtitle: 'Tech lead | Staff software engineer',
  homepageImage: '/images/hero.jpg',
  image: '/images/avatar.jpg',
  showRecent: true,
  showRecentItems: 3,
  cardView: true,
};

const recent = [
  { title: 'Post 1', href: '/posts/post-1' },
  { title: 'Post 2', href: '/posts/post-2' }
];
---

<BlowfishHomepage config={config} articles={recent}>
  <p>Homepage content goes here.</p>
</BlowfishHomepage>
```

See the visual demo at `/homepage-layout`.
