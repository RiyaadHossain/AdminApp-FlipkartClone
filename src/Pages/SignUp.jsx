import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import InputField from "../Components/UI/InputField";

function SignUp() {
  return (
    <Container>
      <Col md={{ span: 6, offset: 3 }}>
        <Form className="border p-3 rounded mt-5 mx-auto">
          <Card.Title className="text-center mb-3">Sign Up</Card.Title>
          <Row>
            <Col md={6}>
              <InputField
                label="First Name"
                type="text"
                placeholder="First Name"
                onClick={() => {}}
                value=""
              />
            </Col>
            <Col md={6}>
              <InputField
                label="Last Name"
                type="text"
                placeholder="Last Name"
                onClick={() => {}}
                value=""
              />
            </Col>
          </Row>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter Email"
            onClick={() => {}}
            value=""
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            onClick={() => {}}
            value=""
          />

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default SignUp;
