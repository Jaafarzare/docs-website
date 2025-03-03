import { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    template: "%s | سیستم مستندات",
    default: "سیستم مستندات",
  },
  description: "سیستم مستندات مدرن و کارآمد با قابلیت جستجوی پیشرفته",
  keywords: [
    "مستندات",
    "داکیومنت",
    "آموزش",
    "راهنما",
    "API",
    "Next.js",
    "React",
  ],
  authors: [{ name: "تیم توسعه" }],
  openGraph: {
    title: "سیستم مستندات",
    description: "سیستم مستندات مدرن و کارآمد با قابلیت جستجوی پیشرفته",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="bg-zinc-200 dark:bg-zinc-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
