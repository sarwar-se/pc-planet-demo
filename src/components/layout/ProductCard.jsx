import { Card } from "react-bootstrap";
// import rog_strix from "../../assets/images/rog_strix.jpg";
import empty_image from "../../assets/images/empty.jpg";
import cart_icon from "../../assets/icons/cart_icon.png";
import { Loader } from "../pattern/Loader";

const ProductCard = ({ products, isLoading }) => {
  return (
    <>
      {isLoading && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        {products.map((product, i) => (
          <div className="col " key={i}>
            <Card className="product-card">
              <Card.Img variant="top" src={empty_image} />
              <Card.Body>
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
                <h4 className="text-center text-danger">
                  {" "}
                  {Intl.NumberFormat().format(product.price) + "৳"}
                </h4>
                <div className="text-center addCartButton" type="button">
                  <img className="cart-icon" src={cart_icon} /> Add To Cart
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
