import React from 'react';
import CardPromotion from 'src/components/card/CardPromotion';
import CardVoucher from 'src/components/card/CardVoucher';
import SliderSimple from 'src/components/slider/SliderSimple';

const VoucherListMobile = () => {
  return (
    <>
      <SliderSimple
        className="container p-0"
        settings={{
          speed: 500,
          autoplay: false,
          autoplaySpeed: 5000,
          infinite: true,
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '30px',
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '50px',
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '90px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100px',
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                centerMode: true,
                centerPadding: '30px',
              },
            },
          ],
        }}
      >
        <CardPromotion
          title="Free"
          name="garlic Pizza"
          conditionText="When you order 20$ or over"
          direction="horizontal"
        />
        <CardPromotion
          title="Free"
          name="garlic Pizza"
          conditionText="When you order 20$ or over"
          direction="horizontal"
        />
        <CardPromotion
          title="Free"
          name="garlic Pizza"
          conditionText="When you order 20$ or over"
          direction="horizontal"
        />
      </SliderSimple>
    </>
  );
};

export default React.memo(VoucherListMobile);
