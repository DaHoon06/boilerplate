import { ReactElement } from "react";
import { Icon } from "@unisurvey/interfaces/base";

const ProjectListIcon = (props: Icon): ReactElement => {
  const { width = 24, height = 24, color = "#666666" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 7H13" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M5 12H11" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M5 17H9" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path
        d="M19 18L22 15M19 18L16 15M19 18L19 6"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default ProjectListIcon;
