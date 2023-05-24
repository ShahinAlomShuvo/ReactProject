import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const TopBanner = () => {
  return (
    <>
      <Container fluid={true} className='topFixedBanner p-0 text-center'>
        <div className='topFixedBannerOverlay'>
          <Container className='topContent'>
            <Row>
              <Col>
                <h1 className='topTitle'>Software Engineer</h1>
                <p className='topSubTitle'>Web & Mobile Application</p>
                <Button variant='primary'>More Info</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default TopBanner;
