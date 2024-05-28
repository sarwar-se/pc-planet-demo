import { useState } from "react";
import ProductCard from "../layout/ProductCard";

import LeftCard from "../layout/LeftCard";
import TopBar from "../layout/TopBar";
import {
  filterType,
  groupType,
  productView,
  sortType,
} from "../../constants/appConstant";
import ProductList from "../layout/ProductList";

const ProductView = ({
  products = [],
  setProducts,
  defaultProducts = [],
  status,
  loadProducts,
}) => {
  const [view, setView] = useState(productView.card);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const availabilities = [
    ...new Set(defaultProducts.map((product) => product.status)),
  ];
  const brands = [...new Set(defaultProducts.map((product) => product.brand))];
  const categories = [
    ...new Set(defaultProducts.map((product) => product.type)),
  ];

  const handleProductsFilter = (type, value) => {
    if (type === filterType.AVAILABILITY) {
      setSelectedAvailability(value);
    } else if (type === filterType.BRAND) {
      if (selectedBrands.includes(value)) {
        setSelectedBrands(selectedBrands.filter((item) => item !== value));
      } else {
        setSelectedBrands((prev) => [...prev, value]);
      }
    } else if (type === filterType.CATEGORY) {
      if (selectedCategories.includes(value)) {
        setSelectedCategories(
          selectedCategories.filter((item) => item !== value)
        );
      } else {
        setSelectedCategories((prev) => [...prev, value]);
      }
    }
  };

  const filteredProducts = products.filter((product) => {
    const availabilityMatch =
      selectedAvailability.length === 0 ||
      selectedAvailability.includes(product.status);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.type);
    const BrandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return categoryMatch && BrandMatch && availabilityMatch;
  });

  const sortProducts = (type) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (type === sortType.lowToHigh) {
        return a.price - b.price;
      } else if (type === sortType.highToLow) {
        return b.price - a.price;
      }
      return [...products];
    });

    if (type === sortType.default) {
      setProducts([...defaultProducts]);
    } else {
      setProducts([...sortedProducts]);
    }
  };

  return (
    <>
      <div className="container mt-2 d-flex flex-row gap-2">
        <div className="col-3 d-flex flex-column gap-2">
          <div className=" bg-white px-2 border">
            {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
            <marquee className="fw-bold mt-1 text-danger">
              Under Development
            </marquee>
          </div>
          <div>
            {availabilities.length > 0 && (
              <LeftCard
                title={"Availability"}
                values={availabilities}
                filterType={filterType.AVAILABILITY}
                filterHandler={handleProductsFilter}
                group={groupType.radio}
                selectedValues={selectedAvailability}
              />
            )}
          </div>
          <div>
            {brands.length > 0 && (
              <LeftCard
                title={"Brand"}
                values={brands}
                filterType={filterType.BRAND}
                filterHandler={handleProductsFilter}
                group={groupType.checkBox}
                selectedValues={selectedBrands}
              />
            )}
          </div>
          <div>
            {categories.length > 0 && (
              <LeftCard
                title={"Category"}
                values={categories}
                filterType={filterType.CATEGORY}
                filterHandler={handleProductsFilter}
                group={groupType.checkBox}
                selectedValues={selectedCategories}
              />
            )}
          </div>
        </div>
        <div className="col-9">
          <div>
            <TopBar
              activeView={view}
              onChangeView={setView}
              sortProducts={sortProducts}
            />
          </div>

          {view === productView.list && (
            <div>
              <ProductList
                products={filteredProducts}
                status={status}
                loadProducts={loadProducts}
              />
            </div>
          )}
          {view === productView.card && (
            <div>
              <ProductCard products={filteredProducts} status={status} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductView;
