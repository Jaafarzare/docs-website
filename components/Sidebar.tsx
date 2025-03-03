import Link from "next/link";
import { getAllDocs, DocFile } from "@/lib/mdx";
import Search from "./Search";

interface SearchParams {
  query?: string;
}

interface SidebarProps {
  searchParams?: Promise<SearchParams>;
}

export default async function Sidebar({ searchParams }: SidebarProps) {
  const params = await searchParams;
  const query = params?.query || "";

  const allDocs = await getAllDocs();

  // فیلتر کردن نتایج بر اساس query
  const filteredDocs = query
    ? allDocs.filter((doc) => {
        const normalizedQuery = query.toLowerCase();
        const normalizedTitle = doc.title.toLowerCase();
        const normalizedDescription = doc.description?.toLowerCase() || "";

        return (
          normalizedTitle.includes(normalizedQuery) ||
          normalizedDescription.includes(normalizedQuery)
        );
      })
    : allDocs;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex flex-col gap-4">
        {/* باکس جستجو */}
        <div className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-900 pt-2">
          <Search />
        </div>

        {/* عنوان و نتایج */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              مستندات
            </h2>
            {query && (
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {filteredDocs.length} نتیجه
              </span>
            )}
          </div>

          <nav className="flex flex-col gap-1">
            {allDocs.length === 0 ? (
              <div className="flex flex-col gap-2 px-3 py-8 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  هنوز هیچ مستندی اضافه نشده است
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  لطفاً فایل‌های MDX را در پوشه content قرار دهید
                </p>
              </div>
            ) : query && filteredDocs.length === 0 ? (
              <div className="flex flex-col gap-2 px-3 py-8 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  نتیجه‌ای برای &quot;{query}&quot; یافت نشد
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  لطفاً با کلمات کلیدی دیگری جستجو کنید
                </p>
              </div>
            ) : (
              filteredDocs.map((doc: DocFile) => (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="flex flex-col gap-0.5 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                >
                  <span className="font-medium">{doc.title}</span>
                  {doc.description && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {doc.description}
                    </span>
                  )}
                </Link>
              ))
            )}
          </nav>
        </div>
      </div>

      {/* باکس راهنما */}
      <div className="mt-auto pt-4">
        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            نیاز به راهنمایی دارید؟
          </h3>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            اگر سوالی دارید یا نیاز به کمک دارید، با ما در تماس باشید.
          </p>
        </div>
      </div>
    </div>
  );
}
