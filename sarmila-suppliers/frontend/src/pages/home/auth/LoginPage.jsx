import React, { useState } from 'react'
import { HeaderComponent } from '../../../components/HeaderComponent'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'

const LoginPage = () => {
    let [data, setData] = useState({
        email: "test@user.com",
        password: "admin123"
    })
  return (
    <>
        <HeaderComponent />
        <Container>
            <Row>
                <Col>
                    <h4 className='text-center'>Login Page</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control size='sm' defaultValue={data.email} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control defaultValue={data.password} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default LoginPage