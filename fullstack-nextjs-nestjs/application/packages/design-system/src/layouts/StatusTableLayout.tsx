import { FC, PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';

interface TableProps {}

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th``;
export const Td = styled.td``;

const StatusTable = styled.table<TableProps>`
  text-align: center;
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;

  ${Thead} {
    height: 48px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #000000;

    ${Th}:nth-child(2) {
      border-left: 1px solid #c9c9c9;
      border-right: 1px solid #c9c9c9;
    }
  }

  ${Tbody} {
    text-align: end;

    ${Tr} {
      height: 37px;
      border-bottom: 1px solid #cccccc;
    }

    ${Td}:nth-child(1) {
      text-align: center;
      width: 107px;
      background-color: #ebebeb;
      border-right: 1px solid #cccccc;
    }

    ${Td}:not(:nth-child(1)) {
      padding-right: 26px;
    }

    ${Tr}:last-child {
      border-bottom: none;
    }
  }

  ${Th},
  ${Td} {
    vertical-align: middle;
  }
`;

interface StatusTableLayoutProps extends PropsWithChildren {
  $height?: number;
}

export const StatusTableLayout: FC<StatusTableLayoutProps> = (props): ReactElement => {
  const { children } = props;
  return <StatusTable>{children}</StatusTable>;
};
