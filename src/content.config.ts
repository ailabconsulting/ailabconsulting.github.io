import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faq = z.object({ q: z.string(), a: z.string() });

const services = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    // <title> override when the display title is too short or too long for search.
    seoTitle: z.string().optional(),
    order: z.number(),
    // Core offers lead the site; the rest are listed as "also available".
    core: z.boolean().default(true),
    // One line for index rows and llms.txt.
    summary: z.string(),
    // Meta description, ~150 characters.
    description: z.string(),
    deliverables: z.array(z.string()),
    useCases: z.array(z.string()),
    faqs: z.array(faq).default([]),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/industries' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),
    description: z.string(),
    useCases: z.array(z.object({ title: z.string(), text: z.string() })),
    services: z.array(reference('services')),
    faqs: z.array(faq).default([]),
  }),
});

export const collections = { services, industries };
