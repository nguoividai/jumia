import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import OrderInfomation from 'src/components/order/OrderInfomation';
import OrderPriceContainer from 'src/components/order/OrderPriceContainer';
import OrderSummary from 'src/components/order/OrderSummary';
import Section from 'src/components/section/Section';
import JStepper from './JStepper';

const JConfirmDesktop = () => {
  return (
    <>
      <div>
        <Section
          className="confirm-desktop confirm-desktop-back mb-3"
          style={{ padding: 0, border: 0 }}
        >
          <div className="confirm-desktop justify-content-start">
            <div>
              <i className="icofont-long-arrow-left"></i> back to order
            </div>
          </div>
        </Section>

        <Section className="confirm-desktop mb-5">
          <div className="confirm-header text-center mt-5">
            <div className="confirm-header--icon">
              <svg
                width="79"
                height="79"
                viewBox="0 0 79 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.564453"
                  y="0.178711"
                  width="77.8721"
                  height="77.8721"
                  rx="38.9361"
                  fill="#22C55E"
                />
                <path
                  d="M56.1315 25.8574L33.3728 48.6161L23.7837 39.027L21.8906 40.9201L32.4263 51.4557L33.3728 52.3611L34.3194 51.4557L58.0246 27.7505L56.1315 25.8574Z"
                  fill="white"
                />
              </svg>
            </div>

            <div
              style={{
                marginTop: 20,
                fontWeight: 700,
                fontSize: 30,
                lineHeight: '36px',
                color: '#18181B',
              }}
            >
              Your Order Confirmed
            </div>

            <div
              style={{
                marginTop: 12,
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '20px',
                color: '#3F3F46',
              }}
            >
              Thank you , your order has been confirmed and will be shipping soon.
            </div>

            <div
              style={{
                marginTop: 56,
              }}
              className="d-flex gap-3 justify-content-center align-items-center"
            >
              <img
                style={{ width: 32 }}
                src={require('src/assets/images/jumia/icons/delivery-estimate.png')}
                alt="icon"
              />
              <div
                style={{
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '24px',
                  color: '#4B5563',
                }}
              >
                Estimate Delivery 1 hourse 60 min
              </div>
            </div>
          </div>

          <div className="mt-5">
            <JStepper />
          </div>

          <hr className="mt-5" />

          <div className="mt-5">
            <OrderInfomation
              orderInformations={[
                {
                  name: 'Order Number',
                  information: '#33651',
                },
                {
                  name: 'Order Date',
                  information: '12 March, 2022 20:30 Pm',
                },
                {
                  name: 'Address',
                  information: '8504 Peterson Road',
                },
                {
                  name: 'Payment',
                  information: 'Visa - 4456',
                },
              ]}
            />
          </div>

          <div className="mt-4 confirm-checkbox">
            <Form.Check
              className="d-flex align-items-center"
              inline
              label="Notify on order status"
              name="group1"
              type="checkbox"
            />
          </div>

          <hr className="mt-5" />

          <div className="mt-5">
            <div
              style={{
                fontWeight: 700,
                fontSize: 20,
                lineHeight: '28px',
                color: '#262626',
              }}
            >
              Order Summary{' '}
              <span
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: '22px',
                  color: '#A1A1AA',
                }}
              >
                (2 Items)
              </span>
            </div>
          </div>

          <div className="mt-3">
            <OrderSummary
              listItem={[
                {
                  uid: '1',
                  name: 'McSaver Chicken Strips',
                  description: 'hot feature',
                  size: 'Medium',
                  quantity: 2,
                  price: 123,
                },
                {
                  uid: '2',
                  name: 'McSaver Chicken Strips',
                  description: 'hot feature',
                  size: 'Medium',
                  quantity: 2,
                  price: 123,
                },
              ]}
            />
          </div>

          <hr className="mt-5" />

          <div className="mt-5">
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
                    width: '80%',
                  }}
                >
                  Subtotal
                </div>
                <div style={{ width: '20%' }} className="d-flex justify-content-end">
                  £90
                </div>
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
                    width: '80%',
                  }}
                >
                  Discount
                </div>
                <div
                  className="d-flex justify-content-end"
                  style={{
                    color: '#16A34A',
                    width: '20%',
                  }}
                >
                  -20% (£12.20)
                </div>
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
                    width: '80%',
                  }}
                >
                  Delivery Fee
                </div>
                <div style={{ width: '20%' }} className="d-flex justify-content-end">
                  £1.2
                </div>
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
                    width: '80%',
                  }}
                >
                  Total
                </div>
                <div style={{ width: '20%' }} className="d-flex justify-content-end">
                  £91
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>

          <hr className="mt-5" />

          <div className="mt-5 text-center">
            <div
              style={{
                fontWeight: 400,
                fontSize: 14,
                lineHeight: '20px',
                color: '#3F3F46',
              }}
            >
              Have Problem your order ? Contact our{' '}
              <a href="#/" style={{ textDecoration: 'none' }}>
                {' '}
                Customer Support
              </a>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default React.memo(JConfirmDesktop);
