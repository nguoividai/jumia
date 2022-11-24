import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from 'src/components/button/Button';
import CardDescription from 'src/components/card/CardDescription';
import CardProduct from 'src/components/card/CardProduct';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import CardPromotion from 'src/components/card/CardPromotion';
import CardPromotionCanCopy from 'src/components/card/CardPromotionCanCopy';
import CardReview from 'src/components/card/CardReview';
import CardVoucher from 'src/components/card/CardVoucher';
import List from 'src/components/list/List';
import SliderSimple from 'src/components/slider/SliderSimple';
import ModalCoupon from './../components/modal/ModalCoupon';

const AppContent = () => {
  return (
    <div className="app-content">
      <Outlet />
      {/* <CardPromotion
        title="Free"
        name="garlic Pizza"
        conditionText="When you order 20$ or over"
        direction="horizontal"
      /> */}
      {/* <CardProductToAdd
        type="vertical"
        title="top"
        description="top123"
        price={30}
        src={require('../assets/images/jumia/hamburger.png')}
      /> */}
      <CardVoucher validDate="12/12/12" title="incentive for shoppingat "></CardVoucher>
      {/* <Button
        shape="normal"
        color="white"
        size="md"
        textColor="black"
        startIcon={<i className="icofont-bag"></i>}
      >
        Delivery
      </Button> */}
      {/* <CardPromotionCanCopy
        title="Free"
        name="Garlic bread pizza asd as das as asd asd asdasda s dasd asd asdas"
        conditionText="When you order $20 or over When you order $20 or over"
        code="AAA-98765-123"
      /> */}
      {/* <ModalCoupon
        name="voucher RM 10"
        description="incentive warehouse pahing for shoppingat at JUMIA"
        validDate="2022/12/05"
        code="FE CREDIT"
      /> */}
      {/* Slider */}
      {/* <SliderSimple>
        {Array.from(new Array(5)).map((item, index) => (
          <div className="w-full" key={index}>
            <img src={require('../assets/images/panorama.jpg')} alt="banner" />
          </div>
        ))}
      </SliderSimple> */}
      {/* Card */}
      {/* <List title="" layout="horizontal">
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
      </List> */}
      {/* Promotion */}
      {/* <CardPromotion
        title="20% off"
        name="all orders"
        conditionText="20$20$20$20$20$20$ 20$20$20$"
      />
      <Button color="primary" shape="normal" size="md">
        Order Delivery
      </Button>
      <Button color="white" shape="normal" size="md">
        Order Delivery
      </Button>
      <CardProduct
        src={require('../assets/images/panorama.jpg')}
        title="Order"
        description="Order description"
        price={30}
        likeNumber={90}
      ></CardProduct>
      <CardReview username="top" reviewText="Order" rate={1.5} /> */}
    </div>
  );
};

export default React.memo(AppContent);
