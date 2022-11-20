import React from 'react';
import Button from '../components/button/Button';
import List from '../components/list/List';
import SocialLink from '../components/social/SocialLink';
import logo from 'src/assets/images/logo.png';

const AppFooter = () => {
  return (
    <div role="contentinfo" className="app-footer">
      <div className="row">
        <div className="col-12">
          <img src={logo} alt="logo" style={{ width: 125 }} />
          <p className="description-logo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum dolor, fermentum
            etiam nisl.
          </p>
        </div>
        <div className="col-12"></div>
      </div>
      <div className="footer-center">
        <ul className="list list-horizontal">
          <li className="list-item">Privacy Policy</li>
          <li className="list-item">Terms of Services</li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(AppFooter);
