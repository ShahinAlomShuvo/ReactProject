import React from "react";

import { Container, Row, Col } from "react-bootstrap";
const PageTop = (props) => {
  return (
    <>
      <Container fluid={true} className='pageTopBanner p-0'>
        <div className='pageTopBannerOverlay'>
          <Container className='pageTopContent'>
            <Row>
              <Col className='text-center'>
                <h4 className='pageTitle'> {props.title} </h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default PageTop;
