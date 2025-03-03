import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function getDocFromParams(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");
    const { content, data } = matter(source);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
      title: data.title,
      body: contentHtml,
    };
  } catch (error) {
    console.error("Error loading MDX:", error);
    return null;
  }
}
