import { useRef, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const ProductForm = ({ formData, setFormData, handleSubmit }) => {
  const [imgPreviews, setImgPreviews] = useState([]);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("description.")) {
      const key = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        description: {
          ...prevData.description,
          [key]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const selectedFiltes = Array.from(files).slice(0, 3 - imgPreviews.length);

    if (selectedFiltes.length + imgPreviews.length > 3) {
      alert("You can only up to 3 images.");
      return;
    }

    const newPreviews = selectedFiltes.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve({ file, preview: reader.result });
        };
      });
    });

    Promise.all(newPreviews).then((newFiles) => {
      const updatedPreviews = [...imgPreviews, ...newFiles];
      setImgPreviews(updatedPreviews);
      setFormData((prev) => ({
        ...prev,
        [name]: updatedPreviews.map((fileData) => fileData.file),
      }));
    });
  };

  const removeImage = (index) => {
    const updatedPreviews = imgPreviews.filter((file, i) => i !== index);
    setImgPreviews(updatedPreviews);
    setFormData((prev) => ({
      ...prev,
      images: updatedPreviews.map((fileData) => fileData.file),
    }));

    if (updatedPreviews.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClear = () => {
    setFormData({
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
    setImgPreviews([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="">
      <Form
        className="d-flex flex-column gap-4"
        // onSubmit={() => handleFormSubmit}
      >
        <Row className="">
          <Form.Group as={Col} sm={6}>
            <Form.Label className="fw-bold">Product Name:</Form.Label>
            <Form.Control
              type="text"
              name={"title"}
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Brand:</Form.Label>
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
            <Form.Label className="fw-bold">Category:</Form.Label>
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
            <Form.Label className="fw-bold">Product ID:</Form.Label>
            <Form.Control
              type="number"
              name="id"
              value={formData.id}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Product Price:</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Status:</Form.Label>
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
        </Row>
        <Row>
          <div className="d-flex gap-3 align-items-center">
            <Form.Group>
              <Form.Label className="fw-bold">Choose Image (Max 3):</Form.Label>
              <Form.Control
                type="file"
                name="images"
                onChange={handleFileChange}
                multiple
                ref={fileInputRef}
              />
            </Form.Group>
            <div className="d-flex gap-3">
              {imgPreviews.map((preview, index) => (
                <div key={index} className="d-flex flex-column gap-1">
                  <img
                    src={preview.preview}
                    className="preview-img"
                    alt={`Img Preview ${index}`}
                  />
                  <div className="d-flex align-items-center gap-2">
                    <p className="file-name">{preview.file.name}</p>
                    <button
                      className="cross-button"
                      onClick={() => removeImage(index)}
                    >
                      {"X"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Row>

        <Row>
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Description 1:</Form.Label>
            <Form.Control
              type="text"
              name="description.one"
              value={formData.description.one}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Description 2:</Form.Label>
            <Form.Control
              type="text"
              name="description.two"
              value={formData.description.two}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Description 3:</Form.Label>
            <Form.Control
              type="text"
              name="description.three"
              value={formData.description.three}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label className="fw-bold">Description 4:</Form.Label>
            <Form.Control
              type="text"
              name="description.four"
              value={formData.description.four}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Form.Group className="d-flex justify-content-end gap-2 mt-2">
          <Button onClick={() => handleSubmit(formData)}>Add</Button>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ProductForm;
