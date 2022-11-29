import React from 'react';
import TruckDeliveryIcon from 'src/components/icon/TruckDeliveryIcon';
import Section from 'src/components/section/Section';
import JPromotionListDesktop from '../homepage/JPromotionListDesktop';
import JCheckoutFormDesktop from './JCheckoutFormDesktop';
import JCheckoutTotalDesktop from './JCheckoutTotalDesktop';

const JCheckoutDesktop = () => {
  return (
    <>
      <JPromotionListDesktop />

      <Section style={{ padding: '2rem' }}>
        <div className="row">
          <div className="col-12 col-md-8">
            <JCheckoutFormDesktop />
          </div>
          <div className="col-12 col-md-4">
            <JCheckoutTotalDesktop />
          </div>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JCheckoutDesktop);
