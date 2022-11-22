import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import pizzaVector from 'src/assets/images/jumia/pizza-vector.png';
import JumiaTab from '../tab/JumiaTab';

const ModalChooseProduct = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal className="modal-product" show={show} onHide={handleClose}>
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
            <JumiaTab />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default React.memo(ModalChooseProduct);
