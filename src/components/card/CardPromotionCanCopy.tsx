import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type CardPromotionCanCopyProps = {
  title?: string;
  name?: string;
  conditionText?: string;
  code?: string;
};

const CardPromotionCanCopy: React.FC<CardPromotionCanCopyProps> = (props) => {
  const { title, name, conditionText, code } = props;
  return (
    <Container>
      <Row className="card-promotion--can-copy">
        <Col xs={9} sm={9} md={9} lg={9} xl={9} className="information">
          <div className="information-title">{title}</div>
          <div className="information-name">{name}</div>
          <div className="information-condition">{conditionText}</div>
          <Row className="information-footer">
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
              <img src={require('../../assets/images/coupon-1.png')} alt="coupon" />
            </Col>
            <Col xs={7} sm={7} md={7} lg={7} xl={7}>
              {code}
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
              <i className="icofont-info-circle"></i>
            </Col>
          </Row>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className="icon" onClick={() => console.log(123)}>
          <img src={require('../../assets/images/coupon.png')} alt="coupon" />
          Copy
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(CardPromotionCanCopy);
