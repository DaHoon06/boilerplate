import { Header as BaseHeader } from "@/shared/ui/layouts";
import { ReactElement } from "react";
import Link from "next/link";
import { ThemeToggleButton } from "@/shared/ui/buttons";

export const Header = (): ReactElement => {
  return (
    <BaseHeader>
      <nav className="flex items-center justify-between px-4 py-2">
        <Link href="/">
          <span className="text-xl font-bold">로고</span>
        </Link>
        <input
          type="text"
          className="border rounded-md px-2 py-1"
          placeholder="검색..."
        />

        <ThemeToggleButton />
      </nav>
    </BaseHeader>
  );
};
