import React from 'react'
import {Navbar, Nav, Container, Row, Col, Card} from "react-bootstrap";
import logo from "../../assets/image/logo.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/ecom-banner-1.jpeg";
import banner2 from "../../assets/image/ecom-banner-2.jpeg";
import banner3 from "../../assets/image/ecom-banner-3.png";
import offerImage from "../../assets/image/offer.png";
import offerImage2 from "../../assets/image/offer2.gif"

const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
        {/* Nav Section Start */}
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className='img img-fluid logo-image' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      {/* Nav Section End */}

      {/* Slider Banner Start */}
      <Slider {...settings}>
          <div>
            <img src={banner1} alt="" />
          </div>
          <div>
            <img src={banner2} alt="" />
          </div>
          <div>
            <img src={banner3} alt="" />
          </div>
        </Slider>
      {/* Slider Banner End */}

      {/* Offer Start */}
      <Container>
        <Row>
          <Col>
            <Nav.Link href='/'>
              <img src={offerImage2} className='img img-fluid' alt="" />
            </Nav.Link>
          </Col>
          <Col>
            <Nav.Link href='/'>
              <img src={offerImage} className='img img-fluid' alt="" />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
      {/* Offer End */}

      {/* Category Start */}
      <Container>
        <Row>
          <Col>
          <h1>Category</h1>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      {/* Category End */}
    </>
  )
}

export default HomePage