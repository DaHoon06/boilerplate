import { FC, ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const RadioSetIcon: FC<ActiveIcon> = (props): ReactElement => {
  const {
    width = 28,
    height = 28,
    color = "#999999",
    backgroundColor = "#EEEEEE",
    active = false,
    activeColor = "#FFFFFF",
    activeBackgroundColor = "#55C8DF",
  } = props;
  const lineColor = active ? activeColor : color;
  const bgColor = active ? activeBackgroundColor : backgroundColor;
  const borderColor = active ? activeBackgroundColor : "#CCCCCC";
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="27"
        rx="3.7"
        fill={bgColor}
        stroke={borderColor}
      />
      <path
        d="M15.9977 16.3996C17.3231 16.3996 18.3977 15.3251 18.3977 13.9996C18.3977 12.6741 17.3231 11.5996 15.9977 11.5996C14.6722 11.5996 13.5977 12.6741 13.5977 13.9996C13.5977 15.3251 14.6722 16.3996 15.9977 16.3996Z"
        fill={lineColor}
      />
      <path
        d="M16 17C14.3457 17 13 15.6543 13 14C13 12.3457 14.3457 11 16 11C17.6543 11 19 12.3457 19 14C19 15.6543 17.6543 17 16 17ZM16 12.2C15.0074 12.2 14.2 13.0074 14.2 14C14.2 14.9926 15.0074 15.8 16 15.8C16.9926 15.8 17.8 14.9926 17.8 14C17.8 13.0074 16.9926 12.2 16 12.2Z"
        fill={lineColor}
      />
      <path
        d="M6 14H22"
        stroke={lineColor}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RadioSetIcon;
