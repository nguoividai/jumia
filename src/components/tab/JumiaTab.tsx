import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const JumiaTabs = () => {
  return (
    <>
      <Tabs defaultActiveKey="profile" className="jumia-tab mb-3">
        <Tab eventKey="home" title="Select Size">
          Select Size
        </Tab>
        <Tab eventKey="profile" title=" Select Crust">
          Select Crust
        </Tab>
        <Tab eventKey="contact" title="Select Base">
          Select Base
        </Tab>
        <Tab eventKey="extra" title="Add Extras">
          Add Extras
        </Tab>
      </Tabs>
    </>
  );
};

export default React.memo(JumiaTabs);
