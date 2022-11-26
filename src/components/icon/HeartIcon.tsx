import React, { useState } from 'react';

const HeartIcon = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <span
      className="icon float-right text-center"
      onClick={(e) => {
        e.stopPropagation();
        setActive(!active);
      }}
    >
      <i className={`d-block icofont-heart ${active ? 'active' : ''}`}></i>
      <span
        style={{
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: '18px',
          color: '#27272A',
          marginTop: -2,
          display: 'block',
        }}
      >
        12
      </span>
    </span>
  );
};

export default React.memo(HeartIcon);
