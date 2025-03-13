"use client";

import { ThemeProvider as Theme } from "next-themes";
import React, { ReactElement } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
  return <Theme attribute={"class"}>{children}</Theme>;
};

export default ThemeProvider;
