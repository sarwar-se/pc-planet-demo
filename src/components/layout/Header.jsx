import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import {
  pc_planet_logo,
  user_icon_yellow,
  discount_off_icon,
  shopping_cart_yellow,
} from "../../assets/index";
import SearchProduct from "../product/SearchProduct";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/appRoutes";

const Header = () => {
  const navigate = useNavigate();
  const cartCount = 0;
  return (
    <Navbar
      className="custom-header"
      bg="dark"
      data-bs-theme="light"
      expand="lg"
    >
      <Container className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column gap-2">
        <Nav
          className="d-flex gap-2 pointer"
          onClick={() => {
            navigate(appRoutes.root);
          }}
        >
          <Image className="logo-size" src={pc_planet_logo} />
          <Navbar.Brand className="text-light fw-bold">PC Planet</Navbar.Brand>
        </Nav>
        <Col className="d-flex justify-content-center">
          <SearchProduct />
        </Col>

        <Nav className="d-flex flex-lg-row flex-md-row flex-sm-row flex-column gap-3 align-items-center">
          <Nav.Link href="#">
            <div className="d-flex flex-row align-items-center gap-2">
              <div>
                <img
                  style={{ width: 35 }}
                  src={discount_off_icon}
                  alt="offer icon"
                />
              </div>
              <div>
                <p className="text-light m-0">Offers</p>
                <p className="text-danger m-0" style={{ fontSize: "13px" }}>
                  28 Jun Ends
                </p>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link href="#">
            <img
              style={{ width: 35 }}
              src={shopping_cart_yellow}
              alt="cart icon"
            />
            {<span className="cart-count">{cartCount}</span>}
          </Nav.Link>

          <Nav className="d-flex flex-row gap-2 text-light align-items-center">
            <div>
              <img
                style={{ width: 25 }}
                src={user_icon_yellow}
                alt="profile icon"
              />
            </div>
            <div className="d-flex flex-column">
              <p style={{ marginBottom: "0" }}>Account</p>
              <div className="d-flex flex-row gap-1">
                <p className="login-register">Login</p>
                <p className="login-register">/</p>
                <p className="login-register">Register</p>
              </div>
            </div>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
