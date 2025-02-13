import { ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

export const LinkIcon = (props: ActiveIcon): ReactElement => {
  const {
    width = 20,
    height = 20,
    color = "#999999",
    activeColor = "#3174ba",
    active = false,
    disabled = false,
  } = props;

  const lineColor = disabled ? "#e1e1e1" : active ? activeColor : color;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.15833 11.2577L12.85 14.5743M12.8417 5.42435L7.15833 8.74102M17.5 4.16602C17.5 5.54673 16.3807 6.66602 15 6.66602C13.6193 6.66602 12.5 5.54673 12.5 4.16602C12.5 2.7853 13.6193 1.66602 15 1.66602C16.3807 1.66602 17.5 2.7853 17.5 4.16602ZM7.5 9.99935C7.5 11.3801 6.38071 12.4993 5 12.4993C3.61929 12.4993 2.5 11.3801 2.5 9.99935C2.5 8.61864 3.61929 7.49935 5 7.49935C6.38071 7.49935 7.5 8.61864 7.5 9.99935ZM17.5 15.8327C17.5 17.2134 16.3807 18.3327 15 18.3327C13.6193 18.3327 12.5 17.2134 12.5 15.8327C12.5 14.452 13.6193 13.3327 15 13.3327C16.3807 13.3327 17.5 14.452 17.5 15.8327Z"
        stroke={lineColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
