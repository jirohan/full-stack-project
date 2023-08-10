import React from 'react'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/image/logo.svg"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"

export const HeaderComponent = () => {
  return (
    <>
        {/* TopBar Start */}
      <Navbar bg="light" data-bs-theme="light" style={{maxHeight: "20px"}}>
        <Container>
          <Row>
            <Col className="py-3">
              <span className="me-3"><span className="text-dark me-4">Connect with us</span><FaFacebook /></span>
              <span className="me-3"><FaInstagram /></span>
              <span><FaTwitter /></span>
            </Col>
          </Row>
          <Nav>
            <Nav.Link href="/adhamrodeal">Advertise on HamroDeal |</Nav.Link>
            <Nav.Link href="#sellhamrodeal">Sell on HamroDeal</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* TopBar End */}

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
    </>
  )
}
