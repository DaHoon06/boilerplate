import { FC, PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

interface ProjectListLayoutProps extends PropsWithChildren {}

export const RecentlyProjectListSection = styled.section``;
export const ProjectListSection = styled.section``;

const ProjectListMain = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;

  ${RecentlyProjectListSection} {
    width: 344px;
    padding: 56px 20px;
    background: #ffffff;
    border-right: 1px solid #cccccc;
  }

  ${ProjectListSection} {
    width: 856px;
    padding: 62px 0 62px 32px;
  }
`;
export const ProjectListLayout: FC<ProjectListLayoutProps> = ({
  children,
}): ReactElement => {
  return <ProjectListMain>{children}</ProjectListMain>;
};
