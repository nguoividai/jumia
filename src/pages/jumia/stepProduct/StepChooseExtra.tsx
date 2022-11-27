import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Switch from 'src/components/switch/Switch';

type StepChooseExtraProps = {
  increaseStep?: () => void;
};

const StepChooseExtra: React.FC<StepChooseExtraProps> = ({ increaseStep }) => {
  return (
    <>
      <div
      // style={{
      //   maxHeight: 'calc(100vh - 320px)',
      //   overflowY: 'auto',
      //   overflowX: 'hidden',
      //   padding: '0 2rem 0 0',
      // }}
      >
        <div className="list-extra">
          <div className="list-extra--title">choose salad</div>
          {[...Array(5)].map((e, idx) => (
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
        <Modal.Footer
          style={{
            border: 0,
            boxShadow: 'none',
            paddingTop: '1rem',
          }}
        >
          <Button className="col-12 jumia-primary" onClick={increaseStep}>
            Add to cart <i className="icofont-rounded-right"></i>
          </Button>
        </Modal.Footer>
      </div>
    </>
  );
};

export default React.memo(StepChooseExtra);
