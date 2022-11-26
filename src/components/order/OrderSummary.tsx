import React from 'react';

export interface OrderSummaryItem {
  name?: string;
  description?: string;
  size?: string;
  quantity?: number;
  price?: number;
  uid?: string;
}

type OrderSummaryProps = {
  listItem?: OrderSummaryItem[];
};

const OrderSummary: React.FC<OrderSummaryProps> = (props) => {
  const { listItem } = props;
  return (
    <div className="order-summary">
      {listItem &&
        listItem.map((item) => (
          <div className="order-summary-item" key={item.uid}>
            <div className="item-content-container">
              <div className="item-name">{item.name}</div>
              <div className="item-description">{item.description}</div>
              <div className="item-size">{item.size}</div>
            </div>
            <div className="item-quantity">{item.quantity}x</div>
            <div className="item-price">£{item.price}</div>
          </div>
        ))}
    </div>
  );
};

export default OrderSummary;
