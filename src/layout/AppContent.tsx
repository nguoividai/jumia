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
    </div>
  );
};

export default React.memo(AppContent);
