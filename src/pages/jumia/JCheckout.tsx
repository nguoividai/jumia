import React from 'react';
import JCheckoutMobile from './checkout/JCheckoutMobile';
import JCheckoutDesktop from './checkout/JCheckoutDesktop';

const JCheckout = () => {
  return (
    <>
      <div className="d-block d-md-none d-lg-none">
        <JCheckoutMobile />
      </div>

      <div className="d-none d-md-block d-lg-block d-xl-block">
        <JCheckoutDesktop />
      </div>
    </>
  );
};

export default React.memo(JCheckout);
