import { ReactElement } from "react";
import { Icon } from "@unisurvey/interfaces/base";

const ArrowDownIcon = (props: Icon): ReactElement => {
  const { width = 14, height = 8, color = "#ffffff" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4987 0.31952C13.9247 0.745546 13.9247 1.43627 13.4987 1.8623L7.68048 7.68048C7.25445 8.10651 6.56373 8.10651 6.1377 7.68048L0.31952 1.8623C-0.106507 1.43627 -0.106507 0.745547 0.31952 0.31952C0.745546 -0.106506 1.43627 -0.106506 1.8623 0.31952L6.90909 5.36631L11.9559 0.31952C12.3819 -0.106507 13.0726 -0.106507 13.4987 0.31952Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownIcon;
