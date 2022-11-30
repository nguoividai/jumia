import React from 'react';
import CardPromotion from 'src/components/card/CardPromotion';
import CardPromotionCanCopy from 'src/components/card/CardPromotionCanCopy';
import SliderSimple from 'src/components/slider/SliderSimple';

const JPromotionListDesktop = () => {
  return (
    <>
      <SliderSimple
        className="show-arrow"
        settings={{
          speed: 500,
          autoplay: true,
          autoplaySpeed: 5000,
          infinite: true,
          dots: false,
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px',
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
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '15px',
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '30px',
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '40px',
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '50px',
              },
            },
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px',
              },
            },
          ],
        }}
      >
        {[...Array(10)].map((e, idx) => (
          <div key={idx}>
            <CardPromotionCanCopy
              title="FREE"
              name="Garlic Bread Pizza"
              conditionText="When you order £20 or over"
              code="AAA-98765-123"
            />
          </div>
        ))}
      </SliderSimple>
    </>
  );
};

export default React.memo(JPromotionListDesktop);
