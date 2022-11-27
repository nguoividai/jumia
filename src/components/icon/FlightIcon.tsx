import React from 'react';

type FlightIconProps = {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

const FlightIcon: React.FC<FlightIconProps> = ({ width, height, style }) => {
  return (
    <svg
      style={style}
      width={width || 18}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.621695 6.76249C0.186695 6.61749 0.182528 6.38333 0.630028 6.23416L16.5359 0.932493C16.9767 0.785826 17.2292 1.03249 17.1059 1.46416L12.5609 17.3692C12.4359 17.81 12.1817 17.825 11.995 17.4067L9.00003 10.6667L14 3.99999L7.33336 8.99999L0.621695 6.76249Z"
        fill="black"
      />
    </svg>
  );
};

export default React.memo(FlightIcon);
