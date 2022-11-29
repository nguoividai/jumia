import React from 'react';
import { Form } from 'react-bootstrap';
import CardDeliveryTime from 'src/components/card/CardDeliveryTime';
import B2CTabFooterMobile from 'src/pages/b2c/B2CTabFooterMobile';
import CheckoutTotal from 'src/pages/components/CheckoutTotal';
import JDeliveryConfirm from './JDeliveryConfirm';
import JHeaderConfirm from './JHeaderConfirm';
import JOrderList from './JOrderList';
import JStepper from './JStepper';

const JConfirmMobile = () => {
  return (
    <>
      <JHeaderConfirm />

      <div className="mt-3">
        <CardDeliveryTime icon={<i className="icofont-delivery-time"></i>} time="1 hourse 2 min" />
      </div>

      <div
        className="mt-3"
        style={{
          background: '#fff',
          padding: '0.5rem',
        }}
      >
        <JStepper />
      </div>

      <div
        className="mt-3 confirm-checkbox"
        style={{
          background: '#fff',
          padding: '0.5rem',
        }}
      >
        <Form.Check inline label="Notify on order status" name="group1" type="checkbox" />
      </div>

      <div
        className="mt-3 confirm-checkbox"
        style={{
          background: '#fff',
          padding: '0.5rem',
        }}
      >
        <JOrderList />
        <CheckoutTotal />
      </div>

      <div
        className="mt-3 confirm-checkbox"
        style={{
          background: '#fff',
          padding: '0.5rem',
        }}
      >
        <JDeliveryConfirm />
      </div>

      <div className="pt-5 pb-5 text-center">
        <div
          className="mt-3"
          style={{
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18px',
            color: '#000000',
          }}
        >
          Have problem with your order?
        </div>
        <div
          className="mt-3"
          style={{
            fontWeight: 700,
            fontSize: '12px',
            lineHeight: '18px',
            color: '#404040',
          }}
        >
          Contact restaurnt
        </div>
        <div
          className="mt-3"
          style={{
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18px',
            color: '#27272A',
          }}
        >
          0121 34566
        </div>
      </div>

      <B2CTabFooterMobile />
    </>
  );
};

export default React.memo(JConfirmMobile);
