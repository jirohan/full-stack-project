import React from 'react'
import {Navbar, Nav, Container, Row, Col} from "react-bootstrap";
import logo from "../../assets/image/logo.png"
import {NavLink} from "react-router-dom";

export const HeaderComponent = () => {
  return (
    <>
        {/* Nav Section Start */}
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} alt="logo" className='img img-fluid logo-image' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={"nav-link"} to="/">Home</NavLink>
            <NavLink className={"nav-link"} to="/about">About</NavLink>
            <NavLink className={"nav-link"} to="/service">Service</NavLink>
            <NavLink className={"nav-link"} to="/product">Product</NavLink>
            <NavLink className={"nav-link"} to="/contact">Contact</NavLink>
          </Nav>
          <Nav>
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
              Second 
            </Col>
            <Col sm={12} lg={4}>
              Third Col
            </Col>
          </Row>
        </Container>
      </footer>
  </>)
}