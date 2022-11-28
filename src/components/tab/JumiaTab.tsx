import React, { useState } from 'react';
import { Badge, Form, ListGroup, Tab, Tabs } from 'react-bootstrap';
import extra from 'src/assets/images/jumia/extra.jpg';
import Image from 'react-bootstrap/Image';

const steps = ['size', 'crust', 'base', 'extra'];

type JumiaTabProps = {
  step?: number;
};

const JumiaTabs: React.FC<JumiaTabProps> = ({ step }) => {
  return (
    <>
      <Tabs activeKey={steps[step || 0]} className="jumia-tab mb-3">
        <Tab eventKey="size" title="Select Size" disabled>
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
        <Tab eventKey="crust" title=" Select Crust" disabled>
          <div className="jumia-size">
            <div className="size-title">
              Choose a crust
              <Badge className="float-right success">Required</Badge>
            </div>
            <div className="size-description">Select 1</div>
          </div>
          <div className="mt-1">
            <ListGroup className="jumia-list" variant="flush">
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Cheese Stuffed" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Deep pan" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Thin" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Tab>
        <Tab eventKey="base" title="Select Base" disabled>
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
                <Form.Check type="radio" name="size" label="BBQ" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Tomato" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
              <ListGroup.Item className="select-checkbox">
                <Form.Check type="radio" name="size" label="Garlic" />
                <span className="price">+€6.80</span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Tab>
        <Tab eventKey="extra" title="Add Extras" disabled>
          <div className="jumia-size">
            <div className="size-title">
              Choose a size
              <Badge className="float-right secondary">Optional</Badge>
            </div>
            <div className="size-description">Select up to 8</div>
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
