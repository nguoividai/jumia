import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from 'src/components/button/Button';
import ButtonIcon from 'src/components/button/ButtonIcon';
import CardDeliveryTime from 'src/components/card/CardDeliveryTime';
import CardDescription from 'src/components/card/CardDescription';
import CardProduct from 'src/components/card/CardProduct';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import CardPromotion from 'src/components/card/CardPromotion';
import CardPromotionCanCopy from 'src/components/card/CardPromotionCanCopy';
import CardReview from 'src/components/card/CardReview';
import Checkbox from 'src/components/checkbox/Checkbox';
import List from 'src/components/list/List';
import OrderInfomation from 'src/components/order/OrderInfomation';
import OrderPriceContainer from 'src/components/order/OrderPriceContainer';
import OrderSummary from 'src/components/order/OrderSummary';
import SliderSimple from 'src/components/slider/SliderSimple';
import Stepper from 'src/components/stepper/Stepper';
import ModalCoupon from './../components/modal/ModalCoupon';

const AppContent = () => {
  return (
    <div className="app-content">
      <Outlet />
      {/* <ButtonIcon color="silver" shape="square" icon={<i className="icofont-clock-time"></i>} /> */}
      {/* <Stepper
        steps={[
          {
            label: 'Awaiting confirmation',
            icon: <i className="icofont-clock-time"></i>,
            active: true,
          },
          { label: 'In the Kitchen', icon: <i className="icofont-clock-time"></i>, active: false },
          { label: 'Delivering', icon: <i className="icofont-clock-time"></i>, active: false },
          { label: 'Delivered', icon: <i className="icofont-clock-time"></i>, active: false },
        ]}
      /> */}
      <CardDeliveryTime icon={<i className="icofont-delivery-time"></i>} time="1 hourse 2 min" />
      <Checkbox label="top" />
      <OrderInfomation
        orderInformations={[
          {
            name: 'Order Number',
            information: '#33651',
          },
          {
            name: 'Order Number',
            information: '#33651',
          },
          {
            name: 'Order Number',
            information: '#33651',
          },
          {
            name: 'Order Number',
            information: '#33651',
          },
        ]}
      />
      <OrderSummary
        listItem={[
          {
            uid: '1',
            name: 'McSaver Chicken Strips',
            description: 'hot feature',
            size: 'Medium',
            quantity: 2,
            price: 123,
          },
        ]}
      />
      <OrderPriceContainer listPrice={[{ label: 'total', price: '133', type: 'discount' }]} />
    </div>
  );
};

export default React.memo(AppContent);
