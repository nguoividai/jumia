import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ButtonQuantity from '../button/ButtonQuantity';

const ListCartModifyQuantity = () => {
  return (
    <>
      <ListGroup
        className="list-cart-item-modify-quantity"
        variant="flush"
        onClick={(e) => e.preventDefault()}
      >
        <ListGroup.Item>
          <div className="list-cart-item--content">
            <div className="list-item--title">McSaver Chicken Strips (2 Pc)</div>
            <div className="list-item--extra">
              <div>Medium</div>
              <div>hot feature</div>
            </div>
            <div className="list-item--action">
              <div className="price">£45</div>
              <div className="button-area">
                <ButtonQuantity />
              </div>
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-cart-item--content">
            <div className="list-item--title">McSaver Chicken Strips (2 Pc)</div>
            <div className="list-item--extra">
              <div>Medium</div>
              <div>hot feature</div>
            </div>
            <div className="list-item--action">
              <div className="price">£45</div>
              <div className="button-area">
                <ButtonQuantity />
              </div>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default React.memo(ListCartModifyQuantity);
