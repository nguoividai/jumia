import React, { useState } from 'react';
import Section from 'src/components/section/Section';
import { Badge, Button } from 'react-bootstrap';
import StepChooseSize from '../stepProduct/StepChooseSize';
import StepChooseCrust from '../stepProduct/StepChooseCrust';
import StepChooseBase from '../stepProduct/StepChooseBase';
import StepChooseExtra from '../stepProduct/StepChooseExtra';
import InfoAddProduct from '../stepProduct/InfoAddProduct';

const maxStep = 3;

type JChooseSizeMobileProps = {
  onClose?: () => void;
};

const JChooseSizeMobile: React.FC<JChooseSizeMobileProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const increaseStep = () => {
    if (currentStep === maxStep) {
      onClose?.();
    }
    setCurrentStep((prev) => (prev + 1 <= maxStep ? prev + 1 : maxStep));
  };

  const decreaseStep = () => {
    if (currentStep === 0) {
      onClose?.();
    }
    setCurrentStep((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <Button className="mt-2 back-btn" onClick={decreaseStep}>
        <i className="icofont-rounded-left"></i>
      </Button>
      <Badge className="danger float-right mt-4">Required</Badge>
      <Section
        className="choose-addon"
        title="Meaty Pizza"
        extra="Holy smokes! Something seriously bad happened."
      >
        <InfoAddProduct />

        <div className="jumia-container">
          <div className="steps mt-5">
            {currentStep === 0 && (
              <div className="step-item slide-img">
                <StepChooseSize increaseStep={increaseStep} />
              </div>
            )}
            {currentStep === 1 && (
              <div className="step-item slide-img">
                <StepChooseCrust increaseStep={increaseStep} />
              </div>
            )}
            {currentStep === 2 && (
              <div className="step-item slide-img">
                <StepChooseBase increaseStep={increaseStep} />
              </div>
            )}
            {currentStep === 3 && (
              <div className="step-item">
                <StepChooseExtra increaseStep={increaseStep} />
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JChooseSizeMobile);
