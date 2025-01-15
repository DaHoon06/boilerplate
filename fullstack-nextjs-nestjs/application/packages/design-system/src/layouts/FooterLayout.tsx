import { PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

export const FooterInformationBox = styled.div``;

export const FooterContainer = styled.footer`
  height: 99px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.14);
  padding: 26px 2em;
  min-width: 1200px;
  margin: auto;

  ${FooterInformationBox} {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #fff;
  }
`;

export const FooterLayout = ({ children }: PropsWithChildren): ReactElement => {
  return <FooterContainer>{children}</FooterContainer>;
};
