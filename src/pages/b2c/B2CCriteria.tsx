import React from 'react';
import CardDescription from 'src/components/card/CardDescription';
import CheckIcon from 'src/components/icon/CheckIcon';
import FlightIcon from 'src/components/icon/FlightIcon';
import PaymentIcon from 'src/components/icon/PaymentIcon';
import ShoppingBagDelivery from 'src/components/icon/ShoppingBagDelivery';
import SliderSimple from 'src/components/slider/SliderSimple';

const B2CCriteria = () => {
  return (
    <SliderSimple
      className="container"
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
            breakpoint: 414,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '60px',
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '20px',
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: '40px',
            },
          },
        ],
      }}
    >
      <div>
        <CardDescription
          icon={<FlightIcon width={20} style={{ transform: 'scale(3.5)' }} />}
          title="Fast Delivery"
          subTitle="Fastest Delivery in Birmingham"
        />
      </div>
      <div>
        <CardDescription
          icon={<PaymentIcon width={20} />}
          title="Card & Cash"
          subTitle="Pay by cash or card"
        />
      </div>
      <div>
        <CardDescription
          icon={<CheckIcon width={20} />}
          title="Mouth Watering"
          subTitle="Quality Food & Taste"
        />
      </div>
      <div>
        <CardDescription
          icon={<ShoppingBagDelivery width={20} />}
          title="Easy to order"
          subTitle="Fast and easy order process"
        />
      </div>
    </SliderSimple>
  );
};

export default React.memo(B2CCriteria);
