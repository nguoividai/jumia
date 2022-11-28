import React, { useState } from 'react';

type HeartIconProps = {
  type?: 'horizontal' | 'vertical';
  total?: number;
  unit?: string;
};

const HeartIcon: React.FC<HeartIconProps> = ({ type, total, unit }) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <>
      {type === 'vertical' ||
        (!type && (
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
              <span className="total">{total || 12}</span> <span className="unit">{unit}</span>
            </span>
          </span>
        ))}

      {type === 'horizontal' && (
        <span
          className="icon d-flex gap-2"
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
              flex: 'none',
            }}
          >
            <span className="total">{total || 12}</span> <span className="unit">{unit}</span>
          </span>
        </span>
      )}
    </>
  );
};

export default React.memo(HeartIcon);
