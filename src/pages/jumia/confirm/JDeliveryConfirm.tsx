import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import truck from 'src/assets/images/jumia/icons/truck.svg';
import clock from 'src/assets/images/jumia/icons/clock.svg';
import payment from 'src/assets/images/jumia/icons/payment.svg';

const JDeliveryConfirm = () => {
  return (
    <>
      <ListGroup className="list-delivery mt-3" variant="flush">
        <ListGroup.Item>
          <div className="list-delivery-title d-flex gap-2 align-items-center">
            <img src={truck} alt="icon" style={{ width: '10%', maxWidth: '18px' }} />
            <span className="confirm-name">Delivery to:</span>
          </div>
          <div className="list-delivery-extra">
            <div>140 Laurie Meadows Drive , san Mantero CA, US, 93304</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-delivery-title d-flex gap-2 align-items-center">
            <img src={clock} alt="icon" style={{ width: '10%', maxWidth: '18px' }} />
            <span className="confirm-name">Delivery Time:</span>
          </div>
          <div className="list-delivery-extra">
            <div>2022 julay 03 at 20:30 Pm</div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="list-delivery-title d-flex gap-2 align-items-center">
            <img src={payment} alt="icon" style={{ width: '10%', maxWidth: '18px' }} />
            <span className="confirm-name">Payment:</span>
          </div>
          <div className="list-delivery-extra">
            <div>Pay with Cash</div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default React.memo(JDeliveryConfirm);
