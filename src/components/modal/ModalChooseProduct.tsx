import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import pizzaVector from 'src/assets/images/jumia/pizza-vector.png';
import Button from '../button/Button';
import JumiaTab from '../tab/JumiaTab';

type ModalChooseProductProps = {
  trigger?: React.ReactNode;
};

const maxStep = 3;

const ModalChooseProduct: React.FC<ModalChooseProductProps> = ({ trigger }) => {
  const [show, setShow] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const increaseStep = () => {
    if (currentStep < maxStep) setCurrentStep(currentStep + 1);
  };

  const decreaseStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>{trigger}</div>

      <Modal
        backdrop="static"
        className="modal-product modal-product-choose"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Peperoni Pizza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="product-description">
            A classic favorite Tender beef and fresh broccli in ginger soy sauce.
          </div>
          <div className="product-image">
            <img alt="product" src={pizzaVector} />
          </div>
          <div className="product-body">
            <JumiaTab step={currentStep} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <span className="total">Total : €22.23</span>

          {currentStep > 0 && (
            <Button color="link" onClick={decreaseStep}>
              Back
            </Button>
          )}
          {currentStep < maxStep && (
            <Button color="primary" onClick={increaseStep}>
              Next
            </Button>
          )}
          {currentStep === maxStep && (
            <Button color="primary" onClick={handleClose}>
              Add To Cart
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default React.memo(ModalChooseProduct);
