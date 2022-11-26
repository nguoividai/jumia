import React from 'react';

export interface OrderInfomationItem {
  name?: string;
  information?: string;
}

type OrderInfomationProps = {
  orderInformations?: OrderInfomationItem[];
};

const OrderInfomation: React.FC<OrderInfomationProps> = (props) => {
  const { orderInformations } = props;
  return (
    <div className="order-information">
      {orderInformations &&
        orderInformations.map((item: OrderInfomationItem) => (
          <div className="order-information-item" key={item.name}>
            <div className="name">{item.name}</div>
            <div className="information">{item.information}</div>
          </div>
        ))}
    </div>
  );
};

export default OrderInfomation;
