import React from 'react';
import ButtonQuantity from '../button/ButtonQuantity';

type CardProductAddQuantityProps = {
  name?: string;
  description?: string;
  src?: string;
  price?: number;
  quantity?: number;
};

const CardProductAddQuantity: React.FC<CardProductAddQuantityProps> = (props) => {
  const { name, description, src, price, quantity } = props;
  return (
    <div className="card-product-add-quantity">
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="image">
        <img src={src} alt="product" />
      </div>
      <div className="footer">
        <div className="price">€ {price}</div>
        <ButtonQuantity />
      </div>
    </div>
  );
};

export default CardProductAddQuantity;
