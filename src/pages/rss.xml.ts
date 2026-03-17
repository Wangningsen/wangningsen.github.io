import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../data/site";

export async function GET(context: { site: URL | undefined }) {
  const posts = (await getCollection("blog"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: `${siteConfig.name} Blog`,
    description: "Research notes, project updates, and technical writing.",
    site: context.site ?? "https://wangningsen.github.io",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: `/blog/${post.slug}/`
    })),
    customData: `<language>en-us</language>`
  });
}