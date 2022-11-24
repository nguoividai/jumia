import React from 'react';
import CardProduct from 'src/components/card/CardProduct';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import hamburger from 'src/assets/images/jumia/hamburger.png';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import ModalChooseProduct from 'src/components/modal/ModalChooseProduct';
import JumiaTab from 'src/components/tab/JumiaTab';
import CardPromotionCanCopy from 'src/components/card/CardPromotionCanCopy';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import JChooseSizeMobile from './mobile/JChooseSizeMobile';
import EmptyCart from 'src/components/empty/EmptyCart';
import Button from 'src/components/button/Button';
import ListCart from 'src/components/list/ListCart';
import JCheckoutMobile from './mobile/JCheckoutMobile';
import ConfirmAddressForm from '../components/ConfirmAddressForm';
import OffCanvasOverPage from 'src/components/modal/OffCanvasOverPage';
import { Form } from 'react-bootstrap';
import SavedBadge from 'src/components/badge/SavedBadge';
import CardPromotion from 'src/components/card/CardPromotion';
import CardReview from 'src/components/card/CardReview';
import ModalCoupon from 'src/components/modal/ModalCoupon';
import CardVoucher from 'src/components/card/CardVoucher';

const JTest = () => {
  return (
    <>
      <div className="mt-2">
        <div className="row row-gap-2">
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <ModalChooseProduct />
      </div>

      <div className="mt-2">
        <JumiaTab />
      </div>

      <div className="mt-2">
        <div className="row">
          <div className="col-9">
            <CardPromotionCanCopy
              title="FREE"
              name="Garlic Bread Pizza"
              conditionText="When you order £20 or over"
              code="AAA-98765-123"
            />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="col-12 col-sm-6">
          <ModalOverPage
            trigger={
              <CardProductToAdd
                src={pizza}
                title="Peperoni Pizza"
                description="Hot beef with fry Hot beef with fry Hot beef with fry"
                type="horizontal"
                price={30}
              />
            }
          >
            <JChooseSizeMobile />
          </ModalOverPage>
        </div>
      </div>

      <div className="mt-2">
        <div className="col-12 col-sm-6">
          <ModalOverPage trigger={<Button>Empty Cart</Button>}>
            <EmptyCart />
          </ModalOverPage>
        </div>
      </div>

      <div className="mt-2">
        <div className="col-12 col-sm-6">
          <ModalOverPage
            trigger={<Button>Cart</Button>}
            footer={
              <div className="d-block p-2">
                <div className="subtotal">
                  Subtotal
                  <span className="main-price">£11.20</span>
                </div>
                <div className="mt-2 mb-2">
                  <Button style={{ width: '100%' }} color="primary">
                    Go to Checkout
                  </Button>
                </div>
              </div>
            }
          >
            <ListCart />
          </ModalOverPage>
        </div>
      </div>

      <div className="mt-2">
        <div className="col-12 col-sm-6">
          <ModalOverPage trigger={<Button>Checkout</Button>}>
            <JCheckoutMobile />
          </ModalOverPage>
        </div>
      </div>
      <div className="mt-2">
        <div className="col-12 col-sm-6">
          <ModalOverPage
            trigger={<Button>Confirm address</Button>}
            footer={
              <div>
                <Button style={{ width: '100%' }} color="primary">
                  Confirm
                </Button>
              </div>
            }
          >
            <ConfirmAddressForm />
          </ModalOverPage>
        </div>
      </div>
      <div className="mt-2">
        <div className="col-12 col-sm-6">
          <OffCanvasOverPage
            style={{ minHeight: '80vh' }}
            trigger={<Button>Add voucher</Button>}
            title="Add voucher"
          />
        </div>
      </div>
      <div className="mt-2">
        <div className="col-12 col-sm-6">
          <OffCanvasOverPage
            style={{ maxHeight: '20vh' }}
            trigger={<Button>Add voucher text</Button>}
            title="Add voucher"
          >
            <Form.Control type="text" placeholder="Enter your voucher" />

            <Button
              style={{
                borderRadius: 0,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 50,
              }}
              color="primary"
            >
              Submit
            </Button>
          </OffCanvasOverPage>
        </div>
      </div>

      <div className="mt-2">
        <SavedBadge />
      </div>

      <CardPromotion
        title="Free"
        name="garlic Pizza"
        conditionText="When you order 20$ or over"
        direction="horizontal"
      />
      {/* <CardProductToAdd
        type="vertical"
        title="top"
        description="top123"
        price={30}
        src={require('../assets/images/jumia/hamburger.png')}
      /> */}
      <CardVoucher validDate="12/12/12" title="incentive for shoppingat "></CardVoucher>
      {/* <Button
        shape="normal"
        color="white"
        size="md"
        textColor="black"
        startIcon={<i className="icofont-bag"></i>}
      >
        Delivery
      </Button> */}
      {/* <CardPromotionCanCopy
        title="Free"
        name="Garlic bread pizza asd as das as asd asd asdasda s dasd asd asdas"
        conditionText="When you order $20 or over When you order $20 or over"
        code="AAA-98765-123"
      /> */}
      <ModalCoupon
        name="voucher RM 10"
        description="incentive warehouse pahing for shoppingat at JUMIA"
        validDate="2022/12/05"
        code="FE CREDIT"
      />
      {/* Slider */}
      {/* <SliderSimple>
        {Array.from(new Array(5)).map((item, index) => (
          <div className="w-full" key={index}>
            <img src={require('../assets/images/panorama.jpg')} alt="banner" />
          </div>
        ))}
      </SliderSimple> */}
      {/* Card */}
      {/* <List title="" layout="horizontal">
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
        <CardDescription icon="icofont-telegram" title="top" subTitle="top123" />
      </List> */}
      {/* Promotion */}
      <CardPromotion
        title="20% off"
        name="all orders"
        conditionText="20$20$20$20$20$20$ 20$20$20$"
      />
      <Button color="primary" shape="normal" size="md">
        Order Delivery
      </Button>
      <Button color="white" shape="normal" size="md">
        Order Delivery
      </Button>
      <CardProduct
        src={require('../../assets/images/panorama.jpg')}
        title="Order"
        description="Order description"
        price={30}
        likeNumber={90}
      ></CardProduct>
      <CardReview username="top" reviewText="Order" rate={1.5} />
    </>
  );
};

export default React.memo(JTest);
