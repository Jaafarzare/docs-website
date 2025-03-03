import { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  return (
    <>
      <div className="w-full md:w-64 md:flex-none md:overflow-y-auto">
        <Sidebar searchParams={searchParams} />
      </div>
      <div className="flex-1 p-4 md:p-8 md:overflow-y-auto">
        <article className="prose max-w-3xl mx-auto rtl bg-white dark:bg-zinc-800 p-6 md:p-8 rounded-lg shadow-[0_2px_4px_0_rgb(0,0,0,0.08)] dark:shadow-[0_2px_4px_0_rgb(0,0,0,0.4)]">
          <Breadcrumb />
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-zinc-800 dark:text-zinc-50">
            مستندات
          </h1>
          <p className="text-zinc-700 dark:text-zinc-200 mb-8">
            به مستندات خوش آمدید. از منوی سمت راست می‌توانید موضوع مورد نظر خود
            را انتخاب کنید.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
            <Link href="/docs/getting-started" className="block group">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-200 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                  شروع کار
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  راهنمای گام به گام برای شروع کار با پروژه و نصب و راه‌اندازی
                  آن
                </p>
              </div>
            </Link>

            <Link href="/docs/api-reference" className="block group">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-200 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                  مستندات API
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  مستندات کامل API و نحوه استفاده از توابع و امکانات مختلف
                </p>
              </div>
            </Link>

            <Link href="/docs/components" className="block group">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-200 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                  کامپوننت‌ها
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  راهنمای استفاده از کامپوننت‌های مختلف و نحوه شخصی‌سازی آنها
                </p>
              </div>
            </Link>

            <Link href="/docs/examples" className="block group">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-all duration-200 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg">
                <h3 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                  مثال‌ها
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  نمونه‌های عملی و مثال‌های کاربردی برای یادگیری بهتر
                </p>
              </div>
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "مستندات",
  description: "مستندات پروژه",
};
