"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactElement } from "react";

export const Header = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (e) {}
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md">
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/">
          <span className="text-xl font-bold">로고</span>
        </Link>
        <input
          type="text"
          className="border rounded-md px-2 py-1"
          placeholder="검색..."
        />
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 bg-gray-600 rounded-md text-white"
        >
          {theme === "dark" ? "🌙" : "🌞"}
        </button>
      </nav>
    </header>
  );
};
