import React from 'react';
import { Badge, Form, ListGroup, Tab, Tabs } from 'react-bootstrap';

const JumiaTabs = () => {
  return (
    <>
      <Tabs defaultActiveKey="profile" className="jumia-tab mb-3">
        <Tab eventKey="home" title="Select Size">
          <div className="jumia-size">
            <div className="size-title">
              Choose a size
              <Badge className="float-right danger">Required</Badge>
            </div>
            <div className="size-description">Select 1</div>
          </div>
          <div className="mt-1">
            <ListGroup className="jumia-list-size" variant="flush">
              <ListGroup.Item>
                <Form.Check type="radio" name="size" label="Small" />
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check type="radio" name="size" label="Medium" />
              </ListGroup.Item>
              <ListGroup.Item>
                <Form.Check type="radio" name="size" label="Large" />
              </ListGroup.Item>
            </ListGroup>
          </div>
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
