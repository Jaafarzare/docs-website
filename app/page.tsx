import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "صفحه اصلی",
  description:
    "سیستم مستندات مدرن و کارآمد با پشتیبانی از MDX و جستجوی پیشرفته",
};

export default function Home() {
  return (
    <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 sm:p-8 shadow-[0_2px_4px_0_rgb(0,0,0,0.08)] dark:shadow-[0_2px_4px_0_rgb(0,0,0,0.4)]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-zinc-800 dark:text-zinc-100">
            پروژه مستندات
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-zinc-600 dark:text-zinc-300">
            به پروژه مستندات خوش آمدید. این پروژه با استفاده از Next.js و
            TailwindCSS ساخته شده و هدف آن ارائه یک سیستم مستندات ساده و کارآمد
            است.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Link href="/docs" className="block group">
              <div className="bg-zinc-50 dark:bg-zinc-700/50 p-4 sm:p-6 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:bg-white dark:hover:bg-zinc-700">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                  مستندات 📚
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300">
                  مشاهده مستندات کامل پروژه، راهنماها و آموزش‌ها
                </p>
              </div>
            </Link>

            <Link href="/docs/api-reference" className="block group">
              <div className="bg-zinc-50 dark:bg-zinc-700/50 p-4 sm:p-6 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:bg-white dark:hover:bg-zinc-700">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">
                  مستندات API 🔧
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300">
                  مشاهده جزئیات API‌ها و نحوه استفاده از آن‌ها
                </p>
              </div>
            </Link>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              ویژگی‌های اصلی
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-zinc-600 dark:text-zinc-300">
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-500 mr-2">
                  •
                </span>
                <span>
                  <strong className="font-medium text-zinc-800 dark:text-zinc-200">
                    جستجوی پیشرفته:
                  </strong>{" "}
                  امکان جستجو در تمام مستندات با سرعت بالا
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-500 mr-2">
                  •
                </span>
                <span>
                  <strong className="font-medium text-zinc-800 dark:text-zinc-200">
                    رابط کاربری مدرن:
                  </strong>{" "}
                  طراحی زیبا و واکنش‌گرا با پشتیبانی از حالت تاریک
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 dark:text-emerald-500 mr-2">
                  •
                </span>
                <span>
                  <strong className="font-medium text-zinc-800 dark:text-zinc-200">
                    MDX:
                  </strong>{" "}
                  پشتیبانی از Markdown با قابلیت‌های React
                </span>
              </li>
            </ul>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-zinc-200 dark:border-zinc-700">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
              >
                شروع کنید →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
