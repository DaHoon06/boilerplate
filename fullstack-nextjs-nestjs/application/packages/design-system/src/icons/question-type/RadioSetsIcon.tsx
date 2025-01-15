import { FC, ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const RadioSetsIcon: FC<ActiveIcon> = (props): ReactElement => {
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
      <g clipPath="url(#clip0_7758_3994)">
        <path
          d="M11.6654 7H8.33456C7.5975 7 7 7.5975 7 8.33456V11.6654C7 12.4025 7.5975 13 8.33456 13H11.6654C12.4025 13 13 12.4025 13 11.6654V8.33456C13 7.5975 12.4025 7 11.6654 7Z"
          fill={lineColor}
        />
        <path
          d="M19.6654 7H16.3346C15.5975 7 15 7.5975 15 8.33456V11.6654C15 12.4025 15.5975 13 16.3346 13H19.6654C20.4025 13 21 12.4025 21 11.6654V8.33456C21 7.5975 20.4025 7 19.6654 7Z"
          fill={lineColor}
        />
        <path
          d="M11.6654 15H8.33456C7.5975 15 7 15.5975 7 16.3346V19.6654C7 20.4025 7.5975 21 8.33456 21H11.6654C12.4025 21 13 20.4025 13 19.6654V16.3346C13 15.5975 12.4025 15 11.6654 15Z"
          fill={lineColor}
        />
        <path
          d="M19.6654 15H16.3346C15.5975 15 15 15.5975 15 16.3346V19.6654C15 20.4025 15.5975 21 16.3346 21H19.6654C20.4025 21 21 20.4025 21 19.6654V16.3346C21 15.5975 20.4025 15 19.6654 15Z"
          fill={lineColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_7758_3994">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default RadioSetsIcon;
