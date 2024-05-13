import { useEffect, useState } from "react";
import ProductCard from "../components/layout/ProductCard";
import { getProducts } from "../api/api";
import LeftCard from "../components/layout/LeftCard";
import TopBar from "../components/layout/TopBar";
import { filterType, productView } from "../constants/appConstant";
import ProductList from "../components/layout/ProductList";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState(productView.card);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const availabilities = [
    ...new Set(products.map((product) => product.status)),
  ];
  const brands = [...new Set(products.map((product) => product.brand))];
  const categories = [...new Set(products.map((product) => product.type))];

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
    filteredProducts();
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

  const fetchProducts = () => {
    setIsLoading(true);
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-3 d-flex flex-row gap-2">
      <div className="col-2 d-flex flex-column gap-2">
        <div>
          {availabilities.length > 0 && (
            <LeftCard
              title={"Availability"}
              values={availabilities}
              filterType={filterType.AVAILABILITY}
              filterHandler={handleProductsFilter}
              groupType={"radio"}
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
              groupType={"checkbox"}
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
              groupType={"checkbox"}
              selectedValues={selectedCategories}
            />
          )}
        </div>
      </div>
      <div className="col-10">
        <div>
          <TopBar activeView={view} onChangeView={setView} />
        </div>
        {view === productView.list && (
          <div>
            <ProductList
              products={filteredProducts}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              loadProducts={fetchProducts}
            />
          </div>
        )}
        {view === productView.card && (
          <div>
            <ProductCard
              products={filteredProducts}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
