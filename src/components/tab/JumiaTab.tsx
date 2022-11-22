import React from 'react';
import { Badge, Form, ListGroup, Tab, Tabs } from 'react-bootstrap';
import extra from 'src/assets/images/jumia/extra.jpg';
import Image from 'react-bootstrap/Image';

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
            <ListGroup className="jumia-list" variant="flush">
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Small" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Medium" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Large" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Tab>
        <Tab eventKey="profile" title=" Select Crust">
          <div className="jumia-size">
            <div className="size-title">
              Choose a size
              <Badge className="float-right danger">Required</Badge>
            </div>
            <div className="size-description">Select 1</div>
          </div>
          <div className="mt-1">
            <ListGroup className="jumia-list" variant="flush">
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Small" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Medium" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Large" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Tab>
        <Tab eventKey="contact" title="Select Base">
          <div className="jumia-size">
            <div className="size-title">
              Choose a size
              <Badge className="float-right danger">Required</Badge>
            </div>
            <div className="size-description">Select 1</div>
          </div>
          <div className="mt-1">
            <ListGroup className="jumia-list" variant="flush">
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Small" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Medium" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Large" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Tab>
        <Tab eventKey="extra" title="Add Extras">
          <div className="jumia-size">
            <div className="size-title">
              Choose a size
              <Badge className="float-right secondary">Optional</Badge>
            </div>
            <div className="size-description">Select 1</div>
          </div>
          <div className="mt-1">
            <ListGroup className="jumia-list" variant="flush">
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="checkbox" name="size" />
                <div className="extra-list-item">
                  <Image thumbnail src={extra} />
                  Extra Beef
                </div>
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="checkbox" name="size" />
                <div className="extra-list-item">
                  <Image thumbnail src={extra} />
                  Extra Beef
                </div>
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="checkbox" name="size" />
                <div className="extra-list-item">
                  <Image thumbnail src={extra} />
                  Extra Beef
                </div>
                <span className="price">+€6.80</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default React.memo(JumiaTabs);
