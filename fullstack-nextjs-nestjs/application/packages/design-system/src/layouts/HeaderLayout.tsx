import React from "react";
import styled from "styled-components";

export const HeaderLogo = styled.div``;
export const HeaderTab = styled.ul``;
export const HeaderItem = styled.li``;
const HeaderContainer = styled.div``;

const Header = styled.header`
  width: 100%;
  height: 67px;
  background-color: #ffffff;
  padding: 0 2em;
  border-bottom: #ccc solid 1px;
  min-width: 1200px;
  margin: auto;

  ${HeaderContainer} {
    margin: auto;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    height: 100%;

    ${HeaderTab} {
      display: flex;
      gap: 20px;

      ${HeaderItem} {
        display: flex;
        align-items: center;
        gap: 6px;

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }

        &:not(:last-child):not(:first-child)::after {
          content: "|";
          font-size: 14px;
          color: #000;
          margin-left: 10px;
        }
      }

      ${HeaderItem}:nth-child(odd) {
        cursor: pointer;
      }
    }
  }
`;

export const HeaderLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement => {
  return (
    <Header>
      <HeaderContainer>{children}</HeaderContainer>
    </Header>
  );
};
