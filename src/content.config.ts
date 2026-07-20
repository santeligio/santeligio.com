import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// News / novità della Compagnia (formerly the Gatsby "blog").
const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Publication date, e.g. 2024-08-14
    date: z.coerce.date(),
    // Optional cover image, path under /public
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    category: z.string().default('storia'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
