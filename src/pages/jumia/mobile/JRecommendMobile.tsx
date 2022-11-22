import React from 'react';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import Section from 'src/components/section/Section';

const JRecommendMobile = () => {
  return (
    <>
      <Section title="Recommend">
        <div className="container">
          <div className="row row-gap-2 mt-5 mb-5">
            {[...Array(10)].map((x, i) => (
              <div key={i} className="col-6 col-sm-6">
                <CardProductToAdd
                  src={pizza}
                  title="Peperoni Pizza"
                  description="Hot beef with fry Hot beef with fry Hot beef with fry"
                  type="horizontal"
                  price={30}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default React.memo(JRecommendMobile);
