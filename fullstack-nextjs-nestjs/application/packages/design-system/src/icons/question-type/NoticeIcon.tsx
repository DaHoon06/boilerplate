import { FC, ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const NoticeIcon: FC<ActiveIcon> = (props): ReactElement => {
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
      <g clipPath="url(#clip0_7758_3999)">
        <g clipPath="url(#clip1_7758_3999)">
          <path
            d="M16.6641 14H10.7C10.3134 14 10 14.3134 10 14.7C10 15.0866 10.3134 15.4 10.7 15.4H16.6641C17.0507 15.4 17.3641 15.0866 17.3641 14.7C17.3641 14.3134 17.0507 14 16.6641 14Z"
            fill={lineColor}
          />
          <path
            d="M14.3 11H10.7C10.3134 11 10 11.3134 10 11.7C10 12.0866 10.3134 12.4 10.7 12.4H14.3C14.6866 12.4 15 12.0866 15 11.7C15 11.3134 14.6866 11 14.3 11Z"
            fill={lineColor}
          />
          <rect
            x="7.7"
            y="7.7"
            width="12.6"
            height="12.6"
            rx="0.7"
            stroke={lineColor}
            strokeWidth="1.4"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_7758_3999">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
        <clipPath id="clip1_7758_3999">
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

export default NoticeIcon;
