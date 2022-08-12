import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
// import { useDispatch, useSelector } from "react-redux/es/exports";
import { Col, Row, Button, Modal, Container } from "react-bootstrap";
import InputField from "../../Components/UI/InputField";

function Product() {

  const [show, setShow] = useState(false);

  /* To Handle Submit */
  const handleSubmit = () => {}

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

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputField
            type="text"
            placeholder="Category Name"
            value
            onChange
          />
          
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  </Layout>
  );
}

export default Product;
