import React from 'react';
import box from 'src/assets/images/jumia/icons/box.svg';

type CardDeliveryTimeProps = {
  icon?: React.ReactNode;
  time?: string;
};

const CardDeliveryTime: React.FC<CardDeliveryTimeProps> = (props) => {
  const { icon, time } = props;
  return (
    <div className="card-delivery-time">
      <div className="icon">
        <img src={box} alt="box-icon" style={{ width: 25 }} />
      </div>
      <div className="time" style={{ fontSize: '0.9rem' }}>
        Estimated Delivery{' '}
        <strong
          style={{
            color: 'var(--app-color-primary-orange)',
          }}
        >
          {time}
        </strong>
      </div>
    </div>
  );
};

export default React.memo(CardDeliveryTime);
