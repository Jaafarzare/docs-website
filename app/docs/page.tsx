import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

interface PageProps {
  searchParams: any;
}

export default async function Page({ searchParams }: PageProps) {
  const query = Array.isArray(searchParams?.query)
    ? searchParams.query[0]
    : searchParams?.query || "";

  return (
    <>
      <div className="w-full md:w-64 md:flex-none md:overflow-y-auto">
        <Sidebar searchParams={Promise.resolve({ query })} />
      </div>
      <div className="flex-1 p-4 md:p-8 md:overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          <Breadcrumb />
          <h1 className="text-2xl md:text-3xl font-bold text-zinc-800 dark:text-zinc-100">
            به مستندات خوش آمدید
          </h1>
          <div className="prose max-w-none space-y-6 md:space-y-8">
            <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300">
              در این بخش می‌توانید تمام مستندات و راهنماهای مورد نیاز را پیدا
              کنید. از منوی سمت راست می‌توانید به بخش‌های مختلف دسترسی داشته
              باشید.
            </p>
            <div className="bg-white dark:bg-zinc-800 p-4 md:p-6 rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.08)] dark:shadow-[0_2px_4px_0_rgb(0,0,0,0.4)]">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-zinc-800 dark:text-zinc-100">
                شروع سریع
              </h2>
              <ul className="space-y-2 md:space-y-3 text-zinc-600 dark:text-zinc-300">
                <li className="flex items-center">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">
                    •
                  </span>
                  برای جستجو در مستندات از باکس جستجو استفاده کنید
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">
                    •
                  </span>
                  مستندات به صورت دسته‌بندی شده در منوی کناری قرار دارند
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">
                    •
                  </span>
                  برای دسترسی سریع‌تر می‌توانید از بخش جستجو استفاده کنید
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Link href="/docs/api-reference" className="block group">
                <div className="bg-white dark:bg-zinc-800 p-4 md:p-6 rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.08)] dark:shadow-[0_2px_4px_0_rgb(0,0,0,0.4)] transition-all duration-200 hover:shadow-[0_8px_16px_0_rgb(0,0,0,0.08)] hover:bg-zinc-50 dark:hover:bg-zinc-700">
                  <h3 className="text-lg font-semibold mb-2 md:mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                    مستندات API
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    مستندات کامل API و نحوه استفاده از آن
                  </p>
                </div>
              </Link>
              <Link href="/docs/getting-started" className="block group">
                <div className="bg-white dark:bg-zinc-800 p-4 md:p-6 rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.08)] dark:shadow-[0_2px_4px_0_rgb(0,0,0,0.4)] transition-all duration-200 hover:shadow-[0_8px_16px_0_rgb(0,0,0,0.08)] hover:bg-zinc-50 dark:hover:bg-zinc-700">
                  <h3 className="text-lg font-semibold mb-2 md:mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                    راهنمای شروع
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300">
                    آموزش گام به گام برای شروع کار
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
