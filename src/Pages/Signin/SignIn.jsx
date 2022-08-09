import { login } from "../../Actions";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import InputField from "../../Components/UI/InputField";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Col, Card, Container } from "react-bootstrap";

function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };
  if (auth.authticated) {
    console.log(auth.authticated);
    <Navigate to={"/"} />;
  }
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Button variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default SignIn;
