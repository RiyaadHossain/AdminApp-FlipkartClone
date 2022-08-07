import React from "react";
import Layout from "../Components/Layout";
import { Card } from "react-bootstrap";

function Home() {
  return (
    <>
      <Layout>
        <Card className="text-center container mt-5 py-4">
          <Card.Body>
            <Card.Title>Welcome To Admin Dashboard</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Layout>
    </>
  );
}

export default Home;
