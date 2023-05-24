import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutDesc = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 className='aboutDescTitle'>Who I Am</h1>
            <hr />
            <p className='aboutDescText'>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, ex ullam. Id magni quam facere, pariatur recusandae
              voluptate molestias? Neque temporibus libero quo labore
              necessitatibus nobis iure repellendus dignissimos deleniti.{" "}
            </p>

            <h1 className='aboutDescTitle'>My Mission</h1>
            <hr />
            <p className='aboutDescText'>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, ex ullam. Id magni quam facere, pariatur recusandae
              voluptate molestias? Neque temporibus libero quo labore
              necessitatibus nobis iure repellendus dignissimos deleniti.{" "}
            </p>

            <h1 className='aboutDescTitle'>My Vission</h1>
            <hr />
            <p className='aboutDescText'>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, ex ullam. Id magni quam facere, pariatur recusandae
              voluptate molestias? Neque temporibus libero quo labore
              necessitatibus nobis iure repellendus dignissimos deleniti.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutDesc;
