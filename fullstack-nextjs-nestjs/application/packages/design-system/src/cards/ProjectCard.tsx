'use client';

import React, { PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

interface ProjectCardStatusBadgeProps {
  $backgroundColor?: string;
}

export const ProjectCardHeader = styled.div``;
export const ProjectCardStatusBadge = styled.div<ProjectCardStatusBadgeProps>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;
export const ProjectCardHeaderTools = styled.div``;
export const ProjectCardText = styled.div``;
export const ProjectCardInfo = styled.div``;
export const ProjectCardFooterTools = styled.div``;
export const ProjectCardFooterButton = styled.button``;

const ProjectCardLayout = styled.div`
  width: 264px;
  height: 254px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #cccccc;
  padding: 14px 14px 18px;

  ${ProjectCardHeader} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;

    ${ProjectCardStatusBadge} {
      width: fit-content;
      padding: 0 10px;
      height: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }

    ${ProjectCardHeaderTools} {
      button {
        margin: 0 2px;
      }
    }
  }

  ${ProjectCardText} {
    word-break: break-word;
    min-height: 52px;
  }

  ${ProjectCardInfo} {
    padding-bottom: 32px;
  }

  ${ProjectCardFooterTools} {
    display: flex;
    align-items: center;
    justify-content: space-around;

    ${ProjectCardFooterButton} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 0;
    }
  }
`;

export const ProjectCard = ({ children }: PropsWithChildren): ReactElement => {
  return <ProjectCardLayout>{children}</ProjectCardLayout>;
};
