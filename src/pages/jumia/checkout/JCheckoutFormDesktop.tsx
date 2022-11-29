import React from 'react';
import { Badge, Form, InputGroup } from 'react-bootstrap';
import Button from 'src/components/button/Button';
import CashIcon from 'src/components/icon/CashIcon';
import PaymentIcon from 'src/components/icon/PaymentIcon';
import ShoppingBagDelivery from 'src/components/icon/ShoppingBagDelivery';
import TruckDeliveryIcon from 'src/components/icon/TruckDeliveryIcon';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import ConfirmAddressForm from 'src/pages/components/ConfirmAddressForm';
import JConfirmAddress from '../mobile/JConfirmAddress';

const JCheckoutFormDesktop = () => {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-12 d-flex align-items-center gap-2">
          <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.21875 0.625C1.92433 0.625 0.875 1.67433 0.875 2.96875V11.875H15.875V2.96875C15.875 1.67433 14.8257 0.625 13.5312 0.625H3.21875Z"
              fill="#18181B"
            />
            <path
              d="M15.875 13.75H0.875V17.0312C0.875 18.3257 1.92433 19.375 3.21875 19.375H3.6875C3.6875 17.3039 5.36643 15.625 7.4375 15.625C9.50857 15.625 11.1875 17.3039 11.1875 19.375H14.9375C15.4553 19.375 15.875 18.9553 15.875 18.4375V13.75Z"
              fill="#18181B"
            />
            <path
              d="M9.3125 19.375C9.3125 18.3395 8.47303 17.5 7.4375 17.5C6.40197 17.5 5.5625 18.3395 5.5625 19.375C5.5625 20.4105 6.40197 21.25 7.4375 21.25C8.47303 21.25 9.3125 20.4105 9.3125 19.375Z"
              fill="#18181B"
            />
            <path
              d="M18.6875 3.4375C18.1697 3.4375 17.75 3.85723 17.75 4.375V18.4375C17.75 18.546 17.7684 18.6502 17.8023 18.7471C18.1011 16.975 19.6429 15.625 21.5 15.625C23.5552 15.625 25.2243 17.2783 25.2497 19.3275C26.3164 19.1087 27.153 18.1583 27.08 16.9743C26.7888 12.2488 25.0969 7.90127 22.4155 4.34362C21.9725 3.75578 21.2832 3.4375 20.5776 3.4375H18.6875Z"
              fill="#18181B"
            />
            <path
              d="M23.375 19.375C23.375 18.3395 22.5355 17.5 21.5 17.5C20.4645 17.5 19.625 18.3395 19.625 19.375C19.625 20.4105 20.4645 21.25 21.5 21.25C22.5355 21.25 23.375 20.4105 23.375 19.375Z"
              fill="#18181B"
            />
          </svg>

          <span
            style={{
              marginLeft: 10,
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '36px',
              color: '#18181B',
            }}
          >
            Delivery
          </span>
        </div>
      </div>

      <div
        style={{
          marginTop: '3rem',
          fontWeight: 700,
          fontSize: '20px',
          lineHeight: '28px',
          color: '#18181B',
        }}
      >
        Shiping method
      </div>

      <div className="d-flex align-items-center gap-3 mt-5">
        <div className="icon">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.364 15.3639L9 21.7279L2.636 15.3639C1.37734 14.1052 0.520187 12.5016 0.172928 10.7558C-0.17433 9.00995 0.00390685 7.20035 0.685099 5.55582C1.36629 3.91129 2.51984 2.50569 3.99988 1.51677C5.47992 0.527838 7.21998 0 9 0C10.78 0 12.5201 0.527838 14.0001 1.51677C15.4802 2.50569 16.6337 3.91129 17.3149 5.55582C17.9961 7.20035 18.1743 9.00995 17.8271 10.7558C17.4798 12.5016 16.6227 14.1052 15.364 15.3639ZM9 12.9999C10.0609 12.9999 11.0783 12.5785 11.8284 11.8283C12.5786 11.0782 13 10.0608 13 8.99992C13 7.93906 12.5786 6.92164 11.8284 6.17149C11.0783 5.42135 10.0609 4.99992 9 4.99992C7.93914 4.99992 6.92172 5.42135 6.17158 6.17149C5.42143 6.92164 5 7.93906 5 8.99992C5 10.0608 5.42143 11.0782 6.17158 11.8283C6.92172 12.5785 7.93914 12.9999 9 12.9999ZM9 10.9999C8.46957 10.9999 7.96086 10.7892 7.58579 10.4141C7.21072 10.0391 7 9.53035 7 8.99992C7 8.46949 7.21072 7.96078 7.58579 7.58571C7.96086 7.21064 8.46957 6.99992 9 6.99992C9.53044 6.99992 10.0391 7.21064 10.4142 7.58571C10.7893 7.96078 11 8.46949 11 8.99992C11 9.53035 10.7893 10.0391 10.4142 10.4141C10.0391 10.7892 9.53044 10.9999 9 10.9999Z"
              fill="#262626"
            />
          </svg>
        </div>
        <div style={{ width: '95%' }} className="content">
          <div
            className="jumia-size"
            style={{
              fontWeight: 500,
              fontSize: '18px',
              lineHeight: '24px',
              color: '#262626',
            }}
          >
            Delivery address
            <ModalOverPage
              fullscreen="sm-down"
              centered
              title="Confirm Address?"
              trigger={
                <Badge className="light float-right" style={{ cursor: 'pointer' }}>
                  {' '}
                  Edit{' '}
                </Badge>
              }
            >
              <ConfirmAddressForm />
              <div className="mt-4">
                <Button style={{ width: '100%' }} color="primary">
                  Confirm
                </Button>
              </div>
            </ModalOverPage>
          </div>
          <div
            style={{
              marginTop: 5,
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '22px',
              color: '#A1A1AA',
            }}
          >
            140 Laurie Meadows Drive , san Mantero CA, US, 93304
          </div>
        </div>
      </div>

      <div className="gap-2 mt-5 form-mobile">
        <div
          className="jumia-size"
          style={{
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#262626',
          }}
        >
          Delivery Time
        </div>
        <div
          className="mt-2"
          style={{
            width: 300,
          }}
        >
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <i className="icofont-clock-time"></i>
            </InputGroup.Text>
            <Form.Select
              size="lg"
              style={{
                height: 45,
              }}
            >
              <option>-Select Delivery Time-</option>
              <option value="12:00 - 02:00">12:00 - 02:00</option>
              <option value="12:00 - 02:00">02:00 - 04:00</option>
              <option value="12:00 - 02:00">06:00 - 08:00</option>
            </Form.Select>
          </InputGroup>
        </div>

        <hr className="mt-4" />

        <div className="gap-2 mt-3 form-mobile">
          <div
            className="jumia-size"
            style={{
              marginTop: '3rem',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#18181B',
            }}
          >
            Payment method
          </div>

          <div className="mt-3 d-flex gap-2">
            <Button color="outline-dark">
              <PaymentIcon width={28} />
              <span className="m-2"> Pay With Cash</span>
            </Button>
            <Button color="outline-dark">
              <CashIcon width={28} />
              <span className="m-2">Cash</span>
            </Button>
          </div>
        </div>

        <hr className="mt-4" />

        <div className="gap-2 mt-3 form-mobile">
          <div
            className="d-flex align-items-center gap-2"
            style={{
              marginTop: '3rem',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px',
              color: '#18181B',
            }}
          >
            <div className="d-flex gap-2 align-items-center" style={{ width: '95%' }}>
              <ShoppingBagDelivery />
              Order Summary
              <div
                style={{
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '22px',
                  color: '#A1A1AA',
                }}
              >
                (2 Items)
              </div>
            </div>
            <i className="icofont-simple-down float-right"></i>
          </div>
        </div>

        <hr className="mt-4" />

        <div
          className="jumia-size"
          style={{
            fontWeight: 500,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#262626',
          }}
        >
          Add Note
        </div>
        <div className="mt-2">
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="add comment"
            rows={5}
          />
        </div>

        <div className="d-flex gap-2 align-items-center mt-4">
          <div>
            <Form.Check className="check-term" type="checkbox" name="payment" />
          </div>

          <div
            className="mt-1"
            style={{
              width: '95%',
              fontSize: '12px',
              lineHeight: '18px',
              color: '#71717A',
            }}
          >
            <strong>Terms:</strong>&nbsp; By placing your order, you confirm that you agree to the
            &nbsp;
            <a className="primary" href="#/" onClick={(e) => e.preventDefault()}>
              User Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(JCheckoutFormDesktop);
