import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import InputField from "../../Components/UI/InputField";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Col, Row, Button, Container } from "react-bootstrap";
import { addProduct } from "../../Actions/productAction";
import MyModal from "../../Components/UI/MyModal";

function Product() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [picture, setPicture] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  /* Function to Display Categories in a Linear Way */
  const showCategory = (categories, option = []) => {
    for (const cate of categories) {
      option.push(cate);
      if (cate.children.length) showCategory(cate.children, option);
    }
    return option;
  };

  /* To Handle Submit */
  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("price", price);
    form.append("productImg", picture);
    form.append("quantity", quantity);
    form.append("category", category);
    form.append("description", description);
    dispatch(addProduct(form));
    setShow(false);
  };

  console.log(picture.map((pic) => pic.name));

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>Product</h1>
              <Button variant="primary" onClick={() => setShow(true)}>
                Add Product
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            
          </Col>
        </Row>

        <MyModal
          show={show}
          setShow={setShow}
          title="Add New Product"
          handleSubmit={handleSubmit}
          buttonName="Add Product"
        >
          {" "}
          <InputField
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select Category</option>
            {showCategory(categories).map((cate) => (
              <option key={cate._id} value={cate._id}>
                {cate.name}
              </option>
            ))}
          </select>
          <InputField
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <InputField
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            type="file"
            onChange={(e) => setPicture([...picture, e.target.files[0]])}
          />
        </MyModal>

      </Container>
    </Layout>
  );
}

export default Product;

/*        <Modal  onHide={() => (false)}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>

          <Modal.Body>
           
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary">
              
            </Button>
          </Modal.Footer>
        </Modal> */
