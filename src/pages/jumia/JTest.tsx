import React from 'react';
import CardProduct from 'src/components/card/CardProduct';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import hamburger from 'src/assets/images/jumia/hamburger.png';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import ModalChooseProduct from 'src/components/modal/ModalChooseProduct';
import JumiaTab from 'src/components/tab/JumiaTab';
import CardPromotionCanCopy from 'src/components/card/CardPromotionCanCopy';

const JTest = () => {
  return (
    <>
      <div className="mt-2">
        <div className="row row-gap-2">
          <div className="col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-md-3 col-lg-2">
            <CardProductToAdd
              src={pizza}
              title="Peperoni Pizza"
              description="Hot beef with fry Hot beef with fry Hot beef with fry"
              type="horizontal"
              price={30}
            />
          </div>
          <div className="col-md-3 col-lg-2">
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
          <div className="col-md-4">
            <CardPromotionCanCopy
              title="FREE"
              name="Garlic Bread Pizza"
              conditionText="When you order £20 or over"
              code="AAA-98765-123"
            />
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default React.memo(JTest);
