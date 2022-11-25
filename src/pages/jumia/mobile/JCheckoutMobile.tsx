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
      <div style={{ background: '#fff', padding: '1rem', margin: '1rem -12px' }}>
        <DeliveryFormMobile />
      </div>

      <div style={{ background: '#fff', padding: '1rem', margin: '1rem -12px' }}>
        <OrderSummaryMobile />
        <ListVoucherMobile />
        <CheckoutTotal />
      </div>

      <Card
        className="border-0"
        style={{ background: '#fff', padding: '1rem', margin: '1rem -12px' }}
      >
        <Card.Body>
          <div style={{ fontWeight: 700, fontSize: 14, lineHeight: '20px', color: '#52525B' }}>
            Add Note
            <span className="float-right">
              <Switch />
            </span>
          </div>
          <Form.Control
            className="mt-2"
            type="text"
            rows={3}
            as="textarea"
            placeholder="add comment..."
          />
        </Card.Body>
      </Card>

      <div style={{ background: '#fff', padding: '1rem', margin: '1rem -12px' }}>
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
      </div>

      <div style={{ gap: '0.5rem', padding: '1rem', margin: '1rem -12px' }} className="d-flex">
        <span
          style={{
            width: '5%',
          }}
        >
          <Form.Check className="check-term float-right" type="checkbox" name="payment" />
        </span>

        <div
          style={{
            width: '95%',
            fontSize: '12px',
            lineHeight: '18px',
            color: '#71717A',
          }}
        >
          <strong>Terms:</strong>&nbsp; By placing your order, you confrimthat you agree to the
          &nbsp;{' '}
          <a className="primary" href="#/" onClick={(e) => e.preventDefault()}>
            User Terms and Conditions
          </a>
        </div>
      </div>

      <div className="mt-4 mb-4">
        <Button type="button" style={{ width: '100%' }} size="md" color="primary">
          Pay with Cash
        </Button>
      </div>
    </Form>
  </>
);

export default React.memo(JCheckoutMobile);
