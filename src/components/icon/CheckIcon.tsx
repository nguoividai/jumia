import React from 'react';

type CheckIconProps = {
  width?: number;
  height?: number;
};

const CheckIcon: React.FC<CheckIconProps> = ({ width, height }) => {
  return (
    <svg
      width={width || 20}
      height={height}
      viewBox="0 0 26 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 14.4649L21.99 2.97363L23.7587 4.74113L10.5 17.9999L2.54498 10.0449L4.31248 8.27738L10.5 14.4649Z"
        fill="black"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
};

export default React.memo(CheckIcon);
