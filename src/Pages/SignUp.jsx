import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import InputField from "../Components/UI/InputField";

function SignUp() {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Form className="border p-3 rounded mt-5 mx-auto">
        <Card.Title className="text-center mb-3">Sign Up</Card.Title>
        <Row>
          <Col md={6}>
            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter Email"
            />
          </Col>
          <Col md={6}>
            <InputField
              label="Email Address"
              type="email"
              placeholder="Enter Email"
            />
          </Col>
        </Row>
        <InputField label="Password" type="password" placeholder="Password" />

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Col>
  );
}

export default SignUp;
