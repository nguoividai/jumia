import React from 'react';

type ButtonIconProps = {
  icon?: React.ReactNode;
  color?: 'silver' | 'green';
  shape?: 'circle' | 'square';
};

const ButtonIcon: React.FC<ButtonIconProps> = (props) => {
  const { icon, color, shape, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={`button-icon ${color || ''} ${shape || ''}`}>
      {icon}
    </button>
  );
};

export default React.memo(ButtonIcon);
