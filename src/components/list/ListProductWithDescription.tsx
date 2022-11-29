import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import ButtonQuantity from '../button/ButtonQuantity';
import HeartIcon from '../icon/HeartIcon';
import ModalChooseProduct from '../modal/ModalChooseProduct';

const ListProductWithDescription = () => {
  return (
    <>
      <ListGroup className="list-product-with-description" variant="flush">
        {[...Array(5)].map((e, idx) => (
          <ListGroup.Item key={idx}>
            <div className="row">
              <div className="col-9">
                <ModalChooseProduct
                  trigger={
                    <div style={{ cursor: 'pointer' }} className="product-title">
                      American Cheese Supreme - Veg
                    </div>
                  }
                />
                <div className="product-extra">
                  <span> Start from €30 </span>
                  <span>
                    <Badge className="badge-discount">30% OFF </Badge>
                  </span>
                </div>
                <div className="product-description">
                  A burger with crispy corn and cheese patty covered with a slice of cheese, creamy
                  cocktail sauce, jalapeos and shredded onions.
                </div>
              </div>
              <div className="col-3">
                <div className="mb-2 heart-checkbox">
                  <HeartIcon type="horizontal" total={1000} unit="LIKE" />
                </div>
                <img
                  className="img-product"
                  src={require('src/assets/images/jumia/burger-product.jpg')}
                  alt="img"
                />
                <ButtonQuantity
                  textZero="ADD"
                  style={{
                    marginTop: '-1rem',
                    maxWidth: 125,
                  }}
                />
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default React.memo(ListProductWithDescription);
