import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import shopping from 'src/assets/images/jumia/icons/shopping-bag.svg';

const JOrderList = () => {
  return (
    <>
      <div className="d-flex gap-2 align-items-center">
        <img
          src={shopping}
          alt="icon"
          style={{
            width: 20,
          }}
        />
        <span
          style={{
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '20px',
            color: '#3F3F46',
            width: '80%',
          }}
        >
          Order Summary
        </span>
        <Badge bg="light" text="dark">
          3 items
        </Badge>
      </div>

      <ListGroup className="list-confirm mt-3" variant="flush">
        <ListGroup.Item>
          <div className="list-confirm-title d-flex gap-2 align-items-center">
            <Badge className="confirm-quantity" bg="light" text="dark">
              1x
            </Badge>
            <span className="confirm-name">Pizza Seafood Marinara</span>
            <span className="confirm-price">£3.22</span>
          </div>
          <div className="list-confirm-extra">
            <div>hot feature</div>
            <div>hot feature</div>
            <div>hot feature</div>
            <div>hot feature</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-confirm-title d-flex gap-2 align-items-center">
            <Badge className="confirm-quantity" bg="light" text="dark">
              2x
            </Badge>
            <span className="confirm-name">Pizza Seafood Marinara</span>
            <span className="confirm-price">£3.22</span>
          </div>
          <div className="list-confirm-extra">
            <div>hot feature</div>
            <div>hot feature</div>
            <div>hot feature</div>
            <div>hot feature</div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default React.memo(JOrderList);
