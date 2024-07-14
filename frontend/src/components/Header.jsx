import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  

  return (
    <>
  
  <Navbar  expand="lg"  collapseOnSelect>
      <Container>
      <LinkContainer to="/">
            <Navbar.Brand>E-Commerce App</Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i>
                  &nbsp; cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>
                  &nbsp; Sign in
                </Nav.Link>
              </LinkContainer>
           
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



    </>
  );
};

export default Header;