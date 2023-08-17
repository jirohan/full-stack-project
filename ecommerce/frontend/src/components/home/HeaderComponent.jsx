import React from 'react'
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/image/logo.svg"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa"
import { NavLink } from 'react-router-dom';

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
            <NavLink className={"nav-link"} to="/adhamrodeal">Advertise on HamroDeal |</NavLink>
            <NavLink className={"nav-link"} to="/sellhamrodeal">Sell on HamroDeal</NavLink>
          </Nav>
        </Container>
      </Navbar>
      {/* TopBar End */}

      {/* Nav Section Start */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} alt="" className="img img-fluid logo-image" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">Home</NavLink>
            <NavLink className={"nav-link"} to="/category">Category</NavLink>
            <NavLink className={"nav-link"} to="/products">Products</NavLink>
          </Nav>
          <Nav>
            <NavLink className={"nav-link"} to="/cart">Cart {0}</NavLink>

            <NavLink className={"nav-link"} to="/login">Login</NavLink>
            <NavLink className={"nav-link"} to="/register">Register</NavLink>
          </Nav>
        </Container>
      </Navbar>
      {/* Nav Section End */}
    </>
  )
}

export const FooterComponent = () => {
  return(
  <>
    <footer className='bg-dark'>
        <Container fluid>
          <Row>
            <Col sm={12} lg={4}>
              First Col
            </Col>
            <Col sm={12} lg={4}>
              Second Col
            </Col>
            <Col sm={12} lg={4}>
              Third Col
            </Col>
          </Row>
        </Container>
      </footer>
  </>)
}