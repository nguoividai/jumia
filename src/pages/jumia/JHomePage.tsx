import React from 'react';
import Button from 'src/components/button/Button';
import B2CMainBanner from '../b2c/B2CMainBanner';
import B2CCriteria from '../b2c/B2CCriteria';
import B2CPromotionList from '../b2c/B2CPromotionList';
import B2CMostFoodList from '../b2c/B2CMostFoodList';
import B2CCustomerReviewList from '../b2c/B2CCustomerReviewList';

const JHomePage = () => {
  return (
    <>
      <div>
        <B2CMainBanner />

        <B2CCriteria />

        <B2CPromotionList />

        <div
          className="text-center"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <Button color="primary" shape="normal" size="md">
            Order Delivery
          </Button>
          <Button color="white" shape="normal" size="md">
            Order Delivery
          </Button>
        </div>

        <B2CMostFoodList />

        <B2CCustomerReviewList />
      </div>
    </>
  );
};

export default React.memo(JHomePage);
