// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { z } from 'zod';
// 2. Define your collection(s)
const sectionsCollection = defineCollection({ 
    type: 'content',
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        recentUpdate: z.date(),
        author: z.string(),
        tags: z.array(z.string()),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'sections': sectionsCollection
};