import * as React from 'react';

interface Props {
  size?: number;
}

const Minus: React.FC<Props> = ({ size = 16 }) => (
  <svg
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    width={size}
    height={size}
    viewBox='0 0 31.427 31.427'
  >
    <path
      fill='#929292'
      d='M1.111,16.832C0.492,16.832,0,16.325,0,15.706c0-0.619,0.492-1.111,1.111-1.111H30.3 c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H1.111z'
    />
  </svg>
);

export default Minus;
