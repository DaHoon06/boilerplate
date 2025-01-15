import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const LockedIcon: FC<ActiveIcon> = (props): ReactElement => {
  const { width = 20, height = 20, color = '#999999', active = false, activeColor = '#FFFFFF' } = props;
  const lineColor = active ? activeColor : color;
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.33398 11.5C3.33398 9.61438 3.33398 8.67157 3.91977 8.08579C4.50556 7.5 5.44837 7.5 7.33398 7.5H12.6673C14.5529 7.5 15.4957 7.5 16.0815 8.08579C16.6673 8.67157 16.6673 9.61438 16.6673 11.5V11.5C16.6673 14.3284 16.6673 15.7426 15.7886 16.6213C14.91 17.5 13.4957 17.5 10.6673 17.5H9.33398C6.50556 17.5 5.09134 17.5 4.21266 16.6213C3.33398 15.7426 3.33398 14.3284 3.33398 11.5V11.5Z"
        stroke={lineColor}
      />
      <path
        d="M13.3346 6.66667V5.83333C13.3346 3.99239 11.8423 2.5 10.0013 2.5V2.5C8.16035 2.5 6.66797 3.99239 6.66797 5.83333V6.66667"
        stroke={lineColor}
        strokeLinecap="round"
      />
      <circle cx="10.0007" cy="12.5007" r="1.66667" fill="#999999" />
    </svg>
  );
};

export default LockedIcon;
