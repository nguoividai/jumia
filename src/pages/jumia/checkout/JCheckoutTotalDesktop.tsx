import React from 'react';
import { Form, InputGroup, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/button/Button';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import Section from 'src/components/section/Section';
import JGroupButtonDelivery from '../desktop/JGroupButtonDelivery';

const JCheckoutTotalDesktop = () => {
  const navigate = useNavigate();

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
              <div style={{ width: '20%' }} className="voucher-action d-flex justify-content-end">
                <ModalOverPage
                  fullscreen="sm-down"
                  centered
                  title="Have a Promo Code ?"
                  trigger={
                    <Button
                      style={{
                        fontSize: 14,
                        padding: '10px 10px',
                      }}
                      color="primary"
                    >
                      Change
                    </Button>
                  }
                >
                  <Form.Control type="text" placeholder="Add promo code" />

                  <div className="mt-4">
                    <Button style={{ width: '100%' }} color="primary">
                      Apply
                    </Button>
                  </div>
                </ModalOverPage>
              </div>
            </div>

            <div className="mt-3">
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
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.4992 3.93762C14.8473 5.87062 15.9944 10.1518 14.0614 13.4998C12.1284 16.8479 7.84726 17.995 4.49922 16.062C1.15117 14.129 0.00404119 9.84785 1.93704 6.4998C2.10544 6.20813 2.29165 5.93316 2.49352 5.67548C2.69513 5.41812 3.08414 5.45704 3.28665 5.71368C3.56438 6.06565 3.8807 6.38577 4.22922 6.66764C4.56186 6.93667 5.01598 6.61943 5.00255 6.19183C5.00055 6.12812 4.99954 6.06416 4.99954 5.99997C4.99954 5.08143 5.20594 4.2111 5.5749 3.43282C6.10805 2.30822 6.98062 1.37583 8.0603 0.767983C8.30729 0.628932 8.61076 0.752202 8.73727 1.00584C9.32922 2.1927 10.2646 3.2248 11.4992 3.93762ZM11.9995 11C11.9995 13.2091 10.2087 15 7.99953 15C6.08625 15 4.47861 13.6016 4.08968 11.8183C3.99611 11.3894 4.52918 11.1749 4.90347 11.4045C5.3895 11.7025 5.93682 11.8964 6.50489 11.9685C6.80752 12.0068 7.03561 11.7289 7.01433 11.4246C7.00452 11.2844 6.99953 11.1428 6.99953 11C6.99953 9.5731 7.49763 8.26254 8.32943 7.23269C8.43324 7.10417 8.59847 7.04108 8.76071 7.07233C10.6058 7.4278 11.9995 9.05114 11.9995 11Z"
                      fill="#F4894A"
                    />
                  </svg>
                </div>
                <div className="content">
                  You have saved <strong>£1.20</strong> on the bill
                </div>
              </div>
            </div>
          </div>

          <div className="add-promotion mt-3">
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
                borderBottom: '0.5px solid #E5E5E5',
              }}
              className="d-flex align-items-center bg-transparent pt-3 pb-3 "
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
                borderBottom: '0.5px solid #E5E5E5',
              }}
              className="d-flex align-items-center bg-transparent pt-3 pb-3 "
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
                borderBottom: '0.5px solid #E5E5E5',
              }}
              className="d-flex align-items-center bg-transparent pt-3 pb-3 "
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
              className="d-flex align-items-center bg-transparent pt-3 pb-3 "
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
          <Button
            style={{ width: '100%', padding: '1rem' }}
            color="primary"
            onClick={() => navigate('/confirm')}
          >
            Continue to payment
          </Button>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JCheckoutTotalDesktop);
