import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../api/api";
import ProductView from "../components/product/ProductView";
import { useParams } from "react-router-dom";

const FindCategoryWise = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = (category) => {
    setIsLoading(true);
    getProductsByCategory(category)
      .then((response) => {
        setProducts(response.data);
        setDefaultProducts(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts(category);
  }, [category]);
  return (
    <>
      <ProductView
        products={products}
        setProducts={setProducts}
        defaultProducts={defaultProducts}
        isLoading={isLoading}
        loadProducts={fetchProducts}
      />
    </>
  );
};

export default FindCategoryWise;
