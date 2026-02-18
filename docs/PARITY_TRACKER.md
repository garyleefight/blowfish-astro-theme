# Blowfish Full Parity Tracker

Goal: reproduce official Blowfish theme behavior in Astro-native implementation.

Source baseline: `/tmp/blowfish-upstream` (GitHub `nunocoracao/blowfish`).
Process configuration: `REWRITE_CONFIG.json` (mandatory update checklist for future rewrite passes).

## Priority plan status (Claude 8-step)

- DONE 1. Tailwind foundation + scheme/component CSS imports
- DONE 2. Inline SVG icon system + key component wiring
- DONE 3. `.dark` class appearance flow + toggle behavior
- DONE 4. Expanded `<head>` metadata + verification + favicon + appearance bootstrap
- DONE 5. Header rewrite with desktop/mobile/subnavigation and 5 layout variants
- DONE 6. Numbered pagination with ellipsis + prev/next rel
- DONE 7. Removal of invented alert/badge/button variants
- DONE 8. i18n foundation + target component/page string migration

## Status legend

- DONE: Implemented in Astro package
- PARTIAL: Implemented with differences
- TODO: Not yet implemented

## Homepage

- DONE upstream homepage selector parity recheck completed against:
  - `layouts/index.html` (layout dispatch by `.Site.Params.homepage.layout` with fallback)
  - `layouts/partials/home/{profile,page,hero,background,card}.html`
  - `exampleSite/layouts/partials/home/custom.html`
- DONE `layouts/partials/home/profile.html` -> `src/components/home/BlowfishHomeProfile.astro`
- DONE `layouts/partials/home/page.html` -> `src/components/home/BlowfishHomePage.astro`
- DONE `layouts/partials/home/hero.html` -> `src/components/home/BlowfishHomeHero.astro`
- DONE `layouts/partials/home/background.html` -> `src/components/home/BlowfishHomeBackground.astro`
- DONE `layouts/partials/home/card.html` -> `src/components/home/BlowfishHomeCard.astro`
- DONE custom homepage mode (Astro slot equivalent of Blowfish user override at `exampleSite/layouts/partials/home/custom.html`) -> `src/components/home/BlowfishHomeCustom.astro`
- DONE homepage layout fallback parity: unknown layout value falls back to `profile` in `src/components/BlowfishHomepage.astro` (matching upstream `layouts/index.html`)

## Recent Articles

- DONE `layouts/partials/recent-articles/main.html`
- DONE `layouts/partials/recent-articles/list.html`
- DONE `layouts/partials/recent-articles/cardview.html`
- DONE `layouts/partials/recent-articles/cardview-fullwidth.html`

## Shortcodes

- DONE major shortcode surface in `src/components/*`
- DONE missing shortcode stubs/components from upstream:
  - `codeberg`, `forgejo`, `gitea`, `gitlab`, `huggingface`, `keyword`, `keywordList`, `list`, `mdimporter`, `screenshot`, `swatches`
- DONE shortcode/home/hero/meta scoped legacy component CSS removal (all component-local `<style>` blocks removed; utility/Tailwind classes now drive rendering)
- DONE removed invented generic `BlowfishCard`; GitHub shortcode component renamed to upstream-aligned `BlowfishGitHub`

## Core templates

- DONE `layouts/_default/baseof.html` -> `src/layouts/site/BlowfishSiteLayout.astro` (Astro-adapted)
- DONE homepage layout wiring via site layout: `src/layouts/site/BlowfishSiteLayout.astro` accepts `homepage` props and renders `BlowfishHomepage` only on `/`, mirroring upstream index/home dispatch behavior
- DONE removed non-upstream convenience wrapper `src/layouts/BlowfishBaseLayout.astro`; demo/docs routes now use `src/layouts/site/BlowfishSiteLayout.astro`
- DONE `layouts/_default/list.html` -> `src/pages/theme/list.astro` (parity demo route)
- DONE `layouts/_default/single.html` -> `src/pages/theme/single.astro` (parity demo route)
- DONE `layouts/_default/term.html` -> `src/pages/theme/term.astro` (parity demo route)
- DONE `layouts/_default/terms.html` -> `src/pages/theme/terms.astro` (parity demo route)
- DONE `layouts/404.html` -> `src/pages/404.astro`
- DONE `layouts/robots.txt` -> `src/pages/robots.txt.ts`

## Site partials

- DONE `layouts/partials/header/*` -> `src/components/site/BlowfishHeader.astro` + `src/components/site/header/*`
  - includes upstream header component parity for `desktop-menu`, `mobile-menu`, `a11y`, and `translations`
- DONE `layouts/partials/footer.html` -> `src/components/site/BlowfishFooter.astro` (menu/icons + attribution wired)
- DONE `layouts/partials/head.html` -> `src/components/site/BlowfishHead.astro` (expanded metadata + appearance bootstrap + social image fallback + alternate output links props)
- DONE `layouts/partials/search.html` -> `src/components/site/BlowfishSearch.astro` + `src/pages/index.json.ts` (+ compatibility endpoint `src/pages/search-index.json.ts`)
- DONE `layouts/partials/pagination.html` -> `src/components/site/BlowfishPagination.astro` (numbered pages + ellipsis)
- DONE `layouts/partials/breadcrumbs.html` -> `src/components/site/BlowfishBreadcrumbs.astro`
- DONE `layouts/partials/hero/*` -> `src/components/hero/*`
- DONE `layouts/partials/author*.html` -> `src/components/article/BlowfishAuthor*.astro`
- DONE `layouts/partials/toc.html` -> `src/components/article/BlowfishToc.astro`
- DONE `layouts/partials/schema.html` -> `src/components/site/BlowfishSchema.astro`
- DONE `layouts/partials/related.html` -> `src/components/article/BlowfishRelated.astro`
- DONE analytics partials -> `src/components/site/BlowfishAnalytics.astro`

## Article rendering

- DONE `layouts/partials/article-link/simple.html` -> `src/components/article/BlowfishArticleLinkSimple.astro`
- DONE `layouts/partials/article-link/card.html` -> `src/components/article/BlowfishArticleLinkCard.astro`
- DONE `layouts/partials/article-link/card-related.html` -> `src/components/article/BlowfishArticleLinkCardRelated.astro`
- DONE article meta partials (`article-meta/*`, `meta/*`) -> `src/components/article/BlowfishArticleMeta*.astro`, `src/components/meta/BlowfishMeta*.astro`
  - i18n updates added for date-updated/word-count/zen-mode labels
- DONE article pagination / sharing / series -> `src/components/article/BlowfishSharingLinks.astro`, `src/components/article/BlowfishSeries.astro`, `src/components/site/BlowfishPagination.astro`
  - Tailwind utility rewrite applied to article link/meta/taxonomy/toc/series/related/sharing components; scoped legacy CSS removed in this batch
  - Upstream markup/class parity tightened in this pass for `article-link/simple`, `article-link/card`, `article-link/card-related`, `series`, `related`, `sharing-links`, `breadcrumbs`, and article meta blocks

## Assets and behavior

- DONE port CSS components/schemes parity (`src/styles/schemes/*`, `src/styles/components/*`, Tailwind config + theme.css migrated; compatibility `--bf-*` token layer removed)
- DONE port JS behavior parity: search modal + keyboard flow, scroll-to-top, tabs, gallery, mermaid, chart, typeit, appearance toggle implemented in `src/components/site/BlowfishRuntime.astro`, `src/components/site/BlowfishAppearanceToggle.astro`, and `src/components/site/BlowfishSearch.astro`
- DONE background blur + a11y runtime parity hooks (`setBackgroundBlur`, `data-blur-id` targets for menu/hero blur, persisted a11y settings panel)
- DONE appearance runtime parity hooks for mermaid/logo updates (`updateMermaidTheme`, `updateLogo`)
- DONE icon parity baseline (inline SVG loading via `src/components/BlowfishIcon.astro`; key header/footer/share/alert/repo wiring done)
- DONE i18n parity (`src/lib/i18n.ts` + `src/i18n/en.ts`; component/page UI labels migrated to `t()` for parity scope)
- DONE demo hub now renders live component instances instead of plain catalog text (`src/pages/index.astro`)
- DONE layout demo routing now showcases homepage layout variants (`profile`, `page`, `hero`, `background`, `card`, `custom`) via `src/pages/blocks/layouts.astro` and `src/pages/blocks/previews/[layout].astro`
- DONE remote-data parity baseline for high-impact shortcodes:
  - API-backed repo cards (`github`, `gitlab`, `codeberg`, `forgejo`, `gitea`, `huggingface`) now fetch and render live metadata at build time with fallback behavior
  - `codeimporter` and `mdimporter` now fetch and render remote source content (line slicing for code importer)

## Current focus

1. Optional micro-tuning against upstream visual diffs
