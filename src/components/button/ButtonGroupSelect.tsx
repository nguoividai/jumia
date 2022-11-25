import React, { useState } from 'react';
import { Button, ButtonGroup, ButtonGroupProps } from 'react-bootstrap';

type ButtonGroupSelectProps = {
  dataSelects?: { name: string; main?: string; extra?: string; price?: string }[];
  active?: string;
} & ButtonGroupProps;

const ButtonGroupSelect: React.FC<ButtonGroupSelectProps> = ({
  dataSelects,
  active,
  ...buttonGroupProps
}) => {
  const [currentActive, setCurrentActive] = useState<string>(active || '');
  return (
    <>
      <ButtonGroup {...buttonGroupProps} className="mb-2 choose-button-group">
        {dataSelects &&
          dataSelects?.map((e) => (
            <div key={e.name} className="group-item">
              <Button
                className={currentActive === e.name ? 'active' : ''}
                onClick={() => setCurrentActive(e.name)}
              >
                <span className="main-name">{e.main}</span>
                <span className="extra">{e.extra}</span>
              </Button>
              <span className="price">{e.price} </span>
            </div>
          ))}
      </ButtonGroup>
    </>
  );
};

export default React.memo(ButtonGroupSelect);
