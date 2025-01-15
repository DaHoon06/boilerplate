"use client";

import React, { Suspense } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import MSWProvider from "./MSWProvider";
import StyledComponentRegistry from "./StyledComponentRegistry";
import { GlobalStyle, theme } from "@datasketch/design-system/styles";

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <MSWProvider>
      <StyledComponentRegistry>
        <GlobalStyle theme={theme} />
        <ReactQueryProvider>
          <Suspense>{children}</Suspense>
        </ReactQueryProvider>
      </StyledComponentRegistry>
    </MSWProvider>
  );
};

export default AppProvider;
