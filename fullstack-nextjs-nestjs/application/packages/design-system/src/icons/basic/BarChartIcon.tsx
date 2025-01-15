import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const BarChartIcon: FC<ActiveIcon> = (props): ReactElement => {
  const { width = 20, height = 20, color = '#999999', active = false, activeColor = '#FFFFFF' } = props;
  const lineColor = active ? activeColor : color;
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.5 5.83333H3.83333C3.36662 5.83333 3.13327 5.83333 2.95501 5.92416C2.79821 6.00406 2.67072 6.13154 2.59083 6.28834C2.5 6.4666 2.5 6.69996 2.5 7.16667V16.1667C2.5 16.6334 2.5 16.8667 2.59083 17.045C2.67072 17.2018 2.79821 17.3293 2.95501 17.4092C3.13327 17.5 3.36662 17.5 3.83333 17.5H7.5M7.5 17.5H12.5M7.5 17.5L7.5 3.83333C7.5 3.36662 7.5 3.13327 7.59083 2.95501C7.67072 2.79821 7.79821 2.67072 7.95501 2.59083C8.13327 2.5 8.36662 2.5 8.83333 2.5L11.1667 2.5C11.6334 2.5 11.8667 2.5 12.045 2.59083C12.2018 2.67072 12.3293 2.79821 12.4092 2.95501C12.5 3.13327 12.5 3.36662 12.5 3.83333V17.5M12.5 9.16667H16.1667C16.6334 9.16667 16.8667 9.16667 17.045 9.25749C17.2018 9.33739 17.3293 9.46487 17.4092 9.62167C17.5 9.79993 17.5 10.0333 17.5 10.5V16.1667C17.5 16.6334 17.5 16.8667 17.4092 17.045C17.3293 17.2018 17.2018 17.3293 17.045 17.4092C16.8667 17.5 16.6334 17.5 16.1667 17.5H12.5"
        stroke={lineColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BarChartIcon;
