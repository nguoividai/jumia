import React from 'react';
import iconVoucher from '../../assets/images/coupon-2.png';
import Button from '../button/Button';

type CardVoucherProps = {
  validDate?: string;
  title: string;
};

const CardVoucher: React.FC<CardVoucherProps> = (props) => {
  const { validDate, title } = props;
  return (
    <div className="card-voucher">
      <div className="left">
        <img src={iconVoucher} alt="voucher" />
        <div className="valid-date">valid until: {validDate}</div>
      </div>
      <div className="right">
        <div className="title">{title}</div>
        <div className="d-flex justify-content-center">
          <Button style={{ width: '100%' }} shape="normal" size="sm" color="grey">
            Redeem now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardVoucher);
