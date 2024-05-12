import { Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const ProductForm = ({ formData, setFormData, handleSubmit }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <Form onSubmit={() => handleSubmit(formData)}>
        <Row className="mb-3">
          <Form.Group as={Col} sm={6}>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name={"title"}
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Brand</Form.Label>
            <Form.Select
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              defaultValue={"selectBrand"}
            >
              <option value={"selectBrand"}>Select Brand</option>
              <option value={"ASUS"}>ASUS</option>
              <option value={"MSI"}>MSI</option>
              <option value={"SONY"}>SONY</option>
              <option value={"INTEL"}>INTEL</option>
              <option value={"CANON"}>CANON</option>
              <option value={"APOLLO"}>APOLLO</option>
              <option value={"POWER GUARD"}>POWER GUARD</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="type"
              value={formData.type}
              onChange={handleChange}
              defaultValue={"Select Category"}
            >
              <option value={"Select Category"}>Select Category</option>
              <option value={"Graphics Card"}>Graphics Card</option>
              <option value={"Motherboard"}>Motherboard</option>
              <option value={"Processor"}>Processor</option>
              <option value={"Ups"}>Ups</option>
              <option value={"Camera"}>Camera</option>
              <option value={"Monitor"}>Monitor</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              defaultValue={"Select Status"}
            >
              <option value={"Select Status"}>Select Status</option>
              <option value={"In Stock"}>In Stock</option>
              <option value={"Up Comming"}>Up Comming</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Choose Image</Form.Label>
            <Form.Control type="file" name="imgPath" />
          </Form.Group>
        </Row>
      </Form>
    </div>
  );
};

export default ProductForm;
