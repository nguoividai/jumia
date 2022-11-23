import React from 'react';
import { Form } from 'react-bootstrap';

const ConfirmAddressForm = () => {
  return (
    <>
      <div
        className="title"
        style={{
          fontWeight: 800,
          fontSize: '24px',
          lineHeight: '30px',
          color: '#27272A',
        }}
      >
        Confirm Address
      </div>
      <div className="mt-3">
        <Form className="form-mobile">
          <Form.Group className="mb-3">
            <Form.Label>Bussiness or Bulding Name</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Flat or House Number</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Postcode</Form.Label>
            <Form.Control type="text" placeholder="Enter text" />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default React.memo(ConfirmAddressForm);
