import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SavedBadge from 'src/components/badge/SavedBadge';

const CheckoutTotal = () => {
  return (
    <>
      <ListGroup variant="flush">
        <ListGroup.Item
          style={{
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '18px',
            color: '#A1A1AA',
            border: 0,
            borderTop: '1px dashed #E5E7EB',
          }}
        >
          <SavedBadge />
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '18px',
            color: '#A1A1AA',
            border: 0,
            // borderTop: '1px dashed #E5E7EB',
          }}
        >
          <span> Subtotal</span>
          <span className="float-right"> £8.20</span>
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '18px',
            color: '#A1A1AA',
            border: 0,
          }}
        >
          <span> Discount</span>
          <span className="float-right"> £2.20</span>
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            fontWeight: 700,
            fontSize: 12,
            lineHeight: '18px',
            color: '#A1A1AA',
            border: 0,
          }}
        >
          <span> Delivery Fee</span>
          <span className="float-right"> £1.20</span>
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '18px',
            color: '#27272A',
            borderTop: '1px dashed #E5E7EB',
          }}
        >
          <span> Total</span>
          <span className="float-right"> £11.20</span>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default React.memo(CheckoutTotal);
