import React from 'react';

export interface OrderPriceItem {
  label?: string;
  price?: string;
  type?: 'subtotal' | 'discount' | 'deliveryFee' | 'total';
}

type OrderPriceContainerProps = {
  listPrice: OrderPriceItem[];
};

const OrderPriceContainer: React.FC<OrderPriceContainerProps> = (props) => {
  const { listPrice } = props;
  return (
    <div className="order-price-container">
      {listPrice &&
        listPrice.map((item) => (
          <div className={`order-price-item ${item.type}`} key={item.label}>
            <div className="order-price-label">{item.label}</div>
            <div className="order-price-price">{item.price}</div>
          </div>
        ))}
    </div>
  );
};

export default OrderPriceContainer;
