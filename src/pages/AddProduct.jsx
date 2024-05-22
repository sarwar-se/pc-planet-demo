import React, { useState } from "react";
import ProductForm from "../components/product/ProductForm";
import AppToast from "../components/pattern/AppToast";
import { colorVarient, toastPosition } from "../constants/appConstant";
import { addProduct } from "../api/api";

const AddProduct = () => {
  const [showToaster, setShowToaster] = useState(false);
  const [toastHeader, setToastHeader] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastColorVarient, setToastColorVarient] = useState("");

  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: {
      one: "",
      two: "",
      three: "",
      four: "",
    },
    price: "",
    brand: "",
    type: "",
    status: "",
    images: [],
  });

  const handleAddProduct = (product) => {

    console.log(product);
    addProduct(product)
      .then((response) => {
        if (response) {
          setToastHeader("Success");
          setToastMessage("Product Added Successfully");
          setToastColorVarient(colorVarient.SUCCESS);
          setShowToaster(true);
        }
      })
      .catch(() => {
        setToastHeader("Fail");
        setToastMessage("Failed to Saved Product");
        setToastColorVarient(colorVarient.DANGER);
        setShowToaster(true);
      })
      .finally(() => {});
  };

  return (
    <>
      <div className="container bg-white mt-3 p-3 border">
        <div className="text-center mb-3">
          <h4 className="fw-bold text-success">Add Product</h4>
        </div>
        <ProductForm
          formData={product}
          setFormData={setProduct}
          handleSubmit={handleAddProduct}
        />
      </div>
      <AppToast
        show={showToaster}
        onClose={() => setShowToaster(false)}
        header={toastHeader}
        message={toastMessage}
        delay={3000}
        position={toastPosition.bottomEnd}
        colorVarient={toastColorVarient}
      />
    </>
  );
};

export default AddProduct;
