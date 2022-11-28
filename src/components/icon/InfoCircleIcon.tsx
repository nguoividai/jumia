import React from 'react';

type InfoCircleIconProps = {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
};

const InfoCircleIcon: React.FC<InfoCircleIconProps> = ({ width, height, style }) => {
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
        d="M9 6.2998V9.4248M16.5 8.7998C16.5 12.9419 13.1421 16.2998 9 16.2998C4.85786 16.2998 1.5 12.9419 1.5 8.7998C1.5 4.65767 4.85786 1.2998 9 1.2998C13.1421 1.2998 16.5 4.65767 16.5 8.7998ZM9 11.9248H9.00625V11.9311H9V11.9248Z"
        stroke="#6B7280"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default React.memo(InfoCircleIcon);
