import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import { users } from "../../mock/data";
import "./home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/ecom-banner-1.jpeg";
import banner2 from "../../assets/image/ecom-banner-2.jpeg";
import banner3 from "../../assets/image/ecom-banner-3.png";
import offerImage from "../../assets/image/offer-img.gif";
import offerImage3 from "../../assets/image/o.gif";
import image1 from "../../assets/image/airbuds.jpg"
import image2 from "../../assets/image/airphone.jpg"
import image3 from "../../assets/image/vivo.png"
import image4 from "../../assets/image/nord1.jpg"
import image5 from "../../assets/image/Oneplus.jpg"
import image6 from "../../assets/image/watch.jpg"
import { HeaderComponent } from "../../components/HeaderComponent";
import { NavLink } from "react-router-dom";


const HomePage = () => {
  //state maintain
  let [banner, setBanner] = useState();
  let [loading, setLoading] = useState(false);

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

  useEffect(()=> {
    
  });
  return (
    <>
      <HeaderComponent />
    
      {
        loading ? "Loading..." : 
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
      }

      {/* Offer List */}
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <NavLink to="/">
              <img  src={offerImage} alt="" />
            </NavLink>
          </Col>
        </Row>
      </Container>
      {/* Offer ends */}

       {/* Category Start */}
       <div className="bg-dark">
        <Container className='mt-3'>
          <Row>
            <Col>
              <h3 className="text-center text-white">Categories</h3>
            </Col>
          </Row>
          <hr className="text-white" />
          <Row>
            <Col>
            <NavLink to="/category/1">
             <Card>
                <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </NavLink>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image5} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image6} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
            <Card>
              <Card.Img variant="top" src={image1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image4} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image5} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={image6} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Category End */}

      {/* Offer List */}
      <Container className='mt-3'>
        <Row>
          <Col sm={12}>
            <NavLink to="/">
              <img className="center" src={offerImage3} alt="" />
            </NavLink>
          </Col>
        </Row>
      </Container>
      {/* Offer ends */}
    </>
  );
};

export default HomePage;
