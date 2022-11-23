import React, { useState } from 'react';
import Section from 'src/components/section/Section';
import pizza from 'src/assets/images/jumia/pizza-vector.png';
import SliderSimple from 'src/components/slider/SliderSimple';
import { Button } from 'react-bootstrap';
import ButtonGroupSelect from 'src/components/button/ButtonGroupSelect';
import Switch from 'src/components/switch/Switch';
import ListCart from 'src/components/list/ListCart';
import List from 'src/components/list/List';

const sizes = [
  {
    name: 'small',
    main: 'S',
    extra: '(12 inch)',
    price: 6.8,
  },
  {
    name: 'medium',
    main: 'M',
    extra: '(12 inch)',
    price: 6.8,
  },
  {
    name: 'large',
    main: 'L',
    extra: '(12 inch)',
    price: 6.8,
  },
  {
    name: 'extra-large',
    main: 'XL',
    extra: '(12 inch)',
    price: 6.8,
  },
];

const crust = [
  {
    name: 'cheese',
    main: 'Cheese Stuffed',
    price: 6.8,
  },
  {
    name: 'pan',
    main: 'Deep Pan',
    price: 6.8,
  },
  {
    name: 'thin',
    main: 'Thin',
    price: 6.8,
  },
];

const maxStep = 3;

const JChooseSizeMobile = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const increaseStep = () => {
    setCurrentStep((prev) => (prev + 1 <= maxStep ? prev + 1 : maxStep));
  };

  const decreaseStep = () => {
    setCurrentStep((prev) => (prev - 1 > 0 ? prev - 1 : 0));
  };

  return (
    <>
      <Button className="mt-2 back-btn" onClick={decreaseStep}>
        <i className="icofont-rounded-left"></i>
      </Button>
      <Section
        className="choose-addon"
        title="Meaty Pizza"
        extra="Holy smokes! Something seriously bad happened."
      >
        <div className="selected-item">
          <List className="divided-inside" layout="horizontal">
            <List.ListItem>
              Size: <strong>XL</strong>
            </List.ListItem>
            <List.ListItem>
              Crust: <strong>Cheese Stuffed</strong>
            </List.ListItem>
            <List.ListItem>
              Base: <strong>BBQ</strong>
            </List.ListItem>
          </List>
        </div>
        <div className="container">
          <SliderSimple
            className="container"
            settings={{
              speed: 500,
              autoplay: true,
              autoplaySpeed: 5000,
              infinite: true,
              dots: false,
              slidesToShow: 3,
              slidesToScroll: 3,
              responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px',
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
          <div className="product-price">€6.80 </div>
          <div className="steps mt-5">
            {currentStep === 0 && (
              <div className="step-item">
                <div className="title-type">Select Size</div>
                <div className="choose-item">
                  <ButtonGroupSelect dataSelects={sizes} active="small" />
                </div>
                <div className="action">
                  <Button className="col-12 jumia-primary" onClick={increaseStep}>
                    Next <i className="icofont-rounded-right"></i>
                  </Button>
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="step-item">
                <div className="title-type">Select Crust</div>
                <div className="choose-item">
                  <ButtonGroupSelect dataSelects={crust} active="cheese" />
                </div>
                <div className="action">
                  <Button className="col-12 jumia-primary" onClick={increaseStep}>
                    Next <i className="icofont-rounded-right"></i>
                  </Button>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="step-item">
                <div className="title-type">Select Base</div>
                <div className="choose-item">
                  <ButtonGroupSelect dataSelects={crust} active="cheese" />
                </div>
                <div className="action">
                  <Button className="col-12 jumia-primary" onClick={increaseStep}>
                    Next <i className="icofont-rounded-right"></i>
                  </Button>
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div
                className="step-item"
                style={{
                  maxHeight: 'calc(100vh - 600px)',
                  overflow: 'auto',
                }}
              >
                <div className="list-extra">
                  <div className="list-extra--title">choose salad</div>
                  {[...Array(3)].map((e, idx) => (
                    <div key={idx} className="list-extra--item">
                      <div className="list-item--title">ketchup</div>
                      <div className="list-item--action">
                        <span className="price">€6.80</span>
                        <span className="toggle">
                          <Switch />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="list-extra">
                  <div className="list-extra--title">choose salad</div>
                  {[...Array(10)].map((e, idx) => (
                    <div key={idx} className="list-extra--item">
                      <div className="list-item--title">ketchup</div>
                      <div className="list-item--action">
                        <span className="price">€6.80</span>
                        <span className="toggle">
                          <Switch />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="action">
                  <Button className="col-12 jumia-primary" onClick={increaseStep}>
                    Add to cart <i className="icofont-rounded-right"></i>
                  </Button>
                </div>
              </div>
            )}

            {/* {currentStep === 4 && (
              <div
                className="step-item"
                style={{
                  maxHeight: 'calc(100vh - 600px)',
                  overflow: 'auto',
                }}
              >
                <ListCart />
              </div>
            )} */}
          </div>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JChooseSizeMobile);
