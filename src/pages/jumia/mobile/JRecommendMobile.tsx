import React, { useState } from 'react';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import Section from 'src/components/section/Section';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import ButtonJumia from 'src/components/button/Button';
import { Button } from 'react-bootstrap';

const JRecommendMobile = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <ModalOverPage
        trigger={
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              setVisible(true);
            }}
          >
            Recommend
          </a>
        }
        visible={visible}
        onClose={() => setVisible(false)}
        footer={
          <div className="d-flex gap-1">
            <ButtonJumia
              style={{ width: '50%' }}
              color="transparent"
              onClick={() => setVisible(false)}
            >
              No Thanks
            </ButtonJumia>
            <ButtonJumia style={{ width: '50%' }} color="primary">
              Add To Cart
            </ButtonJumia>
          </div>
        }
      >
        <Button className="mt-2 back-btn" onClick={() => setVisible(false)}>
          <i className="icofont-rounded-left"></i>
        </Button>
        <Section title="Recommend">
          <div className="jumia-container">
            <div className="row row-gap-2 mt-4 pb-5">
              {[...Array(10)].map((x, i) => (
                <div key={i} className="col-6 col-sm-6">
                  <CardProductToAdd
                    src={pizza}
                    title="Peperoni Pizza"
                    description="Hot beef with fry Hot beef with fry Hot beef with fry"
                    type="vertical"
                    price={30}
                    style={{
                      background: '#F9FAFB',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Section>
      </ModalOverPage>
    </>
  );
};

export default React.memo(JRecommendMobile);
