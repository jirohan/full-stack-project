import React, { useEffect, useState } from 'react'
import { HeaderComponent } from '../../../components/HeaderComponent'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    let [data, setData] = useState({
        email: null,
        password: null
    })

    let navigate = useNavigate()

    const handleChange = (e) => {
            //let {name, type, value, checked, files} = e.target;
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Data:", data)
        //API integration
        let user_detail = {
            result: {
                user:  {_id: 12, name: "rohan", email: "rohanmaharjan@gmail.com", password: "admin123", role:"admin"},
                token: "jwttoken",
                }
            };
        //local storage
        //5mb
        //string, no time limit
        localStorage.setItem("_ecomm_user", JSON.stringify(user_detail.result.user));
        localStorage.setItem("_ecomm_token", (user_detail.result.token))
        //sessionStorage.setItem("_ecomm_user", JSON.stringify(user_detail))

        //let local_store_user = localStorage.getItem('__ecomm_user');

        // localStorage.clear();
        // localStorage.removeItem("_ecomm_user")
        //cookie => a domain can have 50 cookie, every cookie size is generally 4096 characters
        //string can only be stored, certain time
        //if success = ?? dashboard / admin
        navigate("/"+user_detail.result.user.role)
    }    

    useEffect(()=> {
        let token = localStorage.getItem("_ecomm_token");
        // console.log( `token = `,token )
        // console.log( `token = `,typeof( token) )
        let user = JSON.parse(localStorage.getItem("_ecomm_user"));
        // console.log( `user = `,user )

        if(token){
            navigate("/"+ user.role)
        }
    }, [])

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
                            <Button variant="success" type="submit" size='sm'>
                            <i className='fa fa-paper-plane'></i>&nbsp;
                                Login
                            </Button>
                            {/* <NavLink className={"btn btn-sm btn-success"} to="/admin">
                            <i className='fa fa-paper-plane'></i>&nbsp;
                                Login
                            </NavLink> */}
                        </Col>
                        
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default LoginPage