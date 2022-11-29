import React from 'react';
import { Form, InputGroup, ListGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import Section from 'src/components/section/Section';
import JGroupButtonDelivery from '../desktop/JGroupButtonDelivery';

const JCheckoutTotalDesktop = () => {
  return (
    <>
      <JGroupButtonDelivery />

      <Section
        style={{
          border: '0.8px solid #E5E7EB',
          borderRadius: 16,
          padding: '1rem',
        }}
        title={<div style={{ marginTop: -12 }}>Checkout</div>}
      >
        <div className="mt-3">
          <div className="add-promotion">
            <InputGroup
              className="mb-3"
              style={{
                border: '0.5px solid #ddd',
                borderRadius: '8px',
              }}
            >
              <InputGroup.Text
                style={{
                  border: 0,
                  backgroundColor: 'transparent',
                }}
              >
                <i style={{ fontSize: 20 }} className="icofont-tag primary"></i>
              </InputGroup.Text>
              <Form.Control
                style={{
                  border: 0,
                  backgroundColor: 'transparent',
                }}
                placeholder="Add promo code"
              />
              <InputGroup.Text
                style={{
                  border: 0,
                  backgroundColor: 'transparent',
                }}
              >
                <Button color="primary">Add</Button>
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>

        <div className="mt-3">
          <ListGroup variant="flush">
            <ListGroup.Item
              style={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#71717A',
              }}
              className="d-flex align-items-center bg-transparent border-0 p-2 mt-2 mb-2"
            >
              <div
                style={{
                  width: '95%',
                }}
              >
                Subtotal
              </div>
              <div>£90</div>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#71717A',
              }}
              className="d-flex align-items-center bg-transparent border-0 p-2 mt-2 mb-2"
            >
              <div
                style={{
                  width: '95%',
                }}
              >
                Discount
              </div>
              <div>£2.2</div>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#71717A',
              }}
              className="d-flex align-items-center bg-transparent border-0 p-2 mt-2 mb-2"
            >
              <div
                style={{
                  width: '95%',
                }}
              >
                Delivery Fee
              </div>
              <div>£1.2</div>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#27272A',
              }}
              className="d-flex align-items-center bg-transparent border-0 p-2 mt-2 mb-2"
            >
              <div
                style={{
                  width: '95%',
                }}
              >
                Total
              </div>
              <div>£91</div>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="mt-3">
          <Button style={{ width: '100%', padding: '1rem' }} color="primary">
            Continue to payment
          </Button>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JCheckoutTotalDesktop);
