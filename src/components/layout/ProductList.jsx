import { useState } from "react";
import AppButton from "../pattern/AppButton";
import TableView from "../pattern/TableView";
import AppModal from "../pattern/AppModal";
import ProductForm from "../product/ProductForm";
import { updateProduct, deleteProduct } from "../../api/api";
import AppToast from "../pattern/AppToast";
import {
  colorVarient,
  numberFormat,
  toastPosition,
} from "../../constants/appConstant";
import { Loader } from "../pattern/Loader";
import { add_icon_white } from "../../assets/index";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/appRoutes";
import { STATUS } from "../../constants/fetchStatus";

const ProductList = ({ products, loadProducts, status }) => {
  const navigate = useNavigate();
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
  const empty_image = "empty.jpg";

  const getTableMetaData = () => [
    {
      headerTitle: "ID",
      fieldName: "id",
      colSize: "col-1",
      render: (rowData) => <>{rowData["id"]}</>,
    },
    {
      headerTitle: "Product Name",
      fieldName: "title",
      colSize: "col-4",
      render: (rowData) => <>{rowData["title"]}</>,
    },
    {
      headerTitle: "Brand",
      fieldName: "brand",
      colSize: "col-1",
      render: (rowData) => <>{rowData["brand"]}</>,
    },
    {
      headerTitle: "Category",
      fieldName: "type",
      colSize: "col-1",
      render: (rowData) => <>{rowData["type"]}</>,
    },
    {
      headerTitle: "Price",
      fieldName: "price",
      colSize: "col-1",
      render: (rowData) => <>{numberFormat(rowData["price"])}</>,
    },
    {
      headerTitle: "Status",
      fieldName: "status",
      colSize: "col-1",
      render: (rowData) => <>{rowData["status"]}</>,
    },
    {
      headerTitle: "Image",
      fieldName: "imgName",
      colSize: "col-1",
      render: (rowData) => (
        <>
          <img
            style={{ width: 50, height: 50 }}
            src={`/images/${
              rowData["imgName"] ? rowData["imgName"] : empty_image
            }`}
            alt=""
          />
        </>
      ),
    },
    {
      headerTitle: "Actions",
      colSize: "col-2",
      render: (rowData) => (
        <>
          <div className="d-flex flex-row gap-2">
            <AppButton
              rowData={rowData}
              btnClass="bg-primary"
              handleClick={() => editModalShow(rowData)}
            >
              Edit
            </AppButton>
            <AppButton
              rowData={rowData}
              btnClass="bg-danger"
              handleClick={() => deleteModalShow(rowData)}
            >
              Delete
            </AppButton>
          </div>
        </>
      ),
    },
  ];

  const editModalShow = (rowData) => {
    setProduct({ ...rowData });
    setShowUpdateModal(true);
  };

  const deleteModalShow = (rowData) => {
    setProduct({ ...rowData });
    setShowDeleteModal(true);
  };

  const updateModalClose = () => {
    setShowUpdateModal(false);
    setProduct({});
  };

  const addProductNavigate = () => {
    navigate(appRoutes.addProduct);
  };

  const deleteModalClose = () => {
    setShowDeleteModal(false);
    setProduct({});
  };

  const handleEditProduct = (product) => {
    updateProduct(product)
      .then((response) => {
        if (response) {
          loadProducts();
          updateModalClose();
          setShowToaster(true);
        }
      })
      .finally(() => {
        setProduct({});
      });
  };

  const handledDleteProduct = ({ product }) => {
    deleteProduct(product)
      .then((response) => {
        if (response) {
          deleteModalClose();
          loadProducts();
          setShowToaster(true);
        }
      })
      .finally(() => {
        setProduct({});
      });
  };

  return (
    <>
      <div>
        {status === STATUS.LOADING && <Loader />}
        {status === STATUS.SUCCESS && (
          <>
            <div className="text-end mb-2">
              <AppButton btnClass="bg-success" handleClick={addProductNavigate}>
                <img
                  className="add-icon-size"
                  src={add_icon_white}
                  alt="add icon"
                />{" "}
                Add Product
              </AppButton>
            </div>
            <TableView tableMetaData={getTableMetaData()} data={products} />
          </>
        )}
      </div>

      <AppModal
        show={showUpdateModal}
        handleAccept={handleEditProduct}
        handleCancel={updateModalClose}
        showTitle={false}
        showHeader={true}
        showFooter={false}
        headerTitle={"Update Product"}
        acceptText={"Submit"}
        cancelText={"Cancel"}
        animation={true}
        backdrop={"static"}
        centered={true}
        closeButton={true}
        size={"xl"}
      >
        <div className="px-4">
          <ProductForm
            formData={product}
            setFormData={setProduct}
            handleSubmit={handleEditProduct}
          />
        </div>
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
        centered={true}
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
