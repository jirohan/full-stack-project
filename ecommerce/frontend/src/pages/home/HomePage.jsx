import React from 'react'
import {Navbar, Nav,  Container} from "react-bootstrap"
import { users } from '../../mock/data'
import "./home.css"


const HomePage = () => {
  //state maintain
  let data = users.result
  return (<>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default HomePage