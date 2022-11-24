import React, { useState } from 'react';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import Section from 'src/components/section/Section';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import ButtonJumia from 'src/components/button/Button';
import { Button } from 'react-bootstrap';
import ListCart from 'src/components/list/ListCart';
import Badge from 'src/components/badge/Badge';
import { useNavigate } from 'react-router-dom';

type JCartMobileProps = {
  trigger?: React.ReactNode;
};

const JCartMobile: React.FC<JCartMobileProps> = ({ trigger }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <>
      <ModalOverPage
        trigger={
          <span
            onClick={(e) => {
              e?.preventDefault();
              setVisible(true);
            }}
          >
            {trigger}
          </span>
        }
        visible={visible}
        onClose={() => setVisible(false)}
        footer={
          <div className="d-block p-2">
            <div className="subtotal">
              Subtotal
              <span className="main-price">£11.20</span>
            </div>
            <div className="mt-2 mb-2">
              <ButtonJumia
                style={{ width: '100%' }}
                color="primary"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Go to Checkout
              </ButtonJumia>
            </div>
          </div>
        }
      >
        <Button className="mt-2 back-btn" onClick={() => setVisible(false)}>
          <i className="icofont-rounded-left"></i>
        </Button>
        <Section title="Cart">
          <ListCart />
        </Section>
      </ModalOverPage>
    </>
  );
};

export default React.memo(JCartMobile);
