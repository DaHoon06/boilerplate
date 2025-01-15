"use client";

import React from "react";
import styled from "styled-components";

const FooterLayout = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #ededed;
`;

export const Footer = (): React.ReactElement => {
  return <FooterLayout>주소 회사명</FooterLayout>;
};
