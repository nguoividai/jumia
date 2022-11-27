import React from 'react';
import SliderSimple from 'src/components/slider/SliderSimple';
import pizza from 'src/assets/images/jumia/pizza-crust.svg';
import ButtonGroupSelect from 'src/components/button/ButtonGroupSelect';
import { Button, Modal } from 'react-bootstrap';

type StepChooseCrustProps = {
  increaseStep?: () => void;
};

const crust = [
  {
    name: 'cheese',
    main: 'Cheese Stuffed',
    price: '$6.8',
  },
  {
    name: 'pan',
    main: 'Deep Pan',
    price: '$6.8',
  },
  {
    name: 'thin',
    main: 'Thin',
    price: '$6.8',
  },
];

const StepChooseCrust: React.FC<StepChooseCrustProps> = ({ increaseStep }) => {
  return (
    <>
      <div className="slide-container">
        <SliderSimple
          className="container slide-product"
          settings={{
            dots: false,
            swipe: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '70px',
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
          <img className="thumbnail" src={pizza} alt="product" />
          <img className="thumbnail" src={pizza} alt="product" />
          <img className="thumbnail" src={pizza} alt="product" />
        </SliderSimple>

        <div className="product-price mt-4">€6.80 </div>

        <div className="title-type">Select Crust</div>
        <div className="choose-item">
          <ButtonGroupSelect dataSelects={crust} active="cheese" />
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

export default React.memo(StepChooseCrust);
