import { ReactElement } from "react";
import { Icon } from "@unisurvey/interfaces/base";

export const DownloadIcon = (props: Icon): ReactElement => {
  const { width = 24, height = 25, color = "#fff" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15.3086V18.3086H6V15.3086H4V18.3086C4 19.4086 4.9 20.3086 6 20.3086H18C19.1 20.3086 20 19.4086 20 18.3086V15.3086H18ZM17 11.3086L15.59 9.89859L13 12.4786V4.30859H11V12.4786L8.41 9.89859L7 11.3086L12 16.3086L17 11.3086Z"
        fill={color}
      />
    </svg>
  );
};

export default DownloadIcon;
