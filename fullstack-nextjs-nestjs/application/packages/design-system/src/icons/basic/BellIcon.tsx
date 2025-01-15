import { ReactElement, useMemo } from "react";
import { Icon } from "@unisurvey/interfaces/base";
import styled from "styled-components";

interface BellIconProps extends Icon {
  active?: boolean;
}

const BellIconLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BellActive = styled.div`
  position: absolute;
  left: 8px;
  bottom: 14px;
  border-radius: 50%;
  background-color: #fd4e15ff;
  display: inline-block;
  width: 10px;
  height: 10px;
`;

const BellIcon = (props: BellIconProps): ReactElement => {
  const {
    width = 20,
    height = 20,
    color: iconColor = "#333333",
    active = false,
  } = props;

  const color = useMemo(() => {
    return active ? "#3174BA" : iconColor;
  }, [active]);

  return (
    <BellIconLayout>
      {active && <BellActive />}
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.35287 7.11739C5.62674 4.75816 7.62493 2.97852 10 2.97852V2.97852C12.3751 2.97852 14.3733 4.75816 14.6471 7.11739L14.8314 8.70462C14.9424 9.66088 15.2653 10.5803 15.7766 11.396L16.2501 12.1513C16.501 12.5515 16.6264 12.7517 16.6647 12.9095C16.7872 13.4146 16.5024 13.9293 16.0094 14.0938C15.8553 14.1452 15.6191 14.1452 15.1467 14.1452H4.85331C4.3809 14.1452 4.14469 14.1452 3.99063 14.0938C3.49761 13.9293 3.21278 13.4146 3.33527 12.9095C3.37355 12.7517 3.49901 12.5515 3.74992 12.1513L4.22336 11.396C4.73468 10.5803 5.0576 9.66088 5.16861 8.70462L5.35287 7.11739Z"
          stroke={color}
        />
        <path
          d="M7.58519 14.6756C7.72762 15.4388 8.04149 16.1132 8.4781 16.5942C8.91471 17.0752 9.44966 17.3359 10 17.3359C10.5503 17.3359 11.0853 17.0752 11.5219 16.5942C11.9585 16.1132 12.2724 15.4388 12.4148 14.6756"
          stroke={color}
          strokeLinecap="round"
        />
      </svg>
    </BellIconLayout>
  );
};

export default BellIcon;
