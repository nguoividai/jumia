import React from 'react';
import CardProductToAdd from 'src/components/card/CardProductToAdd';
import pizza from 'src/assets/images/jumia/pizza-product.png';
import Section from 'src/components/section/Section';

const JMostWantedFoodsDesktop = () => {
  return (
    <>
      <Section title="Most Wanted Foods">
        <div className="row row-gap-2 p-3">
          {[...Array(6)].map((x, i) => (
            <div key={i} className="col-3 col-md-3 col-lg-2">
              <CardProductToAdd
                layout="img-first"
                src={pizza}
                title="Peperoni Pizza"
                description="Hot beef with fry Hot beef with fry Hot beef with fry"
                type="vertical"
                price={30}
                style={{
                  background: '#F9FAFB',
                  boxShadow: '0px 1px 9px rgba(0, 0, 0, 0.1)',
                }}
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default React.memo(JMostWantedFoodsDesktop);
