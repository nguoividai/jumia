import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import pizzaVector from 'src/assets/images/jumia/pizza-vector.png';
import Button from '../button/Button';
import JumiaTab from '../tab/JumiaTab';

const ModalChooseProduct = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Launch demo modal</Button>

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
          <span className="total">Total : €22.23</span>
          <Button color="primary" onClick={handleClose}>
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default React.memo(ModalChooseProduct);
