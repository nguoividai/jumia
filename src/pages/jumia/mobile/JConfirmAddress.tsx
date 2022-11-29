import React, { useState } from 'react';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import Section from 'src/components/section/Section';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import ButtonJumia from 'src/components/button/Button';
import { Button } from 'react-bootstrap';
import ConfirmAddressForm from 'src/pages/components/ConfirmAddressForm';

type JConfirmAddressProps = {
  trigger?: React.ReactNode;
};

const JConfirmAddress: React.FC<JConfirmAddressProps> = ({ trigger }) => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <ModalOverPage
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
        footer={
          <div>
            <ButtonJumia style={{ width: '100%' }} color="primary">
              Confirm
            </ButtonJumia>
          </div>
        }
      >
        <Button className="mt-2 back-btn" onClick={() => setVisible(false)}>
          <i className="icofont-rounded-left"></i>
        </Button>
        <div
          className="title"
          style={{
            fontWeight: 800,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#27272A',
          }}
        >
          Confirm Address
        </div>
        <ConfirmAddressForm />
      </ModalOverPage>
    </>
  );
};

export default React.memo(JConfirmAddress);
