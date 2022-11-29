import React from 'react';
import { Form } from 'react-bootstrap';

const ConfirmAddressForm = () => {
  return (
    <>
      <div>
        <Form className="form-mobile form-jumia">
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
