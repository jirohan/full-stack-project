import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { users } from "../../mock/data";
import "./home.css";
import logo from "../../assets/image/logo.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/ecom-banner-1.jpeg";
import banner2 from "../../assets/image/ecom-banner-2.jpeg";
import banner3 from "../../assets/image/ecom-banner-3.png";
import offerImage from "../../assets/image/offer-img2.gif";

const HomePage = () => {
  //state maintain
  let data = users.result;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };
  return (
    <>
      {/* Nav Section Start */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" className="img img-fluid logo-image" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#category">Category</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">Cart {0}</Nav.Link>

            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Nav Section End */}

      {/* Slider Banner Start */}
      <Slider {...settings}>
          <div>
            <img src={banner1} alt="banner-1" />
          </div>
          <div>
            <img src={banner2} alt="banner-2" />
          </div>
          <div>
            <img src={banner3} alt="banner-3" />
          </div>
      </Slider>
      {/* Slider Banner End */}

      {/* Offer List */}
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Nav.Link href="/">
              <img className="img img-fluid" src={offerImage} alt="" />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
