# Codex Handoff Context

Last updated: 2026-02-17
Repo: `blowfish-astro-theme`
Goal: rewrite Hugo Blowfish theme into Astro-native package with parity tracking.

## Current status

- Upstream baseline cloned at: `/tmp/blowfish-upstream`
- Parity tracker: `docs/PARITY_TRACKER.md`
- Build status: `npm run build` passing
- Core completed slices:
  - homepage layouts (`profile/page/hero/background/card/custom`)
  - shortcode surface (official shortcode names covered)
  - core templates (`list/single/term/terms`, `404`, `robots`)
  - article partial components (link/meta/toc/related/sharing/series)
  - head/schema/analytics scaffolding
  - search endpoint + Fuse client runtime
  - runtime layer for tabs/gallery/mermaid/chart/typeit/scroll-top/theme toggle

## Important conventions

- Keep only files derived from official Blowfish repo design/features.
- Remove speculative scaffolding if it does not map to upstream.
- Maintain static output and Cloudflare Pages compatibility (no SSR requirements).

## Key files

- `docs/PARITY_TRACKER.md`: feature-by-feature status
- `src/layouts/site/BlowfishSiteLayout.astro`: base site shell
- `src/components/site/BlowfishRuntime.astro`: runtime behavior bootstrapping
- `src/pages/theme/*`: parity demo pages for templates
- `src/pages/homepage-layout.astro`: homepage layout parity demo

## Suggested next slice

1. `partials/meta/*` full parity
2. `partials/series/*` structure parity beyond current scaffold
3. CSS scheme parity (`assets/css/schemes/*`) as selectable theme presets
4. replace placeholder social/icon text with true icon mapping from `public/blowfish-icons/*`

## Quick resume commands

```bash
cd /Users/garyleefight/Development/personal-website-astro/blowfish-astro-theme
npm install --cache .npm-cache
npm run dev
npm run build
```
