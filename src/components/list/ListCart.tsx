import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import ButtonQuantity from '../button/ButtonQuantity';

const ListCart = () => {
  return (
    <>
      {/* <Button className="mt-2 back-btn">
        <i className="icofont-rounded-left"></i>
      </Button> */}
      <div className="total-cart">10 Items</div>
      <ListGroup className="list-cart" variant="flush">
        {[...Array(10)].map((e, idx) => (
          <ListGroup.Item key={idx} className="list-cart-item">
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
        ))}
      </ListGroup>
    </>
  );
};

export default React.memo(ListCart);
