import { FC, ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const CheckSetsIcon: FC<ActiveIcon> = (props): ReactElement => {
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
      <g clipPath="url(#clip0_7758_3995)">
        <path
          d="M8.81054 5H6.09001C5.48802 5 5 5.48802 5 6.09001V8.81054C5 9.41254 5.48802 9.90055 6.09001 9.90055H8.81054C9.41254 9.90055 9.90055 9.41254 9.90055 8.81054V6.09001C9.90055 5.48802 9.41254 5 8.81054 5Z"
          fill={lineColor}
        />
        <path
          d="M15.4062 5H12.6857C12.0837 5 11.5957 5.48802 11.5957 6.09001V8.81054C11.5957 9.41254 12.0837 9.90055 12.6857 9.90055H15.4062C16.0082 9.90055 16.4963 9.41254 16.4963 8.81054V6.09001C16.4963 5.48802 16.0082 5 15.4062 5Z"
          fill={lineColor}
        />
        <path
          d="M8.81054 11.5312H6.09001C5.48802 11.5312 5 12.0193 5 12.6213V15.3418C5 15.9438 5.48802 16.4318 6.09001 16.4318H8.81054C9.41254 16.4318 9.90055 15.9438 9.90055 15.3418V12.6213C9.90055 12.0193 9.41254 11.5312 8.81054 11.5312Z"
          fill={lineColor}
        />
        <path
          d="M15.4062 11.5312H12.6857C12.0837 11.5312 11.5957 12.0193 11.5957 12.6213V15.3418C11.5957 15.9438 12.0837 16.4318 12.6857 16.4318H15.4062C16.0082 16.4318 16.4963 15.9438 16.4963 15.3418V12.6213C16.4963 12.0193 16.0082 11.5312 15.4062 11.5312Z"
          fill={lineColor}
        />
      </g>
      <g clipPath="url(#clip1_7758_3995)">
        <path
          d="M15.3789 11.5684H12.6584C12.0564 11.5684 11.5684 12.0564 11.5684 12.6584V15.3789C11.5684 15.9809 12.0564 16.4689 12.6584 16.4689H15.3789C15.9809 16.4689 16.4689 15.9809 16.4689 15.3789V12.6584C16.4689 12.0564 15.9809 11.5684 15.3789 11.5684Z"
          fill={lineColor}
        />
        <path
          d="M21.9746 11.5684H19.2541C18.6521 11.5684 18.1641 12.0564 18.1641 12.6584V15.3789C18.1641 15.9809 18.6521 16.4689 19.2541 16.4689H21.9746C22.5766 16.4689 23.0646 15.9809 23.0646 15.3789V12.6584C23.0646 12.0564 22.5766 11.5684 21.9746 11.5684Z"
          fill={lineColor}
        />
        <path
          d="M15.3789 18.0996H12.6584C12.0564 18.0996 11.5684 18.5876 11.5684 19.1896V21.9101C11.5684 22.5121 12.0564 23.0002 12.6584 23.0002H15.3789C15.9809 23.0002 16.4689 22.5121 16.4689 21.9101V19.1896C16.4689 18.5876 15.9809 18.0996 15.3789 18.0996Z"
          fill={lineColor}
        />
        <path
          d="M21.9746 18.0996H19.2541C18.6521 18.0996 18.1641 18.5876 18.1641 19.1896V21.9101C18.1641 22.5121 18.6521 23.0002 19.2541 23.0002H21.9746C22.5766 23.0002 23.0646 22.5121 23.0646 21.9101V19.1896C23.0646 18.5876 22.5766 18.0996 21.9746 18.0996Z"
          fill={lineColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_7758_3995">
          <rect
            width="11.4947"
            height="11.4316"
            fill="white"
            transform="translate(5 5)"
          />
        </clipPath>
        <clipPath id="clip1_7758_3995">
          <rect
            width="11.4947"
            height="11.4316"
            fill="white"
            transform="translate(11.5684 11.5684)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CheckSetsIcon;
