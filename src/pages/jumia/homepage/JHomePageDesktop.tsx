import React from 'react';
import CallAction from 'src/components/banner/CallAction';
import Button from 'src/components/button/Button';
import B2CCriteria from 'src/pages/b2c/B2CCriteria';
import B2CMainBannerDesktop from 'src/pages/b2c/B2CMainBannerDesktop';
import JMostWantedFoodsDesktop from './JMostWantedFoodsDesktop';
import JPromotionListDesktop from './JPromotionListDesktop';
import pizza from 'src/assets/images/jumia/pizza-bg.jpg';
import { useNavigate } from 'react-router-dom';

const JHomePageDesktop = () => {
  const navigate = useNavigate();

  return (
    <>
      <B2CMainBannerDesktop />

      <div className="mt-4">
        <B2CCriteria />
      </div>
      <div className="d-none d-md-block d-lg-block d-xl-block mt-4">
        <JPromotionListDesktop />
      </div>
      <div className="d-none d-md-block d-lg-block d-xl-block mt-4">
        <JMostWantedFoodsDesktop />
      </div>

      <CallAction
        className="d-none d-md-flex d-lg-flex d-xl-flex mt-4 m-4"
        src={pizza}
        heading="Order in KFC Restourant"
        description="  Order in KFC Restourant and Order in KFC Restou"
        action={
          <>
            <Button
              style={{ width: '100%' }}
              color="primary"
              shape="normal"
              size="md"
              onClick={() => navigate('/menu')}
            >
              Order Delivery
            </Button>

            <Button
              style={{ width: '100%' }}
              color="dark"
              shape="normal"
              size="md"
              onClick={() => navigate('/menu')}
            >
              Order Delivery
            </Button>
          </>
        }
      />
    </>
  );
};

export default React.memo(JHomePageDesktop);
