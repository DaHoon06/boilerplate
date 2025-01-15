import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const TextareaIcon: FC<ActiveIcon> = (props): ReactElement => {
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
      <rect width="28" height="28" rx="4.2" fill={bgColor} stroke={borderColor} />
      <path
        d="M16 19.6C16 18.8268 15.3732 18.2 14.6 18.2H7.4C6.6268 18.2 6 18.8268 6 19.6C6 20.3732 6.6268 21 7.4 21H14.6C15.3732 21 16 20.3732 16 19.6ZM22 14C22 13.2268 21.3732 12.6 20.6 12.6H7.4C6.6268 12.6 6 13.2268 6 14C6 14.7732 6.6268 15.4 7.4 15.4H20.6C21.3732 15.4 22 14.7732 22 14ZM7.4 7C6.6268 7 6 7.6268 6 8.4C6 9.1732 6.6268 9.8 7.4 9.8H20.6C21.3732 9.8 22 9.1732 22 8.4C22 7.6268 21.3732 7 20.6 7H7.4Z"
        fill={lineColor}
      />
      <path
        d="M6 19.6C6 18.8268 6.6268 18.2 7.4 18.2H14.6C15.3732 18.2 16 18.8268 16 19.6C16 20.3732 15.3732 21 14.6 21H7.4C6.6268 21 6 20.3732 6 19.6Z"
        fill={lineColor}
      />
      <path
        d="M18 19.6C18 18.8268 18.6268 18.2 19.4 18.2H20.6C21.3732 18.2 22 18.8268 22 19.6C22 20.3732 21.3732 21 20.6 21H19.4C18.6268 21 18 20.3732 18 19.6Z"
        fill={lineColor}
      />
    </svg>
  );
};

export default TextareaIcon;
