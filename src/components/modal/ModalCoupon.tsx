import React, { useState } from 'react';
import { Button, CloseButton, Modal } from 'react-bootstrap';

type ModalCouponProps = {
  name?: string;
  validDate?: string;
  description?: string;
  code?: string;
};

const ModalCoupon: React.FC<ModalCouponProps> = (props) => {
  const { name, validDate, description, code } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
              <button className="copy-button">
                <div>Copy</div>
                <img src={require('../../assets/images/copy.png')} alt="copy-icon" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalCoupon;
