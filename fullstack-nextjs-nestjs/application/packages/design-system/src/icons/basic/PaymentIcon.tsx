import { ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const PaymentIcon = (props: ActiveIcon): ReactElement => {
  const {
    width = 20,
    height = 20,
    color = "#999999",
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
        d="M18.3327 8.33268H1.66602M9.16602 11.666H4.99935M1.66602 6.83268L1.66602 13.166C1.66602 14.0994 1.66602 14.5661 1.84767 14.9227C2.00746 15.2363 2.26243 15.4912 2.57603 15.651C2.93255 15.8327 3.39926 15.8327 4.33268 15.8327L15.666 15.8327C16.5994 15.8327 17.0661 15.8327 17.4227 15.651C17.7363 15.4912 17.9912 15.2363 18.151 14.9227C18.3327 14.5661 18.3327 14.0994 18.3327 13.166V6.83268C18.3327 5.89926 18.3327 5.43255 18.151 5.07603C17.9912 4.76243 17.7363 4.50746 17.4227 4.34767C17.0661 4.16602 16.5994 4.16602 15.666 4.16602L4.33268 4.16602C3.39926 4.16602 2.93255 4.16602 2.57603 4.34767C2.26243 4.50746 2.00746 4.76243 1.84767 5.07603C1.66602 5.43255 1.66602 5.89926 1.66602 6.83268Z"
        stroke={lineColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PaymentIcon;
