import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    period: z.string(),
    role: z.string(),
    sortDate: z.coerce.date(),
    featured: z.boolean().default(false),
    isPlaceholder: z.boolean().default(false),
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        dataset: z.string().url().optional(),
        project: z.string().url().optional(),
        model: z.string().url().optional()
      })
      .default({})
  })
});

const publications = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number().int(),
    status: z.string(),
    type: z.string(),
    summary: z.string().optional(),
    featured: z.boolean().default(false),
    isPlaceholder: z.boolean().default(false),
    links: z
      .object({
        paper: z.string().url().optional(),
        code: z.string().url().optional(),
        dataset: z.string().url().optional(),
        project: z.string().url().optional(),
        model: z.string().url().optional()
      })
      .default({})
  })
});

const news = defineCollection({
  type: "data",
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    detail: z.string(),
    link: z.string().url().optional()
  })
});

export const collections = {
  blog,
  projects,
  publications,
  news
};