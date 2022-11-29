import React from 'react';
import Button from 'src/components/button/Button';
import ShoppingBagDelivery from 'src/components/icon/ShoppingBagDelivery';
import TruckDeliveryIcon from 'src/components/icon/TruckDeliveryIcon';

const JGroupButtonDelivery = () => {
  return (
    <>
      <div className="d-flex mt-2 mb-4 gap-2">
        <Button
          color="outline-dark"
          style={{
            width: '50%',
          }}
        >
          <span
            className="d-flex gap-1"
            style={{
              fontSize: '0.9rem',
            }}
          >
            <TruckDeliveryIcon />
            Collection
          </span>
        </Button>
        <Button
          color="outline-dark"
          style={{
            width: '50%',
          }}
        >
          <span
            className="d-flex gap-1"
            style={{
              fontSize: '0.9rem',
            }}
          >
            <ShoppingBagDelivery />
            Delivery
          </span>
        </Button>
      </div>
    </>
  );
};

export default React.memo(JGroupButtonDelivery);
