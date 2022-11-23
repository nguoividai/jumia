import React from 'react';
import emptyCart from 'src/assets/images/jumia/empty-cart.svg';

const EmptyCart = () => {
  return (
    <>
      <div className="empty-cart">
        <img src={emptyCart} alt="empty-cart-logo" />
      </div>
    </>
  );
};

export default React.memo(EmptyCart);
