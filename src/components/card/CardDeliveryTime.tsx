import React from 'react';

type CardDeliveryTimeProps = {
  icon?: React.ReactNode;
  time?: string;
};

const CardDeliveryTime: React.FC<CardDeliveryTimeProps> = (props) => {
  const { icon, time } = props;
  return (
    <div className="card-delivery-time">
      <div className="icon">{icon}</div>
      <div className="time">
        Estimated Delivery <strong>{time}</strong>
      </div>
    </div>
  );
};

export default React.memo(CardDeliveryTime);
