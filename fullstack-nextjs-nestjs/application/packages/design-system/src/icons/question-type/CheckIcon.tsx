import { FC, ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const CheckIcon: FC<ActiveIcon> = (props): ReactElement => {
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
      <g clipPath="url(#clip0_7758_3993)">
        <path
          d="M12.9762 8.53186C12.8611 8.42282 12.7017 8.36861 12.543 8.36861C12.3843 8.36861 12.2243 8.42281 12.1085 8.53251C11.8701 8.75835 11.8701 9.12743 12.1085 9.35392L13.7241 10.8838C13.9543 11.1026 14.3602 11.1039 14.5918 10.8838L17.2828 8.33377C17.3993 8.22343 17.464 8.0776 17.464 7.92274C17.464 7.76788 17.3993 7.62205 17.2835 7.51171C17.0499 7.29168 16.6467 7.29426 16.4165 7.51171L14.1586 9.65138L12.9769 8.53186H12.9762Z"
          fill={lineColor}
        />
        <path
          d="M17.33 10.2851C17.029 10.2851 16.7838 10.5174 16.7838 10.8026V12.4274H11.0925V7.03499H14.3148C14.6158 7.03499 14.861 6.8027 14.861 6.51749C14.861 6.23229 14.6158 6 14.3148 6H10.6729C10.3017 6 10 6.28649 10 6.63816V12.8236C10 13.1752 10.3024 13.4617 10.6736 13.4617H17.2027C17.5739 13.4617 17.8763 13.1752 17.8763 12.8236V10.802C17.8763 10.5168 17.6311 10.2845 17.33 10.2845V10.2851Z"
          fill={lineColor}
        />
        <path
          d="M17.202 15H10.6736C10.3024 15 10 15.2865 10 15.6382V21.8236C10 22.1752 10.3024 22.4617 10.6736 22.4617H17.2027C17.5739 22.4617 17.8763 22.1752 17.8763 21.8236V15.6382C17.8763 15.2865 17.5739 15 17.2027 15H17.202ZM16.7838 21.4267H11.0925V16.0343H16.7838V21.4267Z"
          fill={lineColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_7758_3993">
          <rect
            width="8"
            height="17"
            fill="white"
            transform="translate(10 6)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckIcon;
