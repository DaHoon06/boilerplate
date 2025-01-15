import { FC, ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const TitleIcon: FC<ActiveIcon> = (props): ReactElement => {
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
      <g clipPath="url(#clip0_7758_3998)">
        <path
          d="M22 9.28537C22 9.69576 21.6673 10.0284 21.2569 10.0284C20.8466 10.0284 20.5139 9.69576 20.5139 9.28537V8.49307H8.48613V9.28537C8.48613 9.69576 8.15345 10.0284 7.74306 10.0284C7.33268 10.0284 7 9.69576 7 9.28537V7.74653L7.74306 7H21.2569L22 7.74653V9.28537Z"
          fill={lineColor}
        />
        <path d="M15.2439 7H13.7578V21H15.2439V7Z" fill={lineColor} />
        <path
          d="M17.2612 19.5078H11.7465C11.3342 19.5078 11 19.842 11 20.2543C11 20.6666 11.3342 21.0009 11.7465 21.0009H17.2612C17.6735 21.0009 18.0077 20.6666 18.0077 20.2543C18.0077 19.842 17.6735 19.5078 17.2612 19.5078Z"
          fill={lineColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_7758_3998">
          <rect
            width="15"
            height="14"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TitleIcon;
