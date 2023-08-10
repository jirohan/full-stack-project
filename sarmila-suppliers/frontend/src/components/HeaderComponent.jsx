import React from 'react'
import {Navbar, Nav, Container, Row, Col} from "react-bootstrap";
import logo from "../assets/image/logo.png"

export const HeaderComponent = () => {
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
    </>
  )
}
