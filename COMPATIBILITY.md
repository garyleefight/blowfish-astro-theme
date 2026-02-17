# Blowfish Compatibility Matrix

This package targets API similarity with Blowfish docs while remaining Astro-native.

## Component mapping

- Blowfish shortcode `accordion` -> `BlowfishAccordion`, `BlowfishAccordionItem`
- Blowfish shortcode `apexcharts` -> `BlowfishApexCharts`
- Blowfish shortcode `article` -> `BlowfishArticle`
- Blowfish shortcode `badge` -> `BlowfishBadge`
- Blowfish shortcode `alert` -> `BlowfishAlert`
- Blowfish shortcode `blockquote` -> `BlowfishBlockquote`
- Blowfish shortcode `button` -> `BlowfishButton`
- Blowfish shortcode `card` -> `BlowfishCard`
- Blowfish shortcode `carousel` -> `BlowfishCarousel`
- Blowfish shortcode `chart` -> `BlowfishChart`
- Blowfish shortcode `codeimporter` -> `BlowfishCodeImporter`
- Blowfish shortcode `details` -> `BlowfishDetails`
- Blowfish shortcode `emoji` -> `BlowfishEmoji`
- Blowfish shortcode `figure` -> `BlowfishFigure`
- Blowfish shortcode `gallery` -> `BlowfishGallery`
- Blowfish shortcode `gist` -> `BlowfishGist`
- Blowfish shortcode `github` -> `BlowfishGitHubCard`
- Blowfish shortcode `icon` -> `BlowfishIcon`
- Blowfish shortcode `katex` -> `BlowfishKaTeX`
- Blowfish shortcode `lead` -> `BlowfishLead`
- Blowfish shortcode `ltr` -> `BlowfishLTR`
- Blowfish shortcode `markdown` -> `BlowfishMarkdown`
- Blowfish shortcode `mermaid` -> `BlowfishMermaid`
- Blowfish shortcode `rtl` -> `BlowfishRTL`
- Blowfish shortcode `shortcode` -> `BlowfishShortcode`
- Blowfish shortcode `tabs` -> `BlowfishTabs`, `BlowfishTab`
- Blowfish shortcode `timeline` -> `BlowfishTimeline`, `BlowfishTimelineItem`
- Blowfish shortcode `typeit` -> `BlowfishTypeIt`
- Blowfish shortcode `youtubeLite` -> `BlowfishYouTubeLite`

## Parameter naming strategy

- Keep canonical names where practical (`type`, `title`, `content`, `src`, `alt`, `caption`, `href`, `id`)
- For shortcode APIs with multiple naming variants in Hugo docs/ecosystem, use the primary names and add aliases incrementally.

## Current parity level

- Visual parity: partial to moderate (shortcode surfaces themed)
- API parity: broad surface implemented; some advanced aliases pending
- Content shortcode parity: broad component coverage
- Hugo template parity: not applicable (Astro-native implementation)
