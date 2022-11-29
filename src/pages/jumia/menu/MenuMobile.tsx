import React from 'react';
import ProductTab from 'src/components/list/ProductTab';
import Section from 'src/components/section/Section';
import B2CTabFooterMobile from 'src/pages/b2c/B2CTabFooterMobile';
import B2CVoucherListMobile from 'src/pages/b2c/B2CVoucherListMobile';
import TabTitle from 'src/pages/components/TabTitle';
import JRecommendMobile from '../mobile/JRecommendMobile';
import hamburger from 'src/assets/images/jumia/hamburger.png';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import ProductWithPopup from 'src/pages/components/ProductWithPopup';
import Alert from 'src/components/alert/Alert';

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

const MenuMobile = () => {
  return (
    <>
      <Section
        title={
          <div className="row align-items-center">
            <div className="col-6">Order Delivery</div>
            <div className="col-6 d-flex justify-content-end">
              <TabTitle />
            </div>
          </div>
        }
      >
        <Alert color="primary" />

        <B2CVoucherListMobile />

        <div className="text-right">
          <JRecommendMobile />
        </div>

        <ProductTab active="1" tabs={tabs}></ProductTab>

        <B2CTabFooterMobile />
      </Section>
    </>
  );
};

export default React.memo(MenuMobile);
