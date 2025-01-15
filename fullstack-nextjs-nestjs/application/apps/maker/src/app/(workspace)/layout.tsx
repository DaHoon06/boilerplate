import type { Metadata } from "next";
import React from "react";
import styles from "./layout.module.scss";
import { Footer, Header } from "@/shared/ui/layout";

export const metadata: Metadata = {
  title: "데이터 스케치 | Data Sketch",
  description: "데이터스케치 워크스페이",
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

export default function WorkspaceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.workspaceContainer}>
      <Header />
      <main className={styles.workspaceMain}>{children}</main>
      <Footer />
    </div>
  );
}
