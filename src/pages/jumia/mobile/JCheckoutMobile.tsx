import React from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import Switch from 'src/components/switch/Switch';
import CheckoutTotal from 'src/pages/components/CheckoutTotal';
import DeliveryFormMobile from 'src/pages/components/DeliveryFormMobile.';
import ListVoucherMobile from 'src/pages/components/ListVoucherMobile';
import OrderSummaryMobile from 'src/pages/components/OrderSummaryMobile';

const JCheckoutMobile = () => (
  <>
    <Form validated={true} className="form-mobile">
      <DeliveryFormMobile />
      <OrderSummaryMobile />
      <ListVoucherMobile />

      <CheckoutTotal />

      <Card className="border-0">
        <Card.Body>
          <div style={{ fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#52525B' }}>
            Add Note
            <span className="float-right">
              <Switch />
            </span>
          </div>
          <Form.Control className="mt-2" type="text" as="textarea" placeholder="add comment..." />
        </Card.Body>
      </Card>

      <ListGroup variant="flush">
        <ListGroup.Item
          style={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#3F3F46',
            border: 0,
          }}
        >
          <i style={{ marginRight: 10 }} className="icofont-money-bag"></i>
          Cash
          <Form.Check className="float-right" type="radio" name="payment" />
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#3F3F46',
            border: 0,
          }}
        >
          <i style={{ marginRight: 10 }} className="icofont-cash-on-delivery-alt"></i>
          Pay with card
          <Form.Check className="float-right" type="radio" name="payment" />
        </ListGroup.Item>
      </ListGroup>

      <div style={{ gap: '0.5rem' }} className="d-flex">
        <Form.Check
          style={{ width: '5%' }}
          className="float-right"
          type="checkbox"
          name="payment"
        />
        <div
          style={{
            width: '95%',
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '18px',
            color: '#71717A',
          }}
        >
          <strong>Terms:</strong>&nbsp; By placing your order, you confrimthat you agree to the
          &nbsp;{' '}
          <a className="primary" href="#">
            User Terms and Conditions
          </a>
        </div>
      </div>

      <div className="mt-4">
        <Button disabled style={{ width: '100%' }} color="primary">
          Pay with Cash
        </Button>
      </div>
    </Form>
  </>
);

export default React.memo(JCheckoutMobile);
