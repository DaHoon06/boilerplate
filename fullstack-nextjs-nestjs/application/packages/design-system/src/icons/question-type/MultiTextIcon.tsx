import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const MultiTextIcon: FC<ActiveIcon> = (props): ReactElement => {
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
        d="M15 14C15 13.2268 14.3732 12.6 13.6 12.6H7.4C6.6268 12.6 6 13.2268 6 14C6 14.7732 6.6268 15.4 7.4 15.4H13.6C14.3732 15.4 15 14.7732 15 14ZM7.4 7C6.6268 7 6 7.6268 6 8.4C6 9.1732 6.6268 9.8 7.4 9.8H20.6C21.3732 9.8 22 9.1732 22 8.4C22 7.6268 21.3732 7 20.6 7H7.4Z"
        fill={lineColor}
      />
      <path
        d="M17 14C17 13.2268 17.6268 12.6 18.4 12.6H20.6C21.3732 12.6 22 13.2268 22 14C22 14.7732 21.3732 15.4 20.6 15.4H18.4C17.6268 15.4 17 14.7732 17 14Z"
        fill={lineColor}
      />
    </svg>
  );
};

export default MultiTextIcon;
