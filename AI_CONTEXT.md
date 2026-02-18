# AI Rewrite Context

Last updated: 2026-02-18
Repo: `blowfish-astro-theme`
Goal: full parity rewrite of Hugo Blowfish into Astro.

## Current completion snapshot
- Claude 8-step parity plan: completed
- Tailwind parity foundation: enabled (`@tailwindcss/vite`, `tailwind.config.js`, `src/styles/theme.css`, upstream schemes/components imported)
- Dark mode parity foundation: `.dark` class flow with `data-default-appearance` / `data-auto-appearance` wired in layouts + head bootstrap script
- Icon system parity foundation: `src/components/BlowfishIcon.astro` now renders inline SVG from `public/blowfish-icons`
- Header partials: rewritten to orchestrator + desktop/mobile/subnavigation split (`src/components/site/header/*`) with upstream layout variants
- Pagination partial: upgraded to numbered pages with ellipsis and prev/next arrows
- Invented shortcode features removed for alert/badge/button (`src/components/BlowfishAlert.astro`, `src/components/BlowfishBadge.astro`, `src/components/BlowfishButton.astro`)
- i18n parity pass completed: `src/lib/i18n.ts` + `src/i18n/en.ts` in place with component/page UI labels migrated to `t()` across parity scope (search/404/meta/pagination/appearance/importers/article cards/runtime fallback labels)
- Additional i18n/meta pass: `BlowfishArticleMetaBasic`, `BlowfishMetaZenMode`, and search empty-state messaging aligned to translation flow
- Head/appearance hardening: fixed stale preference handling on system theme change, added default social image fallback, selectable color schemes, and alternate output format links in head props
- Header component parity completion: added upstream-equivalent `a11y` and `translations` header components and wired them into desktop/mobile menus
- Runtime parity completion for blur/a11y hooks: `setBackgroundBlur` + `data-blur-id` target initialization, persisted a11y panel behavior, and theme-toggle mermaid/logo refresh hooks
- Tailwind config parity tightened to upstream plugin set (`@tailwindcss/forms`, `tailwind-scrollbar`)
- Component rewrite continuation: article/site core components (`article-link*`, `ArticleMetaBasic`, `ArticleMetaTaxonomy`, `Toc`, `Series`, `Related`, `SharingLinks`, `AuthorLinks`, `Breadcrumbs`) converted to Tailwind utility markup and legacy scoped styles removed
- Parity tightening continuation: those same article/site components adjusted toward upstream Blowfish class/structure semantics (not just utility conversion)
- Full legacy-style cleanup pass completed for remaining shortcode/home/hero/author/meta/site components:
  - all component-local `<style>` blocks removed (`0` remaining in `src/components`)
  - all `var(--bf-*)` usage removed from component markup and `theme.css` compatibility token layer dropped
  - header helper classes (`bf-border-color*`, `bf-icon-color-hover`) replaced with direct utility classes
- Runtime parity refinement: tabs runtime now targets upstream-like `tab__container` / `tab__panel` structure (with fallback support), gallery selector updated to `.gallery`
- Demo hub rewritten to render live component instances instead of plain-text catalog (`src/pages/index.astro`)
- Search parity pass completed:
  - global Blowfish-style modal search overlay component added (`src/components/site/BlowfishSearch.astro`)
  - keyboard navigation and `/` shortcut flow wired
  - `index.json` endpoint added (`src/pages/index.json.ts`) and compatibility `search-index.json` retained
- Remote shortcode parity pass completed for major fetch-driven shortcodes:
  - repo cards now fetch live API metadata at build time with fallback rendering (`src/components/BlowfishGitHubCard.astro`, `src/components/BlowfishCodeberg.astro`, `src/components/BlowfishForgejo.astro`, `src/components/BlowfishGitea.astro`, `src/components/BlowfishGitLab.astro`, `src/components/BlowfishHuggingFace.astro`)
  - `codeimporter`/`mdimporter` now fetch remote content and render results (`src/components/BlowfishCodeImporter.astro`, `src/components/BlowfishMdImporter.astro`)
  - shared remote fetch + markdown utilities added (`src/lib/remote.ts`, `src/lib/markdown.ts`)
- Lite YouTube runtime parity improved:
  - script wired in runtime and stylesheet imported globally (`src/components/site/BlowfishRuntime.astro`, `src/styles/theme.css`)
- Parity tracker status now reflects completion across the Claude 8-step rewrite scope, including i18n migration
- Build status: `npm run build` passes
- Upstream-homepage parity recheck completed from source files:
  - `/tmp/blowfish-upstream/layouts/index.html`
  - `/tmp/blowfish-upstream/layouts/partials/home/{profile,page,hero,background,card}.html`
  - `/tmp/blowfish-upstream/exampleSite/layouts/partials/home/custom.html`
- `BlowfishSiteLayout` now supports Blowfish-style homepage config flow via `homepage`, `homepageArticles`, and `homepageContentHtml` props (applied only on `/`)
- `BlowfishHomepage` now matches upstream fallback behavior by defaulting to `profile` when layout is invalid/missing
- Layout demo UX updated: `/blocks/layouts` now demos homepage layout variants and `/blocks/previews/[layout]` now renders `profile/page/hero/background/card/custom` previews (instead of header layout variants)

## Where to continue next
1. Optional micro-tuning against upstream visual diffs
2. Add additional locale files beyond `en` when needed

## Required updates each pass
- Update `docs/PARITY_TRACKER.md`
- Update `AI_CONTEXT.md`
- Update `src/pages/index.astro`

## Quick resume
```bash
cd /Users/garyleefight/Development/personal-website-astro/blowfish-astro-theme
npm install --cache .npm-cache
npm run dev
npm run build
```
