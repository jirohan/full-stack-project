import React, { useState } from 'react'
import { HeaderComponent } from '../../../components/HeaderComponent'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'

const LoginPage = () => {
    let [data, setData] = useState({
        email: null,
        password: null
    })

    let navigate = useNavigate()

    const handleChange = (e) => {
        let {name, type, value, checked, files} = e.target;
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data:", data)

        //Api integration
        let user_detail = {result: {
            user: {_id: 123, name:"rohan", email: "rohanmaharjan@gmail.com", role: "admin"},
            token: "jwttoken"
        }};
        navigate("/"+user_detail.result.user.role)
    }
    
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
                    <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleChange} size='sm' defaultValue={data.email} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} defaultValue={data.password} type="password" placeholder="Password" />
                        </Form.Group>
                        <Col sm={{offset:3, span: 9}}>
                            <Button variant="danger" type="reset" className='me-1' size='sm'>
                            <i className='fa fa-trash'></i>&nbsp;
                                Submit
                            </Button>
                            {/* <NavLink className={"btn btn-sm btn-success"} to="/admin">
                            <i className='fa fa-paper-plane'></i>&nbsp;
                                Login
                            </NavLink> */}
                            <Button variant="success" type="submit" size='sm'>
                            <i className='fa fa-paper-plane'></i>&nbsp;
                                Login
                            </Button>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default LoginPage