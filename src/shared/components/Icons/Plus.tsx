import * as React from 'react';

interface Props {
  size?: number;
}

const Plus: React.FC<Props> = ({ size = 16 }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 16 16'>
    <path
      fill='none'
      fillRule='evenodd'
      stroke='#929292'
      strokeLinejoin='round'
      strokeWidth='1.25'
      d='M8 8H1h7V1v7zm0 0v7-7h7-7z'
    />
  </svg>
);

export default Plus;
