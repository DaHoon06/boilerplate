import { ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const StatusIcon = (props: ActiveIcon): ReactElement => {
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
        d="M9.99935 13.3333V17.5M9.99935 13.3333L14.9993 17.5M9.99935 13.3333L4.99935 17.5M17.4993 2.5V9.33333C17.4993 10.7335 17.4993 11.4335 17.2269 11.9683C16.9872 12.4387 16.6047 12.8212 16.1343 13.0608C15.5995 13.3333 14.8995 13.3333 13.4993 13.3333H6.49935C5.09922 13.3333 4.39915 13.3333 3.86437 13.0608C3.39397 12.8212 3.01152 12.4387 2.77183 11.9683C2.49935 11.4335 2.49935 10.7335 2.49935 9.33333V2.5M6.66602 7.5V10M9.99935 5.83333V10M13.3327 9.16667V10M18.3327 2.5H1.66602"
        stroke={lineColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default StatusIcon;
