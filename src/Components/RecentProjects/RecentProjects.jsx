import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const RecentProjects = () => {
  return (
    <>
      <Container className='text-center'>
        <h1 className='mainTitle'>Recent Projects</h1>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCards' style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600'
              />
              <Card.Body>
                <Card.Title className='projectsCardTitle'>
                  Card Title
                </Card.Title>
                <Card.Text className='projectsCardDesc'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCards' style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600'
              />
              <Card.Body>
                <Card.Title className='projectsCardTitle'>
                  Card Title
                </Card.Title>
                <Card.Text className='projectsCardDesc'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Card className='projectCards' style={{ width: "18rem" }}>
              <Card.Img
                variant='top'
                src='https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=600'
              />
              <Card.Body>
                <Card.Title className='projectsCardTitle'>
                  Card Title
                </Card.Title>
                <Card.Text className='projectsCardDesc'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant='primary'>Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecentProjects;
