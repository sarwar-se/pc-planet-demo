import { useState } from "react";
import AppButton from "../pattern/AppButton";
import TableView from "../pattern/TableView";
import AppModal from "../pattern/AppModal";
import ProductForm from "../../pages/ProductForm";
import { updateProduct, deleteProduct } from "../../api/api";
import AppToast from "../pattern/AppToast";
import { colorVarient, toastPosition } from "../../constants/appConstant";
import { Loader } from "../pattern/Loader";

const ProductList = ({ products, loadProducts, isLoading }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
    imgPath: "",
  });

  const getTableMetaData = () => [
    {
      headerTitle: "ID",
      fieldName: "id",
      render: (rowData) => <>{rowData["id"]}</>,
    },
    {
      headerTitle: "Title",
      fieldName: "title",
      render: (rowData) => <>{rowData["title"]}</>,
    },
    {
      headerTitle: "Brand",
      fieldName: "brand",
      render: (rowData) => <>{rowData["brand"]}</>,
    },
    {
      headerTitle: "Category",
      fieldName: "type",
      render: (rowData) => <>{rowData["type"]}</>,
    },
    {
      headerTitle: "Price",
      fieldName: "price",
      render: (rowData) => <>{Intl.NumberFormat().format(rowData["price"])}</>,
    },
    {
      headerTitle: "Status",
      fieldName: "status",
      render: (rowData) => <>{rowData["status"]}</>,
    },
    {
      headerTitle: "Actions",
      render: (rowData) => (
        <>
          <div className="d-flex flex-row gap-1">
            <AppButton
              rowData={rowData}
              btnClass="bg-primary"
              handleClick={editModalShow}
            >
              Edit
            </AppButton>
            <AppButton
              rowData={rowData}
              btnClass="bg-danger"
              handleClick={deleteModalShow}
            >
              Delete
            </AppButton>
          </div>
        </>
      ),
    },
  ];

  const editModalShow = ({ rowData }) => {
    setProduct(rowData);
    setShowUpdateModal(true);
  };

  const deleteModalShow = ({ rowData }) => {
    setProduct(rowData);
    setShowDeleteModal(true);
  };

  const updateModalClose = () => {
    setShowUpdateModal(false);
  };

  const deleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const editProduct = (product) => {
    updateProduct(product)
      .then((response) => {
        if (response) {
          loadProducts();
          updateModalClose();
          setShowToaster(true);
        }
      })
      .finally(() => {});
  };

  const handledDleteProduct = ({ product }) => {
    deleteProduct(product).then((response) => {
      if (response) {
        deleteModalClose();
        loadProducts();
        setShowToaster(true);
      }
    });
  };

  return (
    <>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <TableView tableMetaData={getTableMetaData()} data={products} />
        )}
      </div>

      <AppModal
        show={showUpdateModal}
        handleAccept={editProduct}
        handleCancel={updateModalClose}
        showTitle={false}
        showHeader={true}
        showFooter={true}
        headerTitle={"Update Product"}
        acceptText={"Submit"}
        cancelText={"Cancel"}
        animation={true}
        backdrop={"static"}
        size={"xl"}
      >
        <ProductForm
          formData={product}
          setFormData={setProduct}
          handleSubmit={editProduct}
        />
      </AppModal>

      <AppModal
        show={showDeleteModal}
        handleAccept={handledDleteProduct}
        handleCancel={deleteModalClose}
        showTitle={false}
        showHeader={true}
        showFooter={true}
        headerTitle={"Are You Sure?"}
        acceptText={"Delete"}
        acceptBtnColor={colorVarient.DANGER}
        animation={true}
        backdrop={"static"}
      >
        <div>
          <p>
            You Are Deleting: <span className="fw-bold">{product.title}</span>
          </p>
        </div>
      </AppModal>

      <AppToast
        show={showToaster}
        onClose={() => setShowToaster(false)}
        header={"Success"}
        message={"Product Update Successfully"}
        delay={3000}
        position={toastPosition.bottomEnd}
        colorVarient={colorVarient.SUCCESS}
      />
    </>
  );
};

export default ProductList;
