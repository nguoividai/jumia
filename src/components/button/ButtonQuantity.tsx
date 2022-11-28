import React, { useState } from 'react';
import Button from './Button';

type ButtonQuantityProps = {
  textZero?: string;
  style?: React.CSSProperties;
};

const ButtonQuantity: React.FC<ButtonQuantityProps> = ({ textZero, style }) => {
  const [value, setValue] = useState<number>(0);

  const increase = () => {
    setValue((prev) => prev + 1);
  };

  const decrease = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div style={style} className="button-quantity">
      {value > 0 ? (
        <>
          <Button size="sm" onClick={decrease}>
            <i className="icofont-minus"></i>
          </Button>
          <input className="primary" value={value} disabled />
        </>
      ) : null}

      {value === 0 && textZero ? (
        <>
          <Button size="sm" onClick={increase}>
            {(
              <span
                style={{
                  color: '#F4894A',
                }}
              >
                {textZero}
              </span>
            ) || <i className="icofont-plus primary"></i>}
          </Button>
        </>
      ) : null}

      {value > 0 ? (
        <Button size="sm" onClick={increase}>
          <i className="icofont-plus primary"></i>
        </Button>
      ) : null}
    </div>
  );
};

export default React.memo(ButtonQuantity);
