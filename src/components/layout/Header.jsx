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
import {
  search_icon,
  pc_planet_logo,
  user_icon_yellow,
  discount_off_icon,
  shopping_cart_yellow,
} from "../../assets/index";

const Header = () => {
  const cartCount = 0;
  return (
    <Navbar
      className="custom-header"
      bg="dark"
      data-bs-theme="light"
      expand="lg"
    >
      <Container className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-2">
        <Nav className="d-flex gap-2">
          <Image className="logo-size" src={pc_planet_logo} />
          <Navbar.Brand className="text-light fw-bold" href="#">
            PC Planet
          </Navbar.Brand>
        </Nav>
        <Col className="d-flex justify-content-center">
          <Form className="d-flex search-form bg-light">
            <Form.Control
              className="bg-light search-field"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button className="bg-light search-button">
              <img className="search-icon" src={search_icon} />
            </Button>
          </Form>
        </Col>

        <Nav className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column gap-3 align-items-center">
          <Nav.Link href="#">
            <div className="d-flex flex-row align-items-center gap-2">
              <div>
                <img style={{ width: 35 }} src={discount_off_icon} />
              </div>
              <div className="">
                <p className="text-light m-0">Offers</p>
                <p className="text-danger m-0" style={{ fontSize: "13px" }}>
                  28 Jun Ends
                </p>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link href="#">
            <img style={{ width: 35 }} src={shopping_cart_yellow} />
            {<span className="cart-count">{cartCount}</span>}
          </Nav.Link>

          <Nav className="d-flex flex-row gap-2 text-light align-items-center">
            <div>
              <img style={{ width: 25 }} src={user_icon_yellow} />
            </div>
            <div className="d-flex flex-column">
              <p style={{ marginBottom: "0" }}>Account</p>
              <div className="d-flex flex-row gap-1">
                <p
                  style={{
                    margin: "0",
                    fontSize: "15px",
                    color: "gray",
                  }}
                >
                  Login
                </p>
                <p
                  style={{
                    margin: "0",
                    fontSize: "15px",
                  }}
                >
                  /
                </p>
                <p
                  style={{ marginBottom: "0", fontSize: "15px", color: "gray" }}
                >
                  Register
                </p>
              </div>
            </div>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
