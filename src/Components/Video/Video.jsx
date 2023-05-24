import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { BigPlayButton, Player } from "video-react";

const Video = () => {
  const [show, setShow] = useState(false);

  const modalClose = () => {
    setShow(false);
  };

  const modalOpen = () => {
    setShow(true);
  };

  return (
    <>
      <Container className='text-center videoContainer'>
        <Row>
          <Col lg={12} md={12} sm={12} className='videoCard'>
            <div>
              <p className='videoTitle'> How I Do</p>
              <p className='videoDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                necessitatibus perferendis recusandae commodi error ut eligendi
                officia expedita enim itaque nulla voluptates voluptatem
                laboriosam, ducimus, autem assumenda perspiciatis! Voluptatibus,
                necessitatibus.
              </p>
              <p>
                <FontAwesomeIcon
                  onClick={modalOpen}
                  className='playBtn'
                  icon={faPlayCircle}
                />
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal size='lg' show={show} onHide={modalClose}>
        <Modal.Body>
          <Player>
            <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
            <BigPlayButton position='center' />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Video;
