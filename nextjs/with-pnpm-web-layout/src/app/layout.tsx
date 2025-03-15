import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
import { AppProvider } from "./(app)";
import { Toaster } from "@/shared/ui/toast";
import { BaseLayout } from "@/shared/ui/layouts";
import ThemeScript from "./(app)/ThemeScript";
import { Header, Footer } from "@/widgets";

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
        <AppProvider>
          <Header />
          <BaseLayout>
            <div className="max-w-7xl flex w-full mx-auto">
              <aside className="w-64 bg-gray-600 hidden lg:block">
                Left Sidebar
              </aside>

              <main className="flex-1 bg-gray-800">{children}</main>

              <aside className="w-64 bg-gray-600 hidden lg:block">
                Right Sidebar
              </aside>
            </div>
          </BaseLayout>
          <Footer />
        </AppProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
