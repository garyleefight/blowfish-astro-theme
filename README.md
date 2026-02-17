# blowfish-astro-theme

A standalone Astro theme repository that recreates Blowfish-style visuals and offers compatibility-focused component parameters.

## Goals

- Visual style close to Hugo Blowfish
- Astro-native implementation (no Hugo runtime)
- Static-first output for Cloudflare Pages free tier
- Component params aligned with Blowfish docs where possible

## Install

```bash
npm install @garyleefight/blowfish-astro-theme
```

## Use in Astro

In your app layout/page:

```astro
---
import '@garyleefight/blowfish-astro-theme/styles.css';
import { BlowfishBaseLayout, BlowfishAlert, BlowfishBadge, BlowfishButton } from '@garyleefight/blowfish-astro-theme';
---

<BlowfishBaseLayout title="My Site" description="Personal site">
  <BlowfishBadge text="New" color="primary" />
  <BlowfishAlert type="info" title="Heads up" content="This theme is Astro-native." />
  <BlowfishButton href="/blog" label="Read blog" variant="primary" />
</BlowfishBaseLayout>
```

## Compatibility approach

This package does not execute Hugo templates/shortcodes.
It recreates equivalent behavior in Astro and preserves parameter names where practical.

## Included components (phase 1 shortcode layer)

- `BlowfishBaseLayout`
- `BlowfishAccordion`, `BlowfishAccordionItem`
- `BlowfishAlert`
- `BlowfishApexCharts` (placeholder hook)
- `BlowfishArticle`
- `BlowfishBadge`
- `BlowfishBlockquote`
- `BlowfishButton`
- `BlowfishCard`
- `BlowfishCarousel`
- `BlowfishChart` (placeholder hook)
- `BlowfishCodeImporter`
- `BlowfishDetails`
- `BlowfishEmoji`
- `BlowfishFigure`
- `BlowfishGallery`
- `BlowfishGist`
- `BlowfishGitHubCard`
- `BlowfishIcon`
- `BlowfishKaTeX`
- `BlowfishLead`
- `BlowfishLTR`, `BlowfishRTL`
- `BlowfishMarkdown`
- `BlowfishMermaid`
- `BlowfishShortcode`
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

- Shortcode usage examples: `docs/SHORTCODE_USAGE.md`
- Compatibility and aliases: `COMPATIBILITY.md`
- Homepage layout docs demo: `/homepage-layout` (when running dev server)
