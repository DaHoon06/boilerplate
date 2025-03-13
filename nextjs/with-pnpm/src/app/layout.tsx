import type { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { AppProvider, ThemeScript } from "./(app)";
import { Toaster } from "@/shared/ui/toast";

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
      <body>
        <AppProvider>{children}</AppProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
