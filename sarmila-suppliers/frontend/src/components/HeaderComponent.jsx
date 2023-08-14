import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "../assets/image/logo.png"
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
