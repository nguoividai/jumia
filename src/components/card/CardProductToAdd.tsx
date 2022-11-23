import React from 'react';
import ButtonQuantity from '../button/ButtonQuantity';

type CardProductToAddProps = {
  src?: string;
  title?: string;
  description?: string;
  price?: number;
  likeNumber?: number;
  type?: 'vertical' | 'horizontal';
};

const CardProductToAdd: React.FC<CardProductToAddProps> = (props) => {
  const { src, title, description, price, type } = props;
  return type === 'vertical' ? (
    <div className="card-product card-product-to-add-horizontal">
      <div className="product-content">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
      </div>
      <div className="product-image">
        <img src={src} alt="product" />
      </div>
      <div className="product-action">
        <div className="product-action--price">€ {price}</div>
        <div className="product-action--button">
          <ButtonQuantity />
        </div>
      </div>
    </div>
  ) : (
    <div className="card-product card-product-to-add">
      <div className="product-image">
        <img src={src} alt="product" />
      </div>
      <div className="product-text">
        <div className="text-title">
          {title}
          <span className="icon float-right text-center">
            <i className="d-block icofont-heart"></i>
            12
          </span>
          <div className="text-description">{description}</div>
        </div>

        <div className="text-review">
          <div className="text-price">Start from € {price}</div>
        </div>
        <div className="action">
          <ButtonQuantity />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardProductToAdd);
