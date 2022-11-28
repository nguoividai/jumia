import React from 'react';
import ButtonQuantity from '../button/ButtonQuantity';
import HeartIcon from '../icon/HeartIcon';

export type CardProductToAddProps = {
  src?: string;
  title?: string;
  description?: string;
  price?: number;
  likeNumber?: number;
  type?: 'vertical' | 'horizontal';
  shadow?: boolean;
  style?: React.CSSProperties;
  layout?: 'title-first' | 'img-first';
};

const CardProductToAdd: React.FC<CardProductToAddProps> = (props) => {
  const { src, title, description, price, type, shadow, style, layout } = props;
  return type === 'vertical' ? (
    <div
      style={style}
      className={'card-product card-product-to-add-horizontal' + (shadow ? ' box-shadow' : '')}
    >
      <div className="product-content">
        {layout === 'img-first' && (
          <>
            <div className="product-image">
              <img src={src} alt="product" />
              <HeartIcon />
            </div>

            <div className="mt-3">
              <div className="product-title">{title}</div>
              <div className="product-description">{description}</div>
            </div>
          </>
        )}

        {!layout ||
          (layout === 'title-first' && (
            <>
              <div className="product-title">{title}</div>
              <div className="product-description">{description}</div>
              <div className="product-image">
                <img src={src} alt="product" />
              </div>
            </>
          ))}
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

          <HeartIcon />
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
