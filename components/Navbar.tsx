"use client";

import Link from "next/link";
import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                مستندات
              </span>
            </Link>
          </div>

          <div className="flex items-center">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
