import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const SortQuestionUnitIcon: FC<ActiveIcon> = (props): ReactElement => {
  const { width = 20, height = 20, color = '#666666', active = false, activeColor = '#FFFFFF' } = props;
  const lineColor = active ? activeColor : color;
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16797 5.83398H10.8346" stroke={lineColor} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4.16797 10H9.16797" stroke={lineColor} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4.16797 14.168H7.5013" stroke={lineColor} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15.832 15L18.332 12.5M15.832 15L13.332 12.5M15.832 15L15.832 5" stroke={lineColor} strokeWidth="1.4" />
    </svg>
  );
};

export default SortQuestionUnitIcon;
