import React from 'react';
import Button from 'src/components/button/Button';
import B2CMainBanner from '../b2c/B2CMainBannerDesktop';
import B2CCriteria from '../b2c/B2CCriteria';
import B2CPromotionList from '../b2c/B2CPromotionList';
import B2CMostFoodList from '../b2c/B2CMostFoodList';
import B2CCustomerReviewList from '../b2c/B2CCustomerReviewList';
import B2CMainBannerDesktop from '../b2c/B2CMainBannerDesktop';
import B2CMainBannerMobile from '../b2c/B2CMainBannerMobile';
import CallAction from 'src/components/banner/CallAction';
import pizza from 'src/assets/images/jumia/pizza-bg.jpg';
import { useNavigate } from 'react-router-dom';
import JPromotionListDesktop from './homepage/JPromotionListDesktop';
import JMostWantedFoodsDesktop from './homepage/JMostWantedFoodsDesktop';

const JHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <B2CMainBannerDesktop />

        <B2CMainBannerMobile />

        <div className="mt-4">
          <B2CCriteria />
        </div>

        <div className="d-none d-sm-block d-md-none mt-4">
          <B2CPromotionList />
        </div>

        <div className="d-none d-md-block d-lg-block d-xl-block mt-4">
          <JPromotionListDesktop />
        </div>

        <div className="d-none d-sm-block d-md-none mt-4">
          <B2CMostFoodList />
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

        <div className="mt-4">
          <B2CCustomerReviewList />
        </div>
      </div>
    </>
  );
};

export default React.memo(JHomePage);
