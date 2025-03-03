import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import { getDocFromParams } from "@/lib/docs";
import Breadcrumb from "@/components/Breadcrumb";

interface PageProps {
  params: any;
  searchParams: any;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const filePath = path.join(process.cwd(), "content", `${params.slug}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");
    const { data } = matter(source);

    return {
      title: data.title || params.slug,
      description: data.description || `مستندات مربوط به ${params.slug}`,
    };
  } catch {
    return {
      title: "صفحه یافت نشد",
      description: "متاسفانه صفحه مورد نظر یافت نشد.",
    };
  }
}

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "content"));
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function Page({ params, searchParams }: PageProps) {
  const query = Array.isArray(searchParams?.query)
    ? searchParams.query[0]
    : searchParams?.query || "";

  const doc = await getDocFromParams(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <>
      <div className="w-full md:w-64 md:flex-none md:overflow-y-auto">
        <Sidebar searchParams={Promise.resolve({ query })} />
      </div>
      <div className="flex-1 p-4 md:p-8 md:overflow-y-auto">
        <article className="prose max-w-3xl mx-auto rtl bg-white dark:bg-zinc-800 p-6 md:p-8 rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.08)] dark:shadow-[0_2px_4px_0_rgb(0,0,0,0.4)]">
          <Breadcrumb />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-zinc-800 dark:text-zinc-100">
            {doc.title}
          </h1>
          <div
            className="text-zinc-600 dark:text-zinc-300 [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:font-semibold [&>h2]:text-zinc-800 [&>h2]:dark:text-zinc-100 [&>h2]:mt-8 [&>h2]:mb-4"
            dangerouslySetInnerHTML={{ __html: doc.body }}
          />
        </article>
      </div>
    </>
  );
}
