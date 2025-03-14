"use client";

import React, { Suspense } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import MswProvider from "./MswProvider";
import ThemeProvider from "./ThemeProvider";

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <MswProvider>
      <ReactQueryProvider>
        <ThemeProvider>
          <Suspense>{children}</Suspense>
        </ThemeProvider>
      </ReactQueryProvider>
    </MswProvider>
  );
};

export default AppProvider;
