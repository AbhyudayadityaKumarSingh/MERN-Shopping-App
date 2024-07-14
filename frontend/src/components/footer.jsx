import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <>

      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span>Copyright &copy; Abhyuday Singh .{currentYear} </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;