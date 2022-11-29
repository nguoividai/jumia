import React, { useState } from 'react';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import Section from 'src/components/section/Section';
import ModalOverPage from 'src/components/modal/ModalOverPage';
import ButtonJumia from 'src/components/button/Button';
import { Button, Modal } from 'react-bootstrap';

const JRecommendDesktop = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <ModalOverPage
        fullscreen="sm-down"
        title="Recommend"
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
          <div className="d-flex gap-1 justify-content-end">
            <ButtonJumia color="transparent" onClick={() => setVisible(false)}>
              No Thanks
            </ButtonJumia>
            <ButtonJumia color="primary">Add To Cart</ButtonJumia>
          </div>
        }
      >
        <Section>
          <div className="container">
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

export default React.memo(JRecommendDesktop);
