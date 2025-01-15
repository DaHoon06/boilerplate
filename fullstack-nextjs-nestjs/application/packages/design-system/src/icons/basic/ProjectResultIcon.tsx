import { ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const ProjectResultIcon = (props: ActiveIcon): ReactElement => {
  const {
    width = 24,
    height = 24,
    color = "#333333",
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
        d="M2.1 12.75C2.1 7.93369 5.8216 3.98604 10.5455 3.62669C10.5697 3.62485 10.5908 3.63192 10.6109 3.65158C10.6329 3.67301 10.65 3.70717 10.65 3.75V12C10.65 12.7456 11.2544 13.35 12 13.35H20.25C20.2931 13.35 20.3273 13.3672 20.3487 13.389C20.3682 13.409 20.3752 13.4298 20.3734 13.454C20.0974 17.0849 17.7006 20.1257 14.4173 21.3372C13.4312 21.701 12.3645 21.9 11.25 21.9C9.27456 21.9 7.44696 21.2747 5.95202 20.2111C3.61949 18.5516 2.1 15.8283 2.1 12.75Z"
        stroke={lineColor}
        strokeWidth="1.2"
      />
      <path
        d="M21.8733 10.5455C21.8752 10.5697 21.8681 10.5908 21.8484 10.6109C21.827 10.6329 21.7928 10.65 21.75 10.65H13.5C13.4172 10.65 13.35 10.5828 13.35 10.5V2.25C13.35 2.20717 13.3671 2.17301 13.3891 2.15158C13.4092 2.13191 13.4303 2.12485 13.4545 2.12669C17.9458 2.46834 21.5317 6.05418 21.8733 10.5455Z"
        stroke={lineColor}
        strokeWidth="1.2"
      />
    </svg>
  );
};

export default ProjectResultIcon;
