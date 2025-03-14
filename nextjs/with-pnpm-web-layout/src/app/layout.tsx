import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
import { AppProvider, ThemeScript } from "./(app)";
import { Toaster } from "@/shared/ui/toast";
import { Footer, Header } from "@/shared/ui/layouts";

export const metadata: Metadata = {
  title: "샘플",
  description: "pnpm을 이용한 샘플 프로젝트",
  keywords: "pnpm, nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <AppProvider>
          <div className="flex pt-12 h-[calc(100vh-4rem)] overflow-auto">
            <aside className="w-64 bg-gray-200 hidden lg:block">
              Left Sidebar
            </aside>

            <main className="flex-1">{children}</main>

            <aside className="w-64 bg-gray-200 hidden lg:block">
              Right Sidebar
            </aside>
          </div>
        </AppProvider>
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
