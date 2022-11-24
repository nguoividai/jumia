import React, { useState } from 'react';
import ButtonJumia from 'src/components/button/Button';
import { Button, Form, OffcanvasProps } from 'react-bootstrap';
import ConfirmAddressForm from 'src/pages/components/ConfirmAddressForm';
import OffCanvasOverPage from 'src/components/modal/OffCanvasOverPage';

type JAddVoucherProps = {
  trigger?: React.ReactNode;
  children?: React.ReactNode;
} & OffcanvasProps;

const JAddVoucher: React.FC<JAddVoucherProps> = ({ trigger, children, ...restProps }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <OffCanvasOverPage
        {...restProps}
        title="Add voucher"
        trigger={
          <span
            onClick={(e) => {
              e.preventDefault();
              setVisible(true);
            }}
          >
            {trigger}
          </span>
        }
        visible={visible}
        onClose={() => setVisible(false)}
      >
        {children}
      </OffCanvasOverPage>
    </>
  );
};

export default React.memo(JAddVoucher);
