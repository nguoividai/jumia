import React from 'react';
import CardPromotion from 'src/components/card/CardPromotion';
import SliderSimple from 'src/components/slider/SliderSimple';

const B2CPromotionList = () => {
  return (
    <SliderSimple
      settings={{
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '15px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '120px',
            },
          },
        ],
      }}
    >
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20% OFF" conditionText="When you order £20 or over" />
      </div>
    </SliderSimple>
  );
};

export default React.memo(B2CPromotionList);
