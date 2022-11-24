import React from 'react';
import ButtonQuantity from '../button/ButtonQuantity';

export type CardProductToAddProps = {
  src?: string;
  title?: string;
  description?: string;
  price?: number;
  likeNumber?: number;
  type?: 'vertical' | 'horizontal';
  shadow?: boolean;
  style?: React.CSSProperties;
};

const CardProductToAdd: React.FC<CardProductToAddProps> = (props) => {
  const { src, title, description, price, type, shadow, style } = props;
  return type === 'vertical' ? (
    <div
      style={style}
      className={'card-product card-product-to-add-horizontal' + (shadow ? ' box-shadow' : '')}
    >
      <div className="product-content">
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
      </div>
      <div className="product-image">
        <img src={src} alt="product" />
      </div>
      <div className="product-action">
        <div className="product-action--price">
          <strong>€{price}</strong>
        </div>
        <div className="product-action--button" onClick={(e) => e.stopPropagation()}>
          <ButtonQuantity />
        </div>
      </div>
    </div>
  ) : (
    <div style={style} className="card-product card-product-to-add">
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
          <div className="text-price">
            Start from <strong>€{price}</strong>
          </div>
        </div>
        <div className="action" onClick={(e) => e.stopPropagation()}>
          <ButtonQuantity />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardProductToAdd);
