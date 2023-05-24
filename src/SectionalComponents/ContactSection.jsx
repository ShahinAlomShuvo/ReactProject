import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faHome } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h1 className=' cardTitle'>Quick Connect</h1>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label className='contactSectionTitle'>Name</Form.Label>
                <Form.Control type='text' />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label className='contactSectionTitle'>
                  Email Address
                </Form.Label>
                <Form.Control type='email' />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label className='contactSectionTitle'>Message</Form.Label>
                <Form.Control as='textarea' rows='3' type='text-' />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <h1 className=' cardTitle'>Discuss Now</h1>
            <p className='caroselDesc'>
              <FontAwesomeIcon className='socialIcons' icon={faHome} />
              <span className='socialSpaces'>
                Kadirgonj,Rajshahi,Bangladesh
              </span>
            </p>
            <p className='caroselDesc'>
              <FontAwesomeIcon className='socialIcons' icon={faEnvelope} />
              <span className='socialSpaces'>shahinalomshuvo94@gmail.com</span>
            </p>
            <p className='caroselDesc'>
              <FontAwesomeIcon className='socialIcons' icon={faPhone} />
              <span className='socialSpaces'>+8801723981861</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactSection;
