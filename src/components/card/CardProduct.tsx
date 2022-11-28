import React from 'react';

type CardProductProps = {
  src?: string;
  title?: string;
  description?: string;
  price?: number;
  likeNumber?: number;
  style?: React.CSSProperties;
};

const CardProduct: React.FC<CardProductProps> = (props) => {
  const { src, title, description, price, likeNumber, style } = props;
  return (
    <div style={style} className="card-product">
      <div className="product-text">
        <div className="text-title">{title}</div>
        <div className="text-description">{description}</div>
        <div className="text-review">
          <div className="text-price">€ {price}</div>
          <div className="text-like">
            <i className="icofont-heart"></i>
            <span>{likeNumber} LIKES</span>
          </div>
        </div>
      </div>
      <div className="product-image">
        <img src={src} alt="product" />
      </div>
    </div>
  );
};

export default React.memo(CardProduct);
