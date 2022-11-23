import React from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';
import ListCart from 'src/components/list/ListCart';
import Switch from 'src/components/switch/Switch';
import CheckoutTotal from './CheckoutTotal';
import ListVoucherMobile from './ListVoucherMobile';

const OrderSummaryMobile = () => {
  return (
    <>
      <div className="delivery-title mt-5">
        <i className="icofont-shopping-cart primary"></i>
        Order summary
      </div>
      <ListCart />
    </>
  );
};

export default React.memo(OrderSummaryMobile);
