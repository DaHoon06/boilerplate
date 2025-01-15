import { FC, ReactElement } from "react";
import ReactProgressBar from "@ramonak/react-progress-bar";
import styled from "styled-components";

interface ProgressBarProps {
  completedPercent?: number;
  isLabelVisible?: boolean;
  bgColor?: string;
  customLabel?: string;
}

const ProgressBarLayout = styled.div`
  position: relative;
`;

export const ProgressBar: FC<ProgressBarProps> = (props): ReactElement => {
  const {
    customLabel = "",
    completedPercent = 0,
    isLabelVisible = true,
    bgColor = "#3174BA",
  } = props;
  return (
    <ProgressBarLayout>
      <ReactProgressBar
        customLabelStyles={{
          whiteSpace: "nowrap",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        customLabel={customLabel}
        completed={completedPercent}
        isLabelVisible={isLabelVisible}
        bgColor={bgColor}
      />
    </ProgressBarLayout>
  );
};
