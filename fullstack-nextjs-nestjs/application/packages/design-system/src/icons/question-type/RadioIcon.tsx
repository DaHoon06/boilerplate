import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const RadioIcon: FC<ActiveIcon> = (props): ReactElement => {
  const {
    width = 28,
    height = 28,
    color = '#999999',
    backgroundColor = '#EEEEEE',
    active = false,
    activeColor = '#FFFFFF',
    activeBackgroundColor = '#55C8DF',
  } = props;
  const lineColor = active ? activeColor : color;
  const bgColor = active ? activeBackgroundColor : backgroundColor;
  const borderColor = active ? activeBackgroundColor : '#CCCCCC';
  return (
    <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="27" height="27" rx="3.7" fill={bgColor} stroke={borderColor} />
      <path
        d="M13.9994 22.1687C18.29 22.1687 21.7683 18.6904 21.7683 14.3998C21.7683 10.1091 18.29 6.63086 13.9994 6.63086C9.70872 6.63086 6.23047 10.1091 6.23047 14.3998C6.23047 18.6904 9.70872 22.1687 13.9994 22.1687Z"
        stroke={lineColor}
        strokeWidth="1.26221"
        strokeLinejoin="round"
      />
      <path
        d="M18.2259 11.9961L12.7984 17.4236L9.77539 14.4006"
        stroke={lineColor}
        strokeWidth="1.26221"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RadioIcon;
