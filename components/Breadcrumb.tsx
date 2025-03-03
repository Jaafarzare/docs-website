"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  if (!pathname || !pathname.startsWith("/docs")) return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const isLast = index === pathSegments.length - 1;

    return {
      path,
      label: segment === "docs" ? "مستندات" : label,
      isLast,
    };
  });

  return (
    <nav
      className="flex items-center space-x-reverse space-x-1 text-sm md:text-base text-zinc-600 dark:text-zinc-400 mb-4 md:mb-6 rtl"
      aria-label="مسیر ناوبری"
    >
      {breadcrumbItems.map((item, index) => (
        <div key={item.path} className="flex items-center">
          {index > 0 && (
            <ChevronLeft className="mx-1 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          )}
          {item.isLast ? (
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.path}
              className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
