import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    // <title> override when the display title is too short or too long for search.
    seoTitle: z.string().optional(),
    order: z.number(),
    // One line for lists and llms.txt.
    summary: z.string(),
    // Meta description, ~150 characters.
    description: z.string(),
    deliverables: z.array(z.string()),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { services };
