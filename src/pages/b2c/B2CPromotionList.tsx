import React from 'react';
import CardPromotion from 'src/components/card/CardPromotion';
import SliderSimple from 'src/components/slider/SliderSimple';

const B2CPromotionList = () => {
  return (
    <SliderSimple
      className="jumia-container"
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
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '40px',
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '70px',
            },
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '30px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '20px',
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '30px',
            },
          },
        ],
      }}
    >
      <div>
        <CardPromotion title="20%" smallTitle="OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20%" smallTitle="OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20%" smallTitle="OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20%" smallTitle="OFF" conditionText="When you order £20 or over" />
      </div>
      <div>
        <CardPromotion title="20%" smallTitle="OFF" conditionText="When you order £20 or over" />
      </div>
    </SliderSimple>
  );
};

export default React.memo(B2CPromotionList);
