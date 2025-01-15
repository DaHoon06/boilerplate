import { FC, ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const QuestionCopyIcon: FC<ActiveIcon> = (props): ReactElement => {
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
      <g clipPath="url(#clip0_7758_4000)">
        <path
          d="M16.3 13.1035H11.7C11.3134 13.1035 11 13.4169 11 13.8035C11 14.1901 11.3134 14.5035 11.7 14.5035H16.3C16.6866 14.5035 17 14.1901 17 13.8035C17 13.4169 16.6866 13.1035 16.3 13.1035Z"
          fill={lineColor}
        />
        <path
          d="M14.8629 16.3V11.7C14.8629 11.3134 14.5495 11 14.1629 11C13.7763 11 13.4629 11.3134 13.4629 11.7V16.3C13.4629 16.6866 13.7763 17 14.1629 17C14.5495 17 14.8629 16.6866 14.8629 16.3Z"
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
      <defs>
        <clipPath id="clip0_7758_4000">
          <rect
            width="14"
            height="14"
            fill={lineColor}
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QuestionCopyIcon;
