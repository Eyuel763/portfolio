import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    repoLink: z.string().url(),
    demoLink: z.string().url().optional(),
    isFeatured: z.boolean().default(false),
    mockups: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};