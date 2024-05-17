import { Card } from "react-bootstrap";
import { add_cart_icon } from "../../assets/index";
import { numberFormat, productStatus } from "../../constants/appConstant";

const AppCard = ({ product }) => {
  const empty_image = "empty.jpg";

  return (
    <Card className="product-card">
      <Card.Header className="product-card-header">
        <Card.Img
          className="p-3"
          variant="top"
          src={`/images/${product.imgName ? product.imgName : empty_image}`}
          onClick={() => {}}
        />
      </Card.Header>
      <Card.Body className="pb-0">
        <Card.Title style={{ fontSize: 15, marginTop: 0, fontWeight: "bold" }}>
          {product.title}
        </Card.Title>
        <Card.Text style={{ fontSize: 13 }}>
          <div className="opacity-75">
            <ul>
              <li>{product.description.one}</li>
              <li>{product.description.two}</li>
              <li>{product.description.three}</li>
              <li>{product.description.four}</li>
            </ul>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="product-footer">
        <h5 className="text-center text-danger">
          {" "}
          {product.status === productStatus.upComing
            ? productStatus.upComing
            : numberFormat(product.price) + "৳"}
        </h5>
        <div className="text-center addCartButton" type="button">
          <img className="cart-icon" src={add_cart_icon} /> Add To Cart
        </div>
      </Card.Footer>
    </Card>
  );
};

export default AppCard;
