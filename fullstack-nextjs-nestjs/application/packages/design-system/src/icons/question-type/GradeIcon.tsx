import { FC, ReactElement } from 'react';
import { ActiveIcon } from '@unisurvey/interfaces/base';

const GradeIcon: FC<ActiveIcon> = (props): ReactElement => {
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
        d="M5 7.99961C5 8.77281 5.6268 9.39961 6.4 9.39961C7.1732 9.39961 7.8 8.77281 7.8 7.99961C7.8 7.22641 7.1732 6.59961 6.4 6.59961C5.6268 6.59961 5 7.22641 5 7.99961Z"
        fill={lineColor}
      />
      <path
        d="M10.7988 7.80078H21.7988"
        stroke={lineColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 13.8004C5 14.5736 5.6268 15.2004 6.4 15.2004C7.1732 15.2004 7.8 14.5736 7.8 13.8004C7.8 13.0272 7.1732 12.4004 6.4 12.4004C5.6268 12.4004 5 13.0272 5 13.8004Z"
        fill={lineColor}
      />
      <path
        d="M10.7988 13.5996H21.7988"
        stroke={lineColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19.9996C5 20.7728 5.6268 21.3996 6.4 21.3996C7.1732 21.3996 7.8 20.7728 7.8 19.9996C7.8 19.2264 7.1732 18.5996 6.4 18.5996C5.6268 18.5996 5 19.2264 5 19.9996Z"
        fill={lineColor}
      />
      <path
        d="M10.7988 19.8008H21.7988"
        stroke={lineColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GradeIcon;
