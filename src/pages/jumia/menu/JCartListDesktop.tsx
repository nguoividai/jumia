import React from 'react';
import Button from 'src/components/button/Button';
import TrashIcon from 'src/components/icon/TrashIcon';
import ListCartModifyQuantity from 'src/components/list/ListCartModifyQuantity';
import Section from 'src/components/section/Section';
import JGroupButtonDelivery from '../desktop/JGroupButtonDelivery';

const JCartListDesktop = () => {
  return (
    <>
      <JGroupButtonDelivery />

      <Section
        style={{
          border: '1px solid #E2E8F0',
          borderRadius: '1rem',
        }}
        title="Cart"
        extra={
          <>
            <div className="d-flex">
              <div style={{ padding: 0 }} className="col-6">
                2 ITEMS
              </div>
              <div className="col-6 d-flex justify-content-end">
                <TrashIcon />
              </div>
            </div>
          </>
        }
      >
        <ListCartModifyQuantity />

        <div className="sub-total d-flex mt-4 mb-4">
          <div
            style={{
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: '22px',
              color: '#71717A',
            }}
            className="label col-6"
          >
            Subtotal
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              lineHeight: '22px',
              color: '#27272A',
            }}
            className="total d-flex col-6 justify-content-end"
          >
            £90
          </div>
        </div>
        <div className="mt-2 p-3">
          <Button
            style={{
              width: '100%',
              borderRadius: 6,
              padding: '0.75rem 1rem',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '24px',
            }}
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JCartListDesktop);
