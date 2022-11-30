import React from 'react';
import SliderSimple from 'src/components/slider/SliderSimple';
import pizza from 'src/assets/images/jumia/pizza-base.svg';
import ButtonGroupSelect from 'src/components/button/ButtonGroupSelect';
import { Button, Modal } from 'react-bootstrap';

type StepChooseBaseProps = {
  increaseStep?: () => void;
};

const base = [
  {
    name: 'bbq',
    main: 'BBQ',
    price: '$6.8',
  },
  {
    name: 'tomato',
    main: 'Tomato',
    price: '$6.8',
  },
  {
    name: 'garlic',
    main: 'Garlic',
    price: '$6.8',
  },
];

const StepChooseBase: React.FC<StepChooseBaseProps> = ({ increaseStep }) => {
  return (
    <>
      <div className="slide-container">
        <SliderSimple
          className="jumia-container slide-product"
          settings={{
            dots: false,
            swipe: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
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
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '120px',
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '150px',
                },
              },
            ],
          }}
        >
          <img className="thumbnail" src={pizza} alt="product" />
          <img className="thumbnail" src={pizza} alt="product" />
          <img className="thumbnail" src={pizza} alt="product" />
        </SliderSimple>

        <div className="product-price mt-4">€6.80 </div>

        <div className="title-type">Select Base</div>
        <div className="choose-item">
          <ButtonGroupSelect dataSelects={base} active="cheese" />
        </div>
      </div>
      <Modal.Footer
        style={{
          border: 0,
          boxShadow: 'none',
          paddingTop: '1rem',
        }}
      >
        <Button className="col-12 jumia-primary" onClick={increaseStep}>
          Next <i className="icofont-rounded-right"></i>
        </Button>
      </Modal.Footer>
    </>
  );
};

export default React.memo(StepChooseBase);
