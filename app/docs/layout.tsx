import { Metadata } from "next";

export const metadata: Metadata = {
  title: "مستندات",
  description: "مستندات کامل پروژه، شامل راهنماها و آموزش‌های جامع",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col md:flex-row h-[calc(100vh-4rem)] md:overflow-hidden"
      dir="rtl"
    >
      {children}
    </div>
  );
}
