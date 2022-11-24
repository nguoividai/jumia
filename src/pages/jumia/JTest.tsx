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
    </>
  );
};

export default React.memo(JTest);
