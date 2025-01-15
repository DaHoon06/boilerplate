import styled from "styled-components";
import { PropsWithChildren, ReactElement } from "react";

const MIN_WIDTH = 1200;

export const MainContainer = styled.main`
  width: ${MIN_WIDTH}px;
  margin: 0 auto;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: transparent;
  align-items: center;
  height: auto;
  min-height: calc(100vh - 67px);
`;

export const DefaultLayout = ({
  children,
}: PropsWithChildren): ReactElement => {
  return <MainContainer>{children}</MainContainer>;
};

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
