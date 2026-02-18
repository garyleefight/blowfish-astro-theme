# CLAUDE.md - Blowfish Astro Rewrite Rules

## Project goal
Rewrite the official Hugo Blowfish theme into an Astro-native package with parity tracking.

## Source of truth
- Official upstream clone: `/tmp/blowfish-upstream`
- Do not invent features that are not derived from upstream behavior.
- Hard requirement: before implementing or changing any parity behavior, inspect the corresponding upstream template/partial/shortcode and derive implementation from that source.

## Hard constraints
- Static output only (Cloudflare Pages free-tier compatible)
- Avoid SSR-only patterns
- Keep rewrite changes aligned with upstream partials/shortcodes/templates

## Required files to update on every rewrite pass
1. `docs/PARITY_TRACKER.md`
2. `AI_CONTEXT.md`
3. `src/pages/index.astro` (documentation/demo entry hub)

## Process checklist per rewrite pass
1. Inspect matching upstream files in `/tmp/blowfish-upstream` for the parity slice being changed
2. Implement next parity slice from `docs/PARITY_TRACKER.md`
3. Update `docs/PARITY_TRACKER.md` statuses
4. Update `AI_CONTEXT.md` with new completion state + next steps
5. Update `src/pages/index.astro` so demos/docs stay current
6. Run `npm run build`
7. Verify clean state with `git status`

## Main references
- `docs/PARITY_TRACKER.md` (feature-level status)
- `AI_CONTEXT.md` (session handoff)
- `REWRITE_CONFIG.json` (machine-readable process rules)
