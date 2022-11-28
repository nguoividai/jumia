import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import ListProductWithDescription from 'src/components/list/ListProductWithDescription';
import Section from 'src/components/section/Section';

const JTab = () => {
  return (
    <>
      <div className="jumia-tab-vertical">
        <Tab.Container defaultActiveKey="recommended">
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="recommended">Recommended</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="burgers">Burgers & Wraps</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="shakes">Shakes and coolers</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="pizza">Pizza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="hotdogs">Hotdogs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="juices">Juices</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sides">Sides and dips</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="recommended">
                  <Section title="Burgers & Wraps" extra="7 ITEMS">
                    <ListProductWithDescription />
                  </Section>
                </Tab.Pane>
                <Tab.Pane eventKey="second">456</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
};

export default React.memo(JTab);
