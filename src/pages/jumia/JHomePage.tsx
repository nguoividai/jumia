import React from 'react';
import useWindowSize from 'src/hooks/useWindowSize';
import { MAX_SCREEN_MOBILE } from 'src/default/app.default';
import JHomPageMobile from './homepage/JHomePageMobile';
import JHomePageDesktop from './homepage/JHomePageDesktop';
import B2CCustomerReviewList from '../b2c/B2CCustomerReviewList';

const JHomePage = () => {
  const { width } = useWindowSize();

  return (
    <>
      <div>
        {width && width <= MAX_SCREEN_MOBILE && <JHomPageMobile />}

        {width && +width > MAX_SCREEN_MOBILE && <JHomePageDesktop />}

        <div className="mt-4">
          <B2CCustomerReviewList />
        </div>
      </div>
    </>
  );
};

export default React.memo(JHomePage);
