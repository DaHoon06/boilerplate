import { ComponentProps, FC, ReactElement } from "react";
import styled from "styled-components";

const DividerLayout = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cccccc;
`;

export const Divider: FC<ComponentProps<"div">> = ({
  className,
}): ReactElement => {
  return <DividerLayout className={className} />;
};
