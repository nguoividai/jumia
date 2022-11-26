import React, { useState } from 'react';
import { Button, CloseButton, Modal } from 'react-bootstrap';
import ButtonCopy from '../button/ButtonCopy';

type ModalCouponProps = {
  name?: string;
  validDate?: string;
  description?: string;
  code?: string;
  trigger?: React.ReactNode;
};

const ModalCoupon: React.FC<ModalCouponProps> = (props) => {
  const { name, validDate, description, code, trigger } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>{trigger}</span>

      <Modal show={show} onHide={handleClose} centered>
        <div className="modal-coupon">
          <CloseButton onClick={handleClose} />
          <div className="header">
            <img src={require('../../assets/images/coupon-2.png')} alt="coupon-img" />
            <div className="name">{name}</div>
            <div className="valid-date">valid until: {validDate}</div>
          </div>
          <div className="body">
            <div className="description">{description}</div>
            <div className="coupon-wrap">
              <div className="code">{code}</div>
              <ButtonCopy text={code} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCoupon;
