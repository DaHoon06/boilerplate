import { FC, PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

interface ProgressTabItemProps {
  $active?: boolean;
}

export const ProgressTabItem = styled.div<ProgressTabItemProps>`
  position: relative;
  background-color: ${({ $active }) => ($active ? "#ffffff" : "#f2f2f2")};
  border: ${({ $active }) => ($active ? "#3174ba" : "#DBDBDB")} 1px solid;
  height: ${({ $active }) => ($active ? 41 : 37)}px;
  top: ${({ $active }) => ($active ? 1 : 0)}px;

  &:hover {
    cursor: ${({ $active }) => ($active ? "default" : "pointer")};
  }

  &.disabled {
    background-color: #f1f1f1;
    border-color: #f3f3f3;

    span {
      color: #e1e1e1;
    }

    &:hover {
      cursor: default;
    }
  }
`;

const ProgressTab = styled.div`
  background-color: #f8f9fb;
  padding-top: 34px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: 10px;
  border-bottom: 1px solid #3174ba;

  ${ProgressTabItem} {
    width: 166px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-radius: 6px 6px 0 0;
    border-bottom: none;
  }
`;

export const ProgressTabLayout: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <ProgressTab>{children}</ProgressTab>;
};
