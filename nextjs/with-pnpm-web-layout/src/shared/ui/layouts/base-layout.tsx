import React, { ReactElement } from "react";

type BaseLayoutProps = {
  children: React.ReactNode;
};

export const BaseLayout = ({ children }: BaseLayoutProps): ReactElement => {
  return (
    <div className="flex pt-14 h-[calc(100vh-4rem)] overflow-auto w-full">
      {children}
    </div>
  );
};
