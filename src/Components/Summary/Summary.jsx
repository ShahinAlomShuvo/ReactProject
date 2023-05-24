import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Summary = () => {
  return (
    <>
      <Container fluid={true} className='summaryBanner summarySection p-0'>
        <div className='summaryBannerOverlay'>
          <Container className='text-center'>
            <Row>
              <Col lg={8} md={6} sm={12}>
                <Row className='countSection'>
                  <Col>
                    <h1 className='countNumber'>
                      <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>

                    <h4 className='countTitle '>Total Project</h4>
                    <hr className='hrElements' />
                  </Col>
                  <Col>
                    <h1 className='countNumber'>
                      <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className='countTitle '>Total Client</h4>
                    <hr className='hrElements' />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Card className='workCard'>
                  <Card.Body>
                    <Card.Title className='cardTitle'>How i Work</Card.Title>
                    <Card.Text>
                      <p className='cardSubTitle'>
                        <FontAwesomeIcon
                          className='iconBullet'
                          icon={faCircleCheck}
                        />{" "}
                        Requirements Gathering
                      </p>
                      <p className='cardSubTitle'>
                        <FontAwesomeIcon
                          className='iconBullet'
                          icon={faCircleCheck}
                        />{" "}
                        System Analaycis
                      </p>
                      <p className='cardSubTitle'>
                        <FontAwesomeIcon
                          className='iconBullet'
                          icon={faCircleCheck}
                        />{" "}
                        Coding Testing
                      </p>
                      <p className='cardSubTitle'>
                        <FontAwesomeIcon
                          className='iconBullet'
                          icon={faCircleCheck}
                        />{" "}
                        Implimentation
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Summary;
