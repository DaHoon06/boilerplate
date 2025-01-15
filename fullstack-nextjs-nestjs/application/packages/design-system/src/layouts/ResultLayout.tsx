import { FC, PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

export const ContentContainer = styled.div``;
export const TitleSection = styled.section``;
export const ListSection = styled.section``;
export const ContentSection = styled.section``;

const width = 1200;
const listWidth = 344;

const ResultMain = styled.div`
  max-width: ${width}px;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 2em;
  border-radius: 0 0 4px 4px;
  
  ${TitleSection} {
    height: 98px;
    border-bottom: 1px solid #cccccc;
  }

  ${ContentContainer} {
    display: flex;
    height: auto;
    padding: 0 1em;

    ${ListSection} {
      padding: 48px 18px;
      width: 100%;
      max-width: ${listWidth}px;
      margin: 0 auto;
      
    }
    }

    ${ContentSection} {
      padding: 34px 25px;
      width: ${width - listWidth}px;
    }
  }
`;

export const ResultLayout: FC<PropsWithChildren> = ({
  children,
}): ReactElement => {
  return <ResultMain>{children}</ResultMain>;
};
