import React from 'react';
import { ListGroup } from 'react-bootstrap';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import ButtonQuantity from '../button/ButtonQuantity';

const ListCart = () => {
  return (
    <>
      <ListGroup className="list-cart" variant="flush">
        <ListGroup.Item className="list-cart-item">
          <div className="list-cart-item--image">
            <img src={pizza} alt="product" />
          </div>
          <div className="list-cart-item--content">
            <div className="list-item--title">
              Pizza Seafood Marinara
              <span className="price">£3.22</span>
            </div>
            <div className="list-item--extra">hot feature</div>
            <div className="list-item--action">
              <ButtonQuantity />
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="list-cart-item">
          <div className="list-cart-item--image">
            <img src={pizza} alt="product" />
          </div>
          <div className="list-cart-item--content">
            <div className="list-item--title">
              Pizza Seafood Marinara
              <span className="price">£3.22</span>
            </div>
            <div className="list-item--extra">hot feature</div>
            <div className="list-item--action">
              <ButtonQuantity />
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="list-cart-item">
          <div className="list-cart-item--image">
            <img src={pizza} alt="product" />
          </div>
          <div className="list-cart-item--content">
            <div className="list-item--title">
              Pizza Seafood Marinara
              <span className="price">£3.22</span>
            </div>
            <div className="list-item--extra">hot feature</div>
            <div className="list-item--action">
              <ButtonQuantity />
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default React.memo(ListCart);
