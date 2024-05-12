import { useEffect, useState } from "react";
import ProductCard from "../components/layout/ProductCard";
import { getProducts } from "../api/api";
import LeftCard from "../components/layout/LeftCard";
import TopBar from "../components/layout/TopBar";
import { productView } from "../constants/appConstant";
import ProductList from "../components/layout/ProductList";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState(productView.card);

  const availability = ["In Stock", "Up Comming"];
  const brand = [
    "ASUS",
    "MSI",
    "SONY",
    "INTEL",
    "CANON",
    "APOLLO",
    "POWER GUARD",
  ];
  const category = [
    "Graphics Card",
    "Motherboard",
    "Processor",
    "Ups",
    "Camera",
    "Monitor",
  ];

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
          <LeftCard title={"Availability"} values={availability} />
        </div>
        <div>
          <LeftCard title={"Brand"} values={brand} />
        </div>
        <div>
          <LeftCard title={"Category"} values={category} />
        </div>
      </div>
      <div className="col-10">
        <div>
          <TopBar activeView={view} onChangeView={setView} />
        </div>
        {view === productView.list && (
          <div>
            <ProductList
              products={products}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              loadProducts={fetchProducts}
            />
          </div>
        )}
        {view === productView.card && (
          <div>
            <ProductCard
              products={products}
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
