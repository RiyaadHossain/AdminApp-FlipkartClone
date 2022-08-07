import React from "react";
import { Form, Button, Col, Card, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../Actions";
import InputField from "../Components/UI/InputField";

function SignIn() {
  
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email: "riyad@gmail.com", password: "123456" };
    dispatch(login(user));
  };

  return (
    <Container>
      <Col md={{ span: 6, offset: 3 }}>
        <Form
          onSubmit={handleLogin}
          className="border p-3 rounded mt-5 mx-auto"
        >
          <Card.Title className="text-center mb-3">Sign In</Card.Title>
          <InputField
            label="Email Address"
            type="email"
            placeholder="Enter Email"
            onClick={() => {}}
            value=""
          />
          <InputField label="Password" type="password" placeholder="Password" />

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default SignIn;
