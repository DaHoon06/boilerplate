import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactElement, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>; // 클라이언트에서만 렌더링
  }

  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};

export default ThemeProvider;
