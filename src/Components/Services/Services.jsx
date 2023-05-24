import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  faDesktop,
  faMobileScreenButton,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
  return (
    <>
      <Container>
        <h1 className='mainTitle'>My Services</h1>
        <Row>
          <Col className='serviceCardCols' lg={4} md={6} sm={12}>
            <Card className='serviceCard' style={{ width: "18rem" }}>
              <FontAwesomeIcon className='serviceCardIcon' icon={faDesktop} />
              <Card.Body>
                <Card.Title className='serviceCardTitle'>
                  Web Development
                </Card.Title>
                <Card.Text className='serviceCardSubTitle'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.and make up the bulk of the
                  card's content example.
                </Card.Text>
                <div className='d-flex justify-content-center'>
                  <Button variant='primary'>Enroll</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className='serviceCardCols' lg={4} md={6} sm={12}>
            <Card className='serviceCard' style={{ width: "18rem" }}>
              <FontAwesomeIcon
                className='serviceCardIcon'
                icon={faMobileScreenButton}
              />
              <Card.Body>
                <Card.Title className='serviceCardTitle'>
                  Mobile Development
                </Card.Title>
                <Card.Text className='serviceCardSubTitle'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.and make up the bulk of the
                  card's content example.
                </Card.Text>
                <div className='d-flex justify-content-center'>
                  <Button variant='primary'>Enroll</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col className='serviceCardCols' lg={4} md={6} sm={12}>
            <Card className='serviceCard' style={{ width: "18rem" }}>
              <FontAwesomeIcon className='serviceCardIcon' icon={faGear} />
              <Card.Body>
                <Card.Title className='serviceCardTitle'>
                  Graphic Design
                </Card.Title>
                <Card.Text className='serviceCardSubTitle'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.and make up the bulk of the
                  card's content example.
                </Card.Text>
                <div className='d-flex justify-content-center'>
                  <Button variant='primary'>Enroll</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
