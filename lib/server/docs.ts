import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { DocFile } from "@/types/docs";

export async function getDocFromParams(slug: string): Promise<DocFile | null> {
  try {
    const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(source);

    const processedContent = await remark().use(html).process(content);
    const body = processedContent.toString();

    return {
      slug,
      title: data.title || slug,
      description: data.description,
      body,
    };
  } catch {
    return null;
  }
}

export async function getAllDocs(): Promise<DocFile[]> {
  try {
    const contentPath = path.join(process.cwd(), "content");
    const files = await fs.readdir(contentPath);

    const docs = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, "");
          const doc = await getDocFromParams(slug);
          return doc;
        })
    );

    return docs.filter((doc): doc is DocFile => doc !== null);
  } catch {
    return [];
  }
}
