# Shortcode Usage (Astro Compatibility Layer)

Use these components in `.astro` or MDX and keep Blowfish-like parameter names.

```astro
---
import {
  BlowfishAlert,
  BlowfishBadge,
  BlowfishButton,
  BlowfishDetails,
  BlowfishFigure,
  BlowfishGallery,
  BlowfishGist,
  BlowfishGitHubCard,
  BlowfishKaTeX,
  BlowfishTab,
  BlowfishTabs,
  BlowfishTimeline,
  BlowfishTimelineItem,
  BlowfishTypeIt,
  BlowfishVideo,
  BlowfishYouTubeLite,
} from '@garyleefight/blowfish-astro-theme';
---

<BlowfishBadge label="beta" variant="primary" />
<BlowfishAlert style="warning" heading="Caution" text="API parity in progress" />
<BlowfishButton url="/blog" text="Read" style="outline" />

<BlowfishDetails title="More" defaultOpen={true}>
  Hidden content
</BlowfishDetails>

<BlowfishFigure image="/images/photo.jpg" title="Sunset" />

<BlowfishGallery
  cols={3}
  items={[
    { image: '/a.jpg', title: 'A' },
    { image: '/b.jpg', title: 'B' }
  ]}
/>

<BlowfishGist url="https://gist.github.com/octocat/aa5a315d61ae9438b18d" />
<BlowfishGitHubCard owner="withastro" repository="astro" />

<BlowfishKaTeX expr="E=mc^2" block={true} />

<BlowfishTabs selected="one">
  <BlowfishTab title="one" open={true}>First tab</BlowfishTab>
  <BlowfishTab title="two">Second tab</BlowfishTab>
</BlowfishTabs>

<BlowfishTimeline>
  <BlowfishTimelineItem name="Launch" time="2026-02-17">Done</BlowfishTimelineItem>
</BlowfishTimeline>

<BlowfishTypeIt strings={['hello', 'world']} lifeLike={50} loop={true} />
<BlowfishVideo url="/videos/intro.mp4" title="Intro" controls={true} />
<BlowfishYouTubeLite url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" label="Demo" />
```
