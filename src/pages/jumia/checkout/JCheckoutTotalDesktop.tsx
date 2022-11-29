import React from 'react';
import { Form, InputGroup, ListGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import ModalOverPage from 'src/components/modal/ModalOverPage';
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
          <div className="voucher-active">
            <div
              style={{
                border: '0.5px solid #ddd',
                borderRadius: '8px',
                padding: '1rem',
              }}
              className="add-promotion d-flex gap-2 align-items-center mb-2"
            >
              <div style={{ width: '10%' }} className="voucher-icon">
                <i style={{ fontSize: 26 }} className="icofont-tag primary"></i>
              </div>
              <div style={{ width: '70%' }} className="voucher-content">
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '22px',
                    color: '#262626',
                  }}
                >
                  Voucher lozells
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: '18px',
                    color: '#71717A',
                  }}
                >
                  20% off your first order
                </div>
              </div>
              <div style={{ width: '20%' }} className="voucher-action">
                <Button
                  style={{
                    fontSize: 14,
                    padding: '10px 10px',
                  }}
                  color="primary"
                >
                  Change
                </Button>
              </div>
            </div>

            <div className="mt-2 mb-2">
              <div
                className="d-flex gap-2 align-items-center"
                style={{
                  fontSize: 14,
                  padding: '1rem',
                  background: 'rgba(255, 109, 16, 0.11)',
                  borderRadius: 8,
                  color: '#F4894A',
                }}
              >
                <div className="icon">
                  <i className="icofont-fire-burn"></i>
                </div>
                <div className="content">
                  You have saved <strong>£1.20</strong> on the bill
                </div>
              </div>
            </div>
          </div>

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
                <ModalOverPage
                  fullscreen="sm-down"
                  centered
                  title="Have a Promo Code ?"
                  trigger={<Button color="primary">Add</Button>}
                >
                  <Form.Control type="text" placeholder="Add promo code" />

                  <div className="mt-4">
                    <Button style={{ width: '100%' }} color="primary">
                      Apply
                    </Button>
                  </div>
                </ModalOverPage>
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
