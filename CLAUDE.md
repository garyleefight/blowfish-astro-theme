# CLAUDE.md - Blowfish Astro Rewrite Rules

## Project goal
Rewrite the official Hugo Blowfish theme into an Astro-native package with parity tracking.

## Source of truth
- Official upstream clone: `/tmp/blowfish-upstream`
- Do not invent features that are not derived from upstream behavior.

## Hard constraints
- Static output only (Cloudflare Pages free-tier compatible)
- Avoid SSR-only patterns
- Keep rewrite changes aligned with upstream partials/shortcodes/templates

## Required files to update on every rewrite pass
1. `docs/PARITY_TRACKER.md`
2. `AI_CONTEXT.md`
3. `src/pages/index.astro` (documentation/demo entry hub)

## Process checklist per rewrite pass
1. Implement next parity slice from `docs/PARITY_TRACKER.md`
2. Update `docs/PARITY_TRACKER.md` statuses
3. Update `AI_CONTEXT.md` with new completion state + next steps
4. Update `src/pages/index.astro` so demos/docs stay current
5. Run `npm run build`
6. Verify clean state with `git status`

## Main references
- `docs/PARITY_TRACKER.md` (feature-level status)
- `AI_CONTEXT.md` (session handoff)
- `REWRITE_CONFIG.json` (machine-readable process rules)
