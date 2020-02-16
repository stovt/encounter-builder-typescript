import * as React from 'react';

interface Props {
  width?: number;
  height?: number;
}

const Close: React.FC<Props> = ({ width = 12, height = 12 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 12 12'>
    <path
      fill='none'
      fillRule='evenodd'
      stroke='#929292'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.25'
      d='M6 6L1 1l5 5 5-5-5 5zm0 0l5 5-5-5-5 5 5-5z'
    />
  </svg>
);

export default Close;
