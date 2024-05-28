import { Loader } from "../pattern/Loader";
import AppCard from "../pattern/AppCard";
import { STATUS } from "../../constants/fetchStatus";

const ProductCard = ({ products, status }) => {
  return (
    <>
      {status === STATUS.LOADING && <Loader />}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
        {products.length > 0 &&
          products.map((product, i) => (
            <div className="col" key={i}>
              <AppCard product={product} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductCard;
