// import React from "react";

import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import search_icon from "../../assets/icons/search_icon.svg";

const Header = () => {
  return (
    <Navbar
      className="custom-header"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
    >
      <Container>
        <Nav>
          <Navbar.Brand href="#">PC Planet</Navbar.Brand>
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
        </Nav>

        <Nav className="custom-nav">
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
