import React from 'react';
import Alert from 'src/components/alert/Alert';
import MenuTab from 'src/components/list/MenuTab';
import Section from 'src/components/section/Section';
import shopping from 'src/assets/images/jumia/icons/shopping.svg';
import truck from 'src/assets/images/jumia/icons/truck.svg';
import B2CPromotionList from '../b2c/B2CPromotionList';
import ProductTab from 'src/components/list/ProductTab';
import hamburger from 'src/assets/images/jumia/hamburger.png';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import B2CTabFooterMobile from '../b2c/B2CTabFooterMobile';
import VoucherListMobile from '../b2c/B2CVoucherListMobile';
import JRecommendMobile from './mobile/JRecommendMobile';
import ProductWithPopup from '../components/ProductWithPopup';
import JCheckoutMobile from './mobile/JCheckoutMobile';
import TabTitle from '../components/TabTitle';

const tabs = [
  {
    key: '1',
    src: hamburger,
    title: 'Burger 1',
    children: (
      <>
        <ProductWithPopup
          trigger={
            <CardProductToAdd
              src={hamburger}
              title="Peperoni Pizza"
              description="Hot beef with fry"
              price={30}
              type="horizontal"
            />
          }
        />
        <ProductWithPopup
          trigger={
            <CardProductToAdd
              src={hamburger}
              title="Peperoni Pizza"
              description="Hot beef with fry"
              price={30}
              type="horizontal"
            />
          }
        />
        <ProductWithPopup
          trigger={
            <CardProductToAdd
              src={hamburger}
              title="Peperoni Pizza"
              description="Hot beef with fry"
              price={30}
              type="horizontal"
            />
          }
        />
        <ProductWithPopup
          trigger={
            <CardProductToAdd
              src={hamburger}
              title="Peperoni Pizza"
              description="Hot beef with fry"
              price={30}
              type="horizontal"
            />
          }
        />
      </>
    ),
  },
  {
    key: '2',
    src: hamburger,
    title: 'Burger 2',
    children: <>Burger 2</>,
  },
  {
    key: '3',
    src: hamburger,
    title: 'Burger 3',
    children: <>Burger 3</>,
  },
  {
    key: '4',
    src: hamburger,
    title: 'Burger 4',
    children: <>Burger 4</>,
  },
  {
    key: '5',
    src: hamburger,
    title: 'Burger 5',
    children: <>Burger 5</>,
  },
];

const JCheckout = () => {
  return (
    <>
      <Section
        title={
          <div className="row align-items-center">
            <div className="col-6">Check Out</div>
            <div className="col-6 d-flex justify-content-end">
              <TabTitle />
            </div>
          </div>
        }
      >
        <JCheckoutMobile />
      </Section>
    </>
  );
};

export default React.memo(JCheckout);
