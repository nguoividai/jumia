import React from 'react';
import SliderSimple from 'src/components/slider/SliderSimple';
import pizza from 'src/assets/images/jumia/pizza-vector.png';
import ButtonGroupSelect from 'src/components/button/ButtonGroupSelect';
import { Button, Modal } from 'react-bootstrap';

type StepChooseSizeProps = {
  increaseStep?: () => void;
};

const sizes = [
  {
    name: 'small',
    main: 'S',
    extra: '(12 inch)',
    price: '$6.8',
  },
  {
    name: 'medium',
    main: 'M',
    extra: '(12 inch)',
    price: '$6.8',
  },
  {
    name: 'large',
    main: 'L',
    extra: '(12 inch)',
    price: '$6.8',
  },
  {
    name: 'extra-large',
    main: 'XL',
    extra: '(12 inch)',
    price: '$6.8',
  },
];

const StepChooseSize: React.FC<StepChooseSizeProps> = ({ increaseStep }) => {
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

        <div className="step-item">
          <div className="title-type">Select Size</div>
          <div className="choose-item">
            <ButtonGroupSelect dataSelects={sizes} active="small" />
          </div>
        </div>
      </div>
      <Modal.Footer
        style={{
          border: 0,
          boxShadow: 'none',
          paddingTop: '1rem',
        }}
      >
        <Button style={{ width: '100%' }} className="jumia-primary" onClick={increaseStep}>
          Next <i className="icofont-rounded-right"></i>
        </Button>
      </Modal.Footer>
    </>
  );
};

export default React.memo(StepChooseSize);
