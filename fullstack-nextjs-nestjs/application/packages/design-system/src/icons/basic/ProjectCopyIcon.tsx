import { ReactElement } from "react";
import { ActiveIcon } from "@unisurvey/interfaces/base";

const ProjectCopyIcon = (props: ActiveIcon): ReactElement => {
  const {
    width = 22,
    height = 22,
    color = "#333333",
    activeColor = "#3174ba",
    active = false,
  } = props;
  const lineColor = active ? activeColor : color;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 1.0028C8.82495 1.01194 8.4197 1.05103 8.09202 1.21799C7.71569 1.40973 7.40973 1.71569 7.21799 2.09202C7.05103 2.4197 7.01194 2.82495 7.0028 3.5M18.5 1.0028C19.1751 1.01194 19.5803 1.05103 19.908 1.21799C20.2843 1.40973 20.5903 1.71569 20.782 2.09202C20.949 2.4197 20.9881 2.82494 20.9972 3.49999M20.9972 12.5C20.9881 13.175 20.949 13.5803 20.782 13.908C20.5903 14.2843 20.2843 14.5903 19.908 14.782C19.5803 14.949 19.1751 14.9881 18.5 14.9972M21 6.99999V8.99999M13.0001 1H15M4.2 21H11.8C12.9201 21 13.4802 21 13.908 20.782C14.2843 20.5903 14.5903 20.2843 14.782 19.908C15 19.4802 15 18.9201 15 17.8V10.2C15 9.07989 15 8.51984 14.782 8.09202C14.5903 7.71569 14.2843 7.40973 13.908 7.21799C13.4802 7 12.9201 7 11.8 7H4.2C3.0799 7 2.51984 7 2.09202 7.21799C1.71569 7.40973 1.40973 7.71569 1.21799 8.09202C1 8.51984 1 9.07989 1 10.2V17.8C1 18.9201 1 19.4802 1.21799 19.908C1.40973 20.2843 1.71569 20.5903 2.09202 20.782C2.51984 21 3.07989 21 4.2 21Z"
        stroke={lineColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProjectCopyIcon;
