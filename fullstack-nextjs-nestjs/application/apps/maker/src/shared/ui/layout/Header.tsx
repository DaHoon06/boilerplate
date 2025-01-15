"use client";

import { HeaderLayout, HeaderLogo } from "@datasketch/design-system/layouts";
import Link from "next/link";
import React from "react";

export const Header = (): React.ReactElement => {
  return (
    <HeaderLayout>
      <HeaderLogo>
        <Link href={"#"}>로고</Link>
      </HeaderLogo>
    </HeaderLayout>
  );
};
