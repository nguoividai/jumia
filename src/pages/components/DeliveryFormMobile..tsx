import React from 'react';
import { Form } from 'react-bootstrap';

const DeliveryFormMobile = () => {
  return (
    <>
      <div className="delivery-title">
        <i className="icofont-truck-alt primary"></i> Delivery
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>
          Delivery Address
          <span className="edit-address">Edit Address</span>
        </Form.Label>
        <Form.Control type="text" placeholder="Enter you address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Delivery time</Form.Label>
        <Form.Control type="date" placeholder="-Select Collection Time-" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your name on order (for when you collect)</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
    </>
  );
};

export default React.memo(DeliveryFormMobile);
