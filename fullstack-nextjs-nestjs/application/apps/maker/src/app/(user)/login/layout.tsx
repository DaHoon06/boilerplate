import type { Metadata } from "next";
import React from "react";
import "@/shared/styles/tailwind.css";
import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "데이터 스케치 | Data Sketch",
  description: "데이터스케치 로그인",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicons/favicon.ico",
        sizes: "16x16",
        type: "ico",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={styles.main}>{children}</main>;
}
