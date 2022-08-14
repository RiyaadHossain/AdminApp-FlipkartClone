import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import InputField from "../../Components/UI/InputField";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Col, Row, Button, Container, Table } from "react-bootstrap";
import { addProduct } from "../../Actions/productAction";
import MyModal from "../../Components/UI/MyModal";
import "./Product.css";

function Product() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [show, setShow] = useState(false);
  const [picture, setPicture] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [productModal, setProductModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  const product = useSelector((state) => state.product.product);
  console.log(product)
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

  const productDetailModal = () => {
    if (!productDetails) return null;
    return (
      <MyModal
        size="lg"
        title="Product Details"
        show={productModal}
        setShow={setProductModal}
      >
        {console.log(productDetails)}
        <Row>
          <Col md="6">
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md="6">
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
        </Row>

        <Row>
          <Col md="6">
            <label className="key">Quantity</label>
            <p className="value">{productDetails.quantity}</p>
          </Col>
          <Col md="6">
            <label className="key">Category</label>
            <p className="value">{productDetails.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div style={{ display: "flex" }}>
              {productDetails.productImg.map((picture, i) => (
                <div className="productImgContainer" key={i}>
                  <img
                    src={`http://localhost:5000/public/${picture.img}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </MyModal>
    );
  };

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
      </Container>

      <Row style={{ marginTop: "25px" }}>
        <Col>
          <Table striped responsive variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {product?.map((pro, i) => (
                <tr
                  key={i}
                  onClick={() => {
                    setProductModal(true);
                    setProductDetails(pro);
                  }}
                >
                  <td>{i + 1}</td>
                  <td>{pro.name}</td>
                  <td>{pro.price}</td>
                  <td>{pro.quantity}</td>
                  <td>{pro.category}</td>
                </tr>
              ))}
            </tbody>
          </Table>
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
      {productDetailModal()}
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
