import React from 'react';

type CheckboxProps = {
  checked?: boolean;
  label?: string;
};

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { checked, label } = props;
  return (
    <div className="checkbox">
      <input type="checkbox" checked={checked} />
      <div className="label">{label}</div>
    </div>
  );
};

export default Checkbox;
