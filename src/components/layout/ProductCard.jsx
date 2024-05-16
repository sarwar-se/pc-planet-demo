import { Card } from "react-bootstrap";
import { add_cart_icon } from "../../assets/index";
import { Loader } from "../pattern/Loader";
import { productStatus } from "../../constants/appConstant";

const ProductCard = ({ products, isLoading }) => {
  const empty_image = "empty.jpg";
  return (
    <>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        {products.length > 0 &&
          products.map((product, i) => (
            <div className="col " key={i}>
              <Card className="product-card">
                <Card.Img
                  variant="top"
                  src={`/images/${
                    product.imgName ? product.imgName : empty_image
                  }`}
                />
                <Card.Body className="pb-0">
                  <Card.Title
                    style={{ fontSize: 15, marginTop: 0, fontWeight: "bold" }}
                  >
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
                      : Intl.NumberFormat().format(product.price) + "৳"}
                  </h5>
                  <div className="text-center addCartButton" type="button">
                    <img className="cart-icon" src={add_cart_icon} /> Add To
                    Cart
                  </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductCard;
