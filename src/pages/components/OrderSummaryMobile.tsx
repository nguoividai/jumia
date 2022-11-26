import React from 'react';
import ShoppingBagDelivery from 'src/components/icon/ShoppingBagDelivery';
import ListCart from 'src/components/list/ListCart';

const OrderSummaryMobile = () => {
  return (
    <>
      <div className="delivery-title d-flex gap-2">
        <ShoppingBagDelivery />
        Order summary
      </div>
      <ListCart />
    </>
  );
};

export default React.memo(OrderSummaryMobile);
