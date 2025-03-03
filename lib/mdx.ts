"server-only";

import path from "path";
import matter from "gray-matter";
import { readFile, readdir } from "node:fs/promises";

const contentDirectory = path.join(process.cwd(), "content");

export interface DocFile {
  slug: string;
  title: string;
  description?: string;
  order?: number;
}

export async function getAllDocs(): Promise<DocFile[]> {
  try {
    const files = await readdir(contentDirectory);
    console.log("Files in content directory:", files);

    if (files.length === 0) {
      console.log("No files found in content directory");
      return [];
    }

    const docsPromises = files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(contentDirectory, file);
        try {
          const source = await readFile(filePath, "utf8");
          const { data } = matter(source);
          console.log("Processed file:", { file, data });

          const doc: DocFile = {
            slug: file.replace(".mdx", ""),
            title: data.title || file.replace(".mdx", ""),
            description: data.description,
            order: data.order || 999,
          };

          return doc;
        } catch (error) {
          console.error(`Error processing file ${file}:`, error);
          return null;
        }
      });

    const docs = (await Promise.all(docsPromises))
      .filter((doc): doc is DocFile => doc !== null)
      .sort((a, b) => {
        if (a.order !== b.order) {
          return (a.order || 999) - (b.order || 999);
        }
        return a.title.localeCompare(b.title);
      });

    console.log("Final docs:", docs);
    return docs;
  } catch (error) {
    console.error("Error in getAllDocs:", error);
    return [];
  }
}
