// import React from "react";

import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";

import search_icon from "../../assets/icons/search_icon.svg";

const Header = () => {
  return (
    <Navbar
      className="custom-header"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
    >
      <Container className="d-flex flex-lg-row flex-md-row flex-sm-column gap-2">
        <Nav className="d-flex gap-2">
          <Image className="logo-size" src="/logo/pc-planet-logo.png" />
          <Navbar.Brand href="#">PC Planet</Navbar.Brand>
        </Nav>
        <Col>
          <Form className="d-flex search-form bg-light">
            <Form.Control
              className="bg-light search-field"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button
              className="bg-light search-button"
              variant="outline-success"
            >
              <img className="search-icon" src={search_icon} />
            </Button>
          </Form>
        </Col>

        <Nav className="d-flex flex-row">
          <Nav.Link className="custom-nav-link" href="#">
            Offer
          </Nav.Link>
          <Nav.Link href="#">Account</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
