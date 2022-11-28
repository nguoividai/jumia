import React from 'react';
import { Nav } from 'react-bootstrap';
import Alert from 'src/components/alert/Alert';
import B2CPromotionList from 'src/pages/b2c/B2CPromotionList';
import JPromotionListDesktop from '../homepage/JPromotionListDesktop';
import JCartListDesktop from './JCartListDesktop';
import JCartListEmptyDesktop from './JCartListEmptyDesktop';
import JTab from './JTab';

const MenuDesktop = () => {
  return (
    <>
      <JPromotionListDesktop />
      <div className="container mt-4">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                <Alert color="primary" />
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div className="container mt-4 pb-4">
        <div className="row">
          <div className="col-8">
            <JTab />
          </div>
          <div className="col-4">
            <JCartListDesktop />
            <JCartListEmptyDesktop />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MenuDesktop);
