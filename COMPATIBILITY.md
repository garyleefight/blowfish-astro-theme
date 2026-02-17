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
- Blowfish shortcode `video` -> `BlowfishVideo`
- Blowfish shortcode `youtubeLite` -> `BlowfishYouTubeLite`

## Alias compatibility examples

- `BlowfishBadge`: `text | label | content`, `color | variant`
- `BlowfishAlert`: `type | style | alertType`, `title | heading`, `content | text | description`
- `BlowfishButton`: `href | url | link`, `label | text | title`, `variant | style`
- `BlowfishFigure`: `src | url | image`, `caption | title`
- `BlowfishGallery`: `images | items`, `columns | cols`, item keys `src | image | url`
- `BlowfishDetails`: `summary | title`, `open | defaultOpen | expanded`
- `BlowfishGist`: `id | gistId | gist | url`, `user | username`
- `BlowfishGitHubCard`: `repo | repository`, `user | owner`
- `BlowfishTab`: `name | title | label`, `active | open`
- `BlowfishTabs`: `defaultTab | default | selected`
- `BlowfishTimelineItem`: `title | name | label`, `date | time`
- `BlowfishKaTeX`: `equation | expr | formula`, `display | block`
- `BlowfishTypeIt`: `text | strings`, `speed | lifeLike`
- `BlowfishVideo`: `src | url | video`, `caption | title`
- `BlowfishYouTubeLite`: `id | videoId | youtube | url`, `title | label`

## Current parity level

- Visual parity: partial to moderate (shortcode surfaces themed)
- API parity: broad surface + common aliases
- Content shortcode parity: broad component coverage
- Hugo template parity: not applicable (Astro-native implementation)
