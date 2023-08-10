import React from 'react'
import {Navbar, Nav, Container, Row, Col, Card} from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/image/ecom-banner-1.jpeg";
import banner2 from "../../assets/image/ecom-banner-2.jpeg";
import banner3 from "../../assets/image/ecom-banner-3.png";
import offerImage from "../../assets/image/offer.png";
import offerImage2 from "../../assets/image/offer2.gif"
import product1 from '../../assets/image/product1.jpg';
import product2 from '../../assets/image/product2.jpg';
import product3 from '../../assets/image/product3.jpg';
import product4 from '../../assets/image/product4.jpg';
import product5 from '../../assets/image/product5.jpg';
import product6 from '../../assets/image/product6.jpg';
import product7 from '../../assets/image/product7.jpg';
import product8 from '../../assets/image/product8.jpg';
import product9 from '../../assets/image/product9.jpg';
import product10 from '../../assets/image/product10.jpg';
import product11 from '../../assets/image/product11.jpg';
import product12 from '../../assets/image/product12.jpg';
import { HeaderComponent } from '../../components/HeaderComponent';

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
        
      <HeaderComponent />
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
      <div className='bg-light'>
        <Container className='mt-3'>
          <Row>
            <Col>
              <h2 className='text-center'>Products</h2>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
            <Card>
              <Card.Img variant="top" src={product1} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product2} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product3} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product4} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product5} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            
            <Card>
              <Card.Img variant="top" src={product6} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col>
            <Card>
              <Card.Img variant="top" src={product7} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product8} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product9} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product10} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Img variant="top" src={product11} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
            <Col>
            
            <Card>
              <Card.Img variant="top" src={product12} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Category End */}

      {/* Footer Start */}
      <footer className='bg-dark'>
        <Container fluid>
          <Row>
            <Col sm={12} lg={4}>
              About
            </Col>
            <Col sm={12} lg={4}>
              About
            </Col>
            <Col sm={12} lg={4}>
              About
            </Col>
          </Row>
        </Container>
      </footer>
      {/* Footer End */}
    </>
  )
}

export default HomePage