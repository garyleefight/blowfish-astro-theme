# blowfish-astro-theme

A standalone Astro theme repository that recreates Blowfish-style visuals and offers compatibility-focused component parameters.

## Goals

- Visual style close to Hugo Blowfish
- Astro-native implementation (no Hugo runtime)
- Static-first output for Cloudflare Pages free tier
- Component params aligned with Blowfish docs where possible

## Install

From npm:

```bash
npm install @garyleefight/blowfish-astro-theme
```

From GitHub:

```bash
npm install github:garyleefight/blowfish-astro-theme
```

## Use The Library In Your Astro Project

### 1) Sync static assets

This theme needs runtime/icon assets under your app's `public/` folder (`blowfish-lib`, `blowfish-icons`, `blowfish-img`):

```bash
npx blowfish-astro-sync
```

Optional: auto-sync after install in your consumer project:

```json
{
  "scripts": {
    "postinstall": "blowfish-astro-sync"
  }
}
```

### 2) Use layouts/components

Use `BlowfishSiteLayout` for full Blowfish behavior (head/header/footer/search/runtime):

```astro
---
import BlowfishSiteLayout from '@garyleefight/blowfish-astro-theme/layouts/site/BlowfishSiteLayout.astro';
import { BlowfishAlert, BlowfishBadge, BlowfishButton } from '@garyleefight/blowfish-astro-theme';
---

<BlowfishSiteLayout
  title="Home"
  siteTitle="My Site"
  nav={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]}
  enableAppearanceToggle={true}
>
  <BlowfishBadge>New</BlowfishBadge>
  <BlowfishAlert>Blowfish Astro components are active.</BlowfishAlert>
  <BlowfishButton href="/blog">Read blog</BlowfishButton>
</BlowfishSiteLayout>
```

Homepage layout mode (Blowfish-style `homepage.layout`) is available directly on `BlowfishSiteLayout`:

```astro
---
import BlowfishSiteLayout from '@garyleefight/blowfish-astro-theme/layouts/site/BlowfishSiteLayout.astro';
---

<BlowfishSiteLayout
  title="Home"
  siteTitle="My Site"
  homepage={{
    layout: 'hero',
    title: 'Sirui Li',
    subtitle: 'Tech lead | Staff software engineer',
    homepageImage: '/images/hero.jpg',
    image: '/images/avatar.jpg',
    showRecent: true,
    showRecentItems: 3
  }}
  homepageArticles={[
    { title: 'Post 1', href: '/posts/post-1' },
    { title: 'Post 2', href: '/posts/post-2' }
  ]}
>
  <p>Homepage content</p>
</BlowfishSiteLayout>
```

Direct component import also works:

```astro
---
import BlowfishChart from '@garyleefight/blowfish-astro-theme/components/BlowfishChart.astro';
---

<BlowfishChart type="bar" labels='["A","B","C"]' data='[2,7,4]' />
```

If you render components outside `BlowfishSiteLayout`, import styles manually:

```astro
---
import '@garyleefight/blowfish-astro-theme/styles.css';
---
```

## Compatibility approach

This package does not execute Hugo templates/shortcodes.
It recreates equivalent behavior in Astro and preserves parameter names where practical.

## Included components

- `BlowfishAccordion`, `BlowfishAccordionItem`
- `BlowfishAlert`
- `BlowfishArticle`
- `BlowfishBadge`
- `BlowfishBlockquote`
- `BlowfishButton`
- `BlowfishCarousel`
- `BlowfishChart`
- `BlowfishCodeImporter`
- `BlowfishFigure`
- `BlowfishGallery`
- `BlowfishGist`
- `BlowfishGitHub`
- `BlowfishIcon`
- `BlowfishKaTeX`
- `BlowfishLead`
- `BlowfishLTR`, `BlowfishRTL`
- `BlowfishMermaid`
- `BlowfishTabs`, `BlowfishTab`
- `BlowfishTimeline`, `BlowfishTimelineItem`
- `BlowfishTypeIt`
- `BlowfishVideo`
- `BlowfishYouTubeLite`
- `BlowfishHomepage` (homepage layout dispatcher)

## Next steps

- Extend alias coverage for edge-case shortcode parameters
- Add article layout, taxonomy pages, and nav/footer variants
- Publish package to npm and tag `v1.0.0`

## Examples

- Full parity tracker: `docs/PARITY_TRACKER.md`
- Homepage layout docs demo: `/homepage-layout` (when running dev server)
