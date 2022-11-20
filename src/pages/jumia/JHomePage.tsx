import React from 'react';
import Banner from 'src/components/banner/Banner';
import rectangle from 'src/assets/images/jumia/Rectangle 1.jpg';
import SliderSimple from 'src/components/slider/SliderSimple';
import CardDescription from 'src/components/card/CardDescription';
import CardPromotion from 'src/components/card/CardPromotion';
import Button from 'src/components/button/Button';
import Section from 'src/components/section/Section';
import CardProduct from 'src/components/card/CardProduct';
import hamburger from 'src/assets/images/jumia/hamburger.png';
import CardReview from 'src/components/card/CardReview';

const JHomePage = () => {
  return (
    <>
      <div>
        <SliderSimple
          className="hompage-banner"
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }}
        >
          <div>
            <img src={rectangle} alt="banner" />
          </div>
          <div>
            <img src={rectangle} alt="banner" />
          </div>
          <div>
            <img src={rectangle} alt="banner" />
          </div>
          <div>
            <img src={rectangle} alt="banner" />
          </div>
        </SliderSimple>
        <SliderSimple
          settings={{
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '150px',
          }}
        >
          <div>
            <CardDescription
              icon="icofont-ticket"
              title="Fast Delivery"
              subTitle="Fastest Delivery in Birmingham"
            />
          </div>
          <div>
            <CardDescription
              icon="icofont-ticket"
              title="Fast Delivery"
              subTitle="Fastest Delivery in Birmingham"
            />
          </div>
          <div>
            <CardDescription
              icon="icofont-ticket"
              title="Fast Delivery"
              subTitle="Fastest Delivery in Birmingham"
            />
          </div>
        </SliderSimple>
        <SliderSimple
          settings={{
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: '40px',
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
        </SliderSimple>

        <div
          className="text-center"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
        >
          <Button color="primary" shape="normal" size="md">
            Order Delivery
          </Button>
          <Button color="white" shape="normal" size="md">
            Order Delivery
          </Button>
        </div>

        <Section title="Most Wanted Foods">
          <SliderSimple
            settings={{
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '80px',
            }}
          >
            <div className="row d-flex row-gap-1">
              <div className="col-12">
                <CardProduct
                  title="Peperoni Pizza"
                  description="Hot beef with fry Hot beef with fry Hot beef with fry"
                  src={hamburger}
                  price={30}
                  likeNumber={93}
                />
              </div>
              <div className="col-12">
                <CardProduct
                  title="Peperoni Pizza"
                  description="Hot beef with fry Hot beef with fry Hot beef with fry"
                  src={hamburger}
                  price={30}
                  likeNumber={93}
                />
              </div>
            </div>
            <div className="row d-flex row-gap-1">
              <div className="col-12">
                <CardProduct
                  title="Peperoni Pizza"
                  description="Hot beef with fry Hot beef with fry Hot beef with fry"
                  src={hamburger}
                  price={30}
                  likeNumber={93}
                />
              </div>
              <div className="col-12">
                <CardProduct
                  title="Peperoni Pizza"
                  description="Hot beef with fry Hot beef with fry Hot beef with fry"
                  src={hamburger}
                  price={30}
                  likeNumber={93}
                />
              </div>
            </div>
          </SliderSimple>
        </Section>
        <Section
          title="Customer Reviews"
          style={{
            background: '#FFFFFF',
          }}
        >
          <SliderSimple
            settings={{
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '80px',
            }}
          >
            <div className="row d-flex row-gap-1">
              <div className="col-12">
                <CardReview
                  username="Pedro Alexander:"
                  reviewText="customer reviews the paid versions let you create customizable review invitations, share ratings and reviews . "
                  rate={1.5}
                />
              </div>
            </div>
            <div className="row d-flex row-gap-1">
              <div className="col-12">
                <CardReview
                  username="Pedro Alexander:"
                  reviewText="customer reviews the paid versions let you create customizable review invitations, share ratings and reviews . "
                  rate={1.5}
                />
              </div>
            </div>
          </SliderSimple>
        </Section>
      </div>
    </>
  );
};

export default React.memo(JHomePage);
