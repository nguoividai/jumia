import React from 'react';
import MenuTab from 'src/components/list/MenuTab';
import shopping from 'src/assets/images/jumia/icons/shopping-bag.svg';
import account from 'src/assets/images/jumia/icons/account.svg';
import home from 'src/assets/images/jumia/icons/home.svg';
import Badge from 'src/components/badge/Badge';
import JCartMobile from '../jumia/mobile/JCartMobile.tsx';
import { useNavigate } from 'react-router-dom';

const B2CTabFooterMobile = () => {
  const navigate = useNavigate();

  return (
    <div className="tab-footer">
      <MenuTab type="horizontal">
        <MenuTab.Item name="home" onClick={() => navigate('/')}>
          <Badge number={0}>
            <img src={home} alt="icon" className="icon d-block mb-1 mx-auto" /> Home
          </Badge>
        </MenuTab.Item>
        <MenuTab.Item name="basket">
          <JCartMobile
            trigger={
              <Badge number={2}>
                <img src={shopping} alt="icon" className="icon d-block mb-1 mx-auto" /> Basket
              </Badge>
            }
          />
        </MenuTab.Item>

        <MenuTab.Item name="account">
          <Badge number={0}>
            <img src={account} alt="icon" className="icon d-block mb-1 mx-auto" /> Account
          </Badge>
        </MenuTab.Item>
      </MenuTab>
    </div>
  );
};

export default React.memo(B2CTabFooterMobile);
