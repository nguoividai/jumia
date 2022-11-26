import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import JConfirmAddress from '../jumia/mobile/JConfirmAddress';

const DeliveryFormMobile = () => {
  return (
    <>
      <div className="delivery-title">
        <i className="icofont-truck-alt primary"></i> Delivery
      </div>

      <JConfirmAddress trigger={<span className="edit-address">Edit Address</span>} />

      <Form.Group className="mb-3">
        <Form.Label>Delivery Address</Form.Label>
        <Form.Control type="text" placeholder="Enter you address" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Delivery time</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>
            <i className="icofont-clock-time"></i>
          </InputGroup.Text>
          <Form.Select>
            <option>-Select Collection Time-</option>
            <option value="1">Item1</option>
            <option value="2">Item2</option>
            <option value="3">Chosen value</option>
          </Form.Select>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Your name on order (for when you collect)</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
    </>
  );
};

export default React.memo(DeliveryFormMobile);
