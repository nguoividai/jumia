import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import addVoucher from 'src/assets/images/jumia/icons/add-voucher.svg';
import voucherAvailable from 'src/assets/images/jumia/icons/voucher-available.svg';
import Button from 'src/components/button/Button';
import JAddVoucher from '../jumia/mobile/JAddVoucher';
import ReedemVoucherList from './ReedemVoucherList';

const ListVoucherMobile = () => {
  return (
    <>
      <ListGroup
        style={{
          borderTop: '1px dashed #E5E7EB',
        }}
        variant="flush"
      >
        <JAddVoucher
          style={{ height: '20vh' }}
          trigger={
            <ListGroup.Item style={{ gap: 10 }} className="d-flex align-items-center border-0">
              <img
                src={addVoucher}
                alt="img"
                style={{
                  width: '20%',
                  maxWidth: 30,
                }}
              />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#F4894A',
                }}
              >
                <i className="icofont-plus"></i> Add Vouchers
              </span>
            </ListGroup.Item>
          }
        >
          <Form.Control type="text" placeholder="Enter your voucher" />

          <Button
            style={{
              borderRadius: 0,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 50,
            }}
            color="primary"
          >
            Submit
          </Button>
        </JAddVoucher>

        <JAddVoucher
          style={{ height: '80vh' }}
          trigger={
            <ListGroup.Item style={{ gap: 10 }} className="d-flex align-items-center border-0">
              <img
                src={voucherAvailable}
                alt="img"
                style={{
                  width: '20%',
                  maxWidth: 30,
                }}
              />
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 12,
                  lineHeight: '18px',
                  color: '#64748B',
                  width: '80%',
                }}
              >
                Choose from 23 vouchers available
                <i
                  style={{
                    position: 'absolute',
                    right: '5%',
                    top: '40%',
                  }}
                  className="icofont-rounded-right"
                ></i>
              </span>
            </ListGroup.Item>
          }
        >
          <ReedemVoucherList />
        </JAddVoucher>
      </ListGroup>
    </>
  );
};

export default React.memo(ListVoucherMobile);
