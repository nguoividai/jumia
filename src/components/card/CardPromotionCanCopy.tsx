import copy from 'copy-to-clipboard';
import React from 'react';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import InfoCircleIcon from '../icon/InfoCircleIcon';
import VoucherIcon from '../icon/VoucherIcon';

type CardPromotionCanCopyProps = {
  title?: string;
  name?: string;
  conditionText?: string;
  code?: string;
};

const CardPromotionCanCopy: React.FC<CardPromotionCanCopyProps> = (props) => {
  const { title, name, conditionText, code } = props;

  const handleCopy = async () => {
    // Get the text field
    copy(code || '');
    alert('Copy ' + code);
  };

  return (
    <Container>
      <Row className="card-promotion--can-copy">
        <Col xs={9} sm={9} md={9} lg={9} xl={9} className="information">
          <div className="information-title">{title}</div>
          <div className="information-name">{name}</div>
          <div className="information-condition">{conditionText}</div>
          <Row className="information-footer align-items-center">
            <Col xs={2} sm={2} md={1} lg={1} xl={1}>
              <VoucherIcon />
            </Col>
            <Col style={{ fontWeight: 500 }} xs={7} sm={7} md={8} lg={8} xl={8}>
              {code}
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2}>
              <InfoCircleIcon />
            </Col>
          </Row>
        </Col>
        <Col xs={3} sm={3} md={3} lg={3} xl={3} className="icon" onClick={handleCopy}>
          <img src={require('../../assets/images/coupon.png')} alt="coupon" />
          <span
            style={{
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
            }}
          ></span>
          Copy
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(CardPromotionCanCopy);
