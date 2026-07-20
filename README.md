# santeligio.com

Sources for site <https://santeligio.com/>.

Built with [Astro](https://astro.build) and Markdown content collections.
Hosted on [Netlify](https://www.netlify.com/).

## Development

Requires Node.js >= 18.20.8 (or 20+).

```sh
npm install
npm run dev       # local dev server
npm run build     # build to dist/
npm run preview   # preview the production build
```

## Content

- Pages live under `src/pages/`.
- News posts (Markdown) live under `src/content/news/` — add a new `.md`
  file with `title`, `date`, and `category` frontmatter to publish one.
- Static assets (images) live under `public/`.
- Redirects from the previous site's URLs are defined in `public/_redirects`
  (Netlify's redirect file format).

## Privacy rule

Historical/archival material is publishable; living members are named only
with their consent.

## Copyright and license

Copyright (C) 2023-2026, [Compagnia di Sant'Eligio](https://github.com/santeligio), all rights reserved.

### Source code license

The source code contained in this repository and the executable distributions are licensed under the terms of the MIT license as detailed in the [LICENSE](LICENSE) file.

### Documentation license

![CC BY-SA 4.0](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)

Please note that your contribution to the project Documentation is licensed under a Creative Commons Attribution-Share Alike 4.0 License.
See <https://creativecommons.org/licenses/by-sa/4.0/> for details.

<!-- EOF -->
