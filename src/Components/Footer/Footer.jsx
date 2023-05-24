import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <Container fluid={true} className=' footerSection'>
        <Row>
          <Col className='p-5' lg={3} md={6} sm={12}>
            <h1 className=' cardTitle'>Follow Me</h1>
            <a className='socialLink' href='#'>
              <FontAwesomeIcon icon={faFacebook} />
              Facebook
            </a>{" "}
            <br />
            <a className='socialLink' href='#'>
              <FontAwesomeIcon icon={faYoutube} />
              Youtube
            </a>
          </Col>
          <Col className='p-5' lg={3} md={6} sm={12}>
            <h1 className=' cardTitle'>Address</h1>
            <p className='caroselDesc'>Kadirgonj,Rajshahi,Bangladesh</p>
            <p className='caroselDesc'>
              <FontAwesomeIcon icon={faEnvelope} />
              shahinalomshuvo94@gmail.com
            </p>
            <p className='caroselDesc'>
              <FontAwesomeIcon icon={faPhone} />
              +8801723981861
            </p>
          </Col>
          <Col className='p-5' lg={3} md={6} sm={12}>
            <h1 className=' cardTitle'>Information</h1>
            <a className='footerLink' href=''>
              About Me
            </a>{" "}
            <br />
            <a className='footerLink' href=''>
              My Resume
            </a>{" "}
            <br />
            <a className='footerLink' href=''>
              Contact Me
            </a>{" "}
            <br />
          </Col>
          <Col className='p-5' lg={3} md={6} sm={12}>
            <h1 className='cardTitle'>Legal</h1>
            <a className='footerLink' href=''>
              Refund Policy
            </a>{" "}
            <br />
            <a className='footerLink' href=''>
              Terms & Condition
            </a>{" "}
            <br />
            <a className='footerLink' href=''>
              Privacy Policy
            </a>{" "}
            <br />
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className='text-center copyrightSection'>
        <a className='copyrightLink' href='#'>
          All Rights Reserved By Developer Shahin © 2023-2024
        </a>
      </Container>
    </>
  );
};

export default Footer;
