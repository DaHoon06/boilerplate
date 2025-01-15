import { ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const SampleIcon = (props: ActiveIcon): ReactElement => {
  const {
    width = 20,
    height = 20,
    color = "#999999",
    activeColor = "#3174ba",
    active = false,
  } = props;
  const lineColor = active ? activeColor : color;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99935 12.9167H6.24935C5.08638 12.9167 4.50489 12.9167 4.03173 13.0602C2.96639 13.3834 2.13272 14.217 1.80955 15.2824C1.66602 15.7555 1.66602 16.337 1.66602 17.5M15.8327 17.5V12.5M13.3327 15H18.3327M12.0827 6.25C12.0827 8.32107 10.4038 10 8.33268 10C6.26161 10 4.58268 8.32107 4.58268 6.25C4.58268 4.17893 6.26161 2.5 8.33268 2.5C10.4038 2.5 12.0827 4.17893 12.0827 6.25Z"
        stroke={lineColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SampleIcon;
