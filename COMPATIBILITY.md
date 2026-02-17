# Blowfish Compatibility Matrix (Initial)

This package targets API similarity with Blowfish docs while remaining Astro-native.

## Component mapping

- Blowfish shortcode `badge` -> `BlowfishBadge`
- Blowfish shortcode `alert` -> `BlowfishAlert`
- Blowfish shortcode `button` -> `BlowfishButton`
- Blowfish shortcode `figure` -> `BlowfishFigure`
- Blowfish shortcode `gallery` -> `BlowfishGallery`

## Parameter naming strategy

- Keep canonical names where practical (`type`, `title`, `content`, `src`, `alt`, `caption`, `href`)
- When Blowfish supports aliases, support primary names first, then aliases in a minor release

## Current parity level

- Visual parity: partial
- API parity: partial
- Content shortcode parity: partial
- Hugo template parity: not applicable (Astro-native implementation)
