import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from "react-bootstrap";

const ClientReviews = () => {
  var settings = {
    autoplaySpeed: 3000,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 3000,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container className='text-center'>
        <h1 className='mainTitle'>CLIENT SAYS</h1>
        <Slider {...settings}>
          <div>
            <Row className={"text-cente justify-content-center"}>
              <Col lg={6} md={6} sm={12}>
                <img
                  className='circleImg'
                  src='https://i.pngimg.me/thumb/f/720/7768585b92e44513aa69.jpg'
                  alt=''
                />
                <h1 className='caroselTitle'>Web Development</h1>
                <p className='caroselDesc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae provident temporibus maxime sapiente quisquam ipsa
                  soluta consequatur ad nemo pariatur est.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <Row className={"text-cente justify-content-center"}>
              <Col lg={6} md={6} sm={12}>
                <img
                  className='circleImg'
                  src='https://thumbs.dreamstime.com/z/woman-using-laptop-smartphone-office-beautiful-girl-texting-phone-woman-using-laptop-smartphone-office-beautiful-169854622.jpg'
                  alt=''
                />
                <h1 className='caroselTitle'>Web Development</h1>
                <p className='caroselDesc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae provident temporibus maxime sapiente quisquam ipsa
                  soluta consequatur ad nemo pariatur est.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <Row className={"text-cente justify-content-center"}>
              <Col lg={6} md={6} sm={12}>
                <img
                  className='circleImg'
                  src='https://thumbs.dreamstime.com/z/young-business-woman-computer-mobile-phone-101346055.jpg'
                  alt=''
                />
                <h1 className='caroselTitle'>Web Development</h1>
                <p className='caroselDesc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae provident temporibus maxime sapiente quisquam ipsa
                  soluta consequatur ad nemo pariatur est.
                </p>
              </Col>
            </Row>
          </div>
          <div>
            <Row className={"text-cente justify-content-center"}>
              <Col lg={6} md={6} sm={12}>
                <img
                  className='circleImg'
                  src='https://watermark.lovepik.com/photo/20211204/large/lovepik-business-women-working-in-cafe-with-laptop-picture_501530714.jpg'
                  alt=''
                />
                <h1 className='caroselTitle'>Web Development</h1>
                <p className='caroselDesc'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae provident temporibus maxime sapiente quisquam ipsa
                  soluta consequatur ad nemo pariatur est.
                </p>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default ClientReviews;
