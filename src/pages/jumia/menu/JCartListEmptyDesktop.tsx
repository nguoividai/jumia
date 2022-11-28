import React from 'react';
import Section from 'src/components/section/Section';

const JCartListEmptyDesktop = () => {
  return (
    <>
      <Section
        style={{
          padding: '1rem',
          border: '1px solid #E2E8F0',
          borderRadius: '1rem',
          marginTop: '1rem',
        }}
      >
        <div className="text-center">
          <div className="empty-cart--image mb-4">
            <img
              style={{
                width: 150,
              }}
              src={require('src/assets/images/jumia/jumia-empty.png')}
              alt="empty cart"
            />
          </div>
          <div
            style={{
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              textAlign: 'center',
              color: '#71717A',
            }}
            className="empty-cart--description"
          >
            Your Cart is empty <br /> Add items get started
          </div>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JCartListEmptyDesktop);
