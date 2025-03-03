"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { DocFile } from "@/types/docs";
import { fetchDocs } from "@/lib/client/docs";

interface SidebarProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function Sidebar({ searchParams }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<DocFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    searchParams.then((params) => {
      const searchQuery = Array.isArray(params?.query)
        ? params.query[0]
        : params?.query || "";
      setQuery(searchQuery);
    });

    fetchDocs()
      .then(setDocs)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  // Update URL when search query changes
  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);

    // Create new URLSearchParams object
    const params = new URLSearchParams(currentSearchParams.toString());

    if (newQuery) {
      params.set("query", newQuery);
    } else {
      params.delete("query");
    }

    // Update URL without reloading the page
    router.replace(`${pathname}?${params.toString()}`);
  };

  // Filter docs based on query
  const filteredDocs = query
    ? docs.filter((doc) => {
        const normalizedQuery = query.toLowerCase();
        const normalizedTitle = doc.title.toLowerCase();
        const normalizedDescription = doc.description?.toLowerCase() || "";

        return (
          normalizedTitle.includes(normalizedQuery) ||
          normalizedDescription.includes(normalizedQuery)
        );
      })
    : docs;

  return (
    <div className="p-4 md:p-6">
      <input
        type="text"
        placeholder="جستجو در مستندات..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 mb-4 text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400"
      />
      <nav>
        {isLoading ? (
          <div className="text-center py-4 text-zinc-500 dark:text-zinc-400">
            در حال بارگذاری...
          </div>
        ) : docs.length === 0 ? (
          <div className="text-center py-4 text-zinc-500 dark:text-zinc-400">
            هنوز هیچ مستندی اضافه نشده است
          </div>
        ) : query && filteredDocs.length === 0 ? (
          <div className="text-center py-4 space-y-2">
            <p className="text-zinc-500 dark:text-zinc-400">
              نتیجه‌ای برای &quot;{query}&quot; یافت نشد
            </p>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              لطفاً با کلمات کلیدی دیگری جستجو کنید
            </p>
          </div>
        ) : (
          <ul className="space-y-1">
            {filteredDocs.map((doc) => (
              <li key={doc.slug}>
                <Link
                  href={`/docs/${doc.slug}`}
                  className={`block px-4 py-2 text-sm rounded-lg ${
                    pathname === `/docs/${doc.slug}`
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-50"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
