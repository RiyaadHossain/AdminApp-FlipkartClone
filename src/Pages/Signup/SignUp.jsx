import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signup } from "../../Actions/userAction";
import InputField from "../../Components/UI/InputField";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, userName, email, password }
    dispatch(signup(user));
  };

  return (
    <Container>
      <Col md={{ span: 6, offset: 3 }}>
        <Form
          onSubmit={handleSignUp}
          className="border p-3 rounded mt-5 mx-auto"
        >
          <Card.Title className="text-center mb-3">Sign Up</Card.Title>
          <Row>
            <Col md={6}>
              <InputField
                label="First Name"
                type="text"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </Col>
            <Col md={6}>
              <InputField
                label="Last Name"
                type="text"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </Col>
          </Row>
          <InputField
            label="User Name"
            type="username"
            placeholder="Enter User Name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
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
            Sign Up
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default SignUp;
