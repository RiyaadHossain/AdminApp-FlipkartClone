import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import InputField from "../../Components/UI/InputField";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Col, Row, Button, Container } from "react-bootstrap";
import { addCategory, getAllCategory } from "../../Actions/categoryAction";
import MyModal from "../../Components/UI/MyModal";

function Category() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [cateName, setCateName] = useState("");
  const [subCateName, setSubCateName] = useState("");
  const [cateImg, setCateImg] = useState("");
  const categories = useSelector((state) => state.category.categories);

  /* Add Category to Database */
  const handleSubmit = () => {
    const form = new FormData();
    form.append("name", cateName);
    form.append("parentId", subCateName);
    form.append("categoryImg", cateImg);
    dispatch(addCategory(form));
    setShow(false);
  };

  /* Print all the Category and Sub-category */
  const showCategory = (categories) => {
    let myCategory = [];
    for (const category of categories) {
      myCategory.push(
        <li key={category.name}>
          {category.name}
          {category.children ? (
            <ul>{showCategory(category.children)}</ul>
          ) : null}
        </li>
      );
    }

    return myCategory;
  };

  /* Show Category in Select Options */
  const printCateSelect = (categories, options = []) => {
    for (const category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
        type: category.type,
      });

      if (category.children.length > 0) {
        printCateSelect(category.children, options);
      }
    }

    return options;
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1>Category</h1>
              <Button variant="primary" onClick={() => setShow(true)}>
                Add Category
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <ul>{showCategory(categories)}</ul>
          </Col>
        </Row>
      </Container>

      <MyModal
        show={show}
        setShow={setShow}
        title="Add Category"
        buttonName="Add Category"
        handleSubmit={handleSubmit}
      >
        <InputField
          type="text"
          placeholder="Category Name"
          value={cateName}
          onChange={(e) => setCateName(e.target.value)}
        />
        <select
          className="form-control"
          value={subCateName}
          onChange={(e) => setSubCateName(e.target.value)}
        >
          <option>Select Category</option>
          {printCateSelect(categories).map((cate) => (
            <option key={cate.value} value={cate.value}>
              {cate.name}
            </option>
          ))}
        </select>
        <InputField
          type="file"
          onChange={(e) => setCateImg(e.target.files[0])}
        />{" "}
      </MyModal>
    </Layout>
  );
}

export default Category;

/* 
<Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Category</Modal.Title>
          </Modal.Header>

          <Modal.Body>
           
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Add Category
            </Button>
          </Modal.Footer>
</Modal> 
    */
