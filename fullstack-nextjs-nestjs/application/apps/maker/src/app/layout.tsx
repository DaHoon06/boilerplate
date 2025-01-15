import type { Metadata } from "next";
import React from "react";
import {AppProvider} from "@/app/(app)/providers";
import '@/shared/styles/tailwind.css';

export const metadata: Metadata = {
  title: "데이터 스케치 | Data Sketch",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicons/favicon.ico',
        sizes: '16x16',
        type: 'ico',
      }
    ]
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
