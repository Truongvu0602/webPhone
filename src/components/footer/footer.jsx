import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterItem from "./footerItem";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Container fluid>
          {/**không giới hạn chiều rộng */}
          <Row>
            <Col>
              <FooterItem
                title="Customer Services"
                text1="Help & Contact Us"
                text2="Returns & Refunds"
                text3="Online Stores"
                text4="Terms & Conditions"
              />
            </Col>
            <Col>
              <FooterItem
                title="Customer Services"
                text1="Help & Contact Us"
                text2="Returns & Refunds"
                text3="Online Stores"
                text4="Terms & Conditions"
              />
            </Col>
            <Col>
              <FooterItem
                title="Customer Services"
                text1="Help & Contact Us"
                text2="Returns & Refunds"
                text3="Online Stores"
                text4="Terms & Conditions"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
