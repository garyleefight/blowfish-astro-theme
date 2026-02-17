# Blowfish Full Parity Tracker

Goal: reproduce official Blowfish theme behavior in Astro-native implementation.

Source baseline: `/tmp/blowfish-upstream` (GitHub `nunocoracao/blowfish`).

## Status legend

- DONE: Implemented in Astro package
- PARTIAL: Implemented with differences
- TODO: Not yet implemented

## Homepage

- DONE `layouts/partials/home/profile.html` -> `src/components/home/BlowfishHomeProfile.astro`
- DONE `layouts/partials/home/page.html` -> `src/components/home/BlowfishHomePage.astro`
- DONE `layouts/partials/home/hero.html` -> `src/components/home/BlowfishHomeHero.astro`
- DONE `layouts/partials/home/background.html` -> `src/components/home/BlowfishHomeBackground.astro`
- DONE `layouts/partials/home/card.html` -> `src/components/home/BlowfishHomeCard.astro`
- DONE `layouts/partials/home/custom.html` -> `src/components/home/BlowfishHomeCustom.astro`

## Recent Articles

- PARTIAL `layouts/partials/recent-articles/main.html`
- PARTIAL `layouts/partials/recent-articles/list.html`
- PARTIAL `layouts/partials/recent-articles/cardview.html`
- PARTIAL `layouts/partials/recent-articles/cardview-fullwidth.html`

## Shortcodes

- DONE major shortcode surface in `src/components/*`
- DONE missing shortcode stubs/components from upstream:
  - `codeberg`, `forgejo`, `gitea`, `gitlab`, `huggingface`, `keyword`, `keywordList`, `list`, `mdimporter`, `screenshot`, `swatches`

## Core templates

- PARTIAL `layouts/_default/baseof.html` -> `src/layouts/site/BlowfishSiteLayout.astro`
- PARTIAL `layouts/_default/list.html` -> `src/pages/theme/list.astro`
- PARTIAL `layouts/_default/single.html` -> `src/pages/theme/single.astro`
- PARTIAL `layouts/_default/term.html` -> `src/pages/theme/term.astro`
- PARTIAL `layouts/_default/terms.html` -> `src/pages/theme/terms.astro`
- PARTIAL `layouts/404.html` -> `src/pages/404.astro`
- PARTIAL `layouts/robots.txt` -> `src/pages/robots.txt.ts`

## Site partials

- PARTIAL `layouts/partials/header/*` -> `src/components/site/BlowfishHeader.astro`
- PARTIAL `layouts/partials/footer.html` -> `src/components/site/BlowfishFooter.astro`
- PARTIAL `layouts/partials/head.html` -> `src/components/site/BlowfishHead.astro`
- PARTIAL `layouts/partials/search.html` -> `src/pages/search.astro` + `src/pages/search-index.json.ts`
- PARTIAL `layouts/partials/pagination.html` -> `src/components/site/BlowfishPagination.astro`
- PARTIAL `layouts/partials/breadcrumbs.html` -> `src/components/site/BlowfishBreadcrumbs.astro`
- TODO `layouts/partials/hero/*`
- TODO `layouts/partials/author*.html`
- PARTIAL `layouts/partials/toc.html` -> `src/components/article/BlowfishToc.astro`
- PARTIAL `layouts/partials/schema.html` -> `src/components/site/BlowfishSchema.astro`
- PARTIAL `layouts/partials/related.html` -> `src/components/article/BlowfishRelated.astro`
- PARTIAL analytics partials -> `src/components/site/BlowfishAnalytics.astro`

## Article rendering

- PARTIAL `layouts/partials/article-link/simple.html` -> `src/components/article/BlowfishArticleLinkSimple.astro`
- PARTIAL `layouts/partials/article-link/card.html` -> `src/components/article/BlowfishArticleLinkCard.astro`
- PARTIAL `layouts/partials/article-link/card-related.html` -> `src/components/article/BlowfishArticleLinkCardRelated.astro`
- PARTIAL article meta partials (`article-meta/*`, `meta/*`) -> `src/components/article/BlowfishArticleMeta*.astro`
- PARTIAL article pagination / sharing / series -> `src/components/article/BlowfishSharingLinks.astro`, `src/components/article/BlowfishSeries.astro`, `src/components/site/BlowfishPagination.astro`

## Assets and behavior

- TODO port CSS components/schemes parity
- PARTIAL port JS behavior parity: search and scroll-to-top done; tabs, gallery, mermaid, chart, appearance toggle remaining
- PARTIAL icon parity (full upstream icon/lib/img assets copied to `public/blowfish-*`; runtime mapping still TODO)

## Current focus

1. Build core site template parity (`base`, `header`, `footer`, list/single/taxonomy pages)
2. Add missing shortcodes
3. Complete search/pagination/article-meta behaviors
