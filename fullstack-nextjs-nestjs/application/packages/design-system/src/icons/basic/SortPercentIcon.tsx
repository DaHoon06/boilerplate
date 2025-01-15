import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const SortPercentIcon: FC<ActiveIcon> = (props): ReactElement => {
  const { width = 20, height = 20, color = '#666666', active = false, activeColor = '#FFFFFF' } = props;
  const lineColor = active ? activeColor : color;
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.168 5L5.16797 15" stroke={lineColor} />
      <circle cx="6.5" cy="6.5" r="2" stroke={lineColor} />
      <circle cx="13.5" cy="13.5" r="2" stroke={lineColor} />
    </svg>
  );
};

export default SortPercentIcon;
