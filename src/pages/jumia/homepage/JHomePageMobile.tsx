import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/button/Button';
import B2CCriteria from 'src/pages/b2c/B2CCriteria';
import B2CMainBannerMobile from 'src/pages/b2c/B2CMainBannerMobile';
import B2CMostFoodList from 'src/pages/b2c/B2CMostFoodList';
import B2CPromotionList from 'src/pages/b2c/B2CPromotionList';

const JHomepageMobile = () => {
  const navigate = useNavigate();

  return (
    <>
      <B2CMainBannerMobile />

      <div className="mt-4">
        <B2CCriteria />
      </div>

      <div className="d-none d-sm-block d-md-block d-lg-none mt-4">
        <B2CPromotionList />
      </div>
      <div className="d-none d-sm-block d-md-block d-lg-none mt-4">
        <B2CMostFoodList />
      </div>
      <div
        className="d-flex d-md-none d-lg-none text-center"
        style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
      >
        <Button color="primary" shape="normal" size="md" onClick={() => navigate('/menu')}>
          Order Delivery
        </Button>
        <Button
          color="white"
          shape="normal"
          size="md"
          textColor="orange"
          onClick={() => navigate('/menu')}
        >
          Order Delivery
        </Button>
      </div>
    </>
  );
};

export default React.memo(JHomepageMobile);
