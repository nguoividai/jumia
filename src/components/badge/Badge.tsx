import React from 'react';

type BadgeProps = {
  children?: React.ReactNode;
  number?: number;
  onClick?: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

const Badge: React.FC<BadgeProps> = ({ children, number, onClick }) => {
  return (
    <span className="badge" onClick={onClick}>
      {number && number > 0 ? <sub className="badge-count">{number}</sub> : null}
      {children}
    </span>
  );
};

export default React.memo(Badge);
