"use client";

import { useTheme } from "next-themes";
import React from "react";
import { ReactElement } from "react";

export const ThemeToggleButtonBase = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 p-2 bg-gray-600 rounded-md text-white"
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </button>
  );
};

export const ThemeToggleButton = React.memo(ThemeToggleButtonBase);
