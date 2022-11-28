import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  shape?: 'circle' | 'normal';
  color?: 'primary' | 'link' | 'white' | 'grey' | 'silver' | 'transparent' | 'dark';
  textColor?: 'orange' | 'black'; //only color white
  size?: 'sm' | 'md' | 'lg';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, shape, color, textColor, size, startIcon, endIcon, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={`d-flex align-items-center justify-content-center button link ${
        shape === 'circle' ? 'circle' : ''
      } ${color || ''} ${textColor || ''} ${size || ''}`}
    >
      {startIcon && <div className="mx-1">{startIcon}</div>}
      {children}
      {endIcon && <div className="mx-1">{endIcon}</div>}
    </button>
  );
};

export default React.memo(Button);
