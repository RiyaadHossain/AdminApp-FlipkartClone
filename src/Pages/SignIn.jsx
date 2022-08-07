import React from "react";
import { Form, Button, Col, Card } from "react-bootstrap";
import InputField from "../Components/UI/InputField";

function SignIn() {
  return (
    <Col md={{ span: 6, offset: 3 }}>
      <Form className="border p-3 rounded mt-5 mx-auto">
        <Card.Title className="text-center mb-3">Sign In</Card.Title>
        <InputField
          label="Email Address"
          type="email"
          placeholder="Enter Email"
        />
        <InputField label="Password" type="password" placeholder="Password" />

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Col>
  );
}

export default SignIn;
