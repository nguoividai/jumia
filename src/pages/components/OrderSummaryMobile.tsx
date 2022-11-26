import React from 'react';
import ListCart from 'src/components/list/ListCart';

const OrderSummaryMobile = () => {
  return (
    <>
      <div className="delivery-title">
        <i className="icofont-shopping-cart primary"></i>
        Order summary
      </div>
      <ListCart />
    </>
  );
};

export default React.memo(OrderSummaryMobile);
