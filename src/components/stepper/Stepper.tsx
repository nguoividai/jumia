import React from 'react';
import ButtonIcon from '../button/ButtonIcon';

export interface Step {
  label?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

type StepperProps = {
  steps?: Step[];
};

const Stepper: React.FC<StepperProps> = (props) => {
  const { steps } = props;
  return (
    <div className="stepper">
      {steps &&
        steps.map((step) => (
          <div key={step.label} className="step">
            <div className={`step-icon ${step.active ? 'active' : ''}`}>
              <ButtonIcon
                icon={step.icon}
                shape="square"
                color={step.active ? 'green' : 'silver'}
              />
            </div>
            <div className="label">{step.label}</div>
          </div>
        ))}
    </div>
  );
};

export default React.memo(Stepper);
