import React, { ReactElement } from "react";

type HeaderProps = {
  children: React.ReactNode;
};

export const Header = ({ children }: HeaderProps): ReactElement => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 dark:bg-fuchsia-50 text-white shadow-md">
      {children}
    </header>
  );
};
