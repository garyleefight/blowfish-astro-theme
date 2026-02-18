import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGithubBlockquoteAlert from 'remark-github-blockquote-alert';
import remarkCodeTitle from 'remark-code-title';

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    // Remark plugins (run on markdown AST)
    remarkPlugins: [
      // GitHub-style blockquote alerts: > [!NOTE], > [!WARNING], etc.
      remarkGithubBlockquoteAlert,
      // Code block titles: ```js title="filename.js"
      remarkCodeTitle,
    ],
    // Rehype plugins (run on HTML AST)
    rehypePlugins: [
      // Generate IDs for headings
      rehypeSlug,
      // Add anchor links to headings (matches Blowfish upstream behavior)
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          properties: {
            className: ['heading-anchor'],
            ariaLabel: 'Link to this section',
          },
          content: {
            type: 'text',
            value: '#',
          },
        },
      ],
      // External links open in new tab with noreferrer
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noreferrer'],
        },
      ],
    ],
    // Use Shiki for syntax highlighting (Astro default)
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
