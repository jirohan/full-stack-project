import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const RegisterPage = () => {

  let defaultValue = {
    name: "",
    email:"",
    password: "",
    role: "",
    status: "",
    image: "",
    address: ""
  };

  return (
    <>
        <Container>
          <Row>
            <Col>
              <h1 className='text-center'>Register Page</h1>
            </Col>
          </Row>
          <Row>
                <Col>
                    <Form>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Name: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="name"
                              
                              size='sm' 
                              type="text" 
                              placeholder="Enter your name..." 
                              required
                            />
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Email: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="email"
                              
                              size='sm' 
                              type="email" 
                              placeholder="Enter your email..." 
                              required
                            />
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Password: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="password"
                              
                              size='sm' 
                              type="password" 
                              placeholder="Enter your password..." 
                              required
                            />
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Address: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="address"
                              
                              size='sm' 
                              as={"textarea"} 
                              rows={7}
                              style={{resize: "none"}}
                              placeholder="Enter your Address..." 
                              required
                            />
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Role: </Form.Label>
                        <Col sm={9}>
                            <Form.Select 
                              name="role"
                              size='sm' 
                              required
                            >
                               <option>--Select Any One---</option>
                               <option value="customer">Customer</option>  
                               <option value="seller">Seller</option>  
                            </Form.Select> 
                             
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Image: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="image"
                              type='file' 
                              accept='image/*'
                              onChange={(e)=>{
                                let {files} = e.target;
                                let file = files[0];
                                let ext = file.name.split(".");
                                ext = rxt.pop();
                              }}
                            />
                        </Col>
                      </Form.Group>
                      
                      <Form.Group className="row mb-3">
                        <Col sm={{offset:3, span: 9}}>
                          <Button variant="danger" type="reset" className='me-1' size='sm'>
                          <i className='fa fa-trash'></i>&nbsp;
                              Cancel
                          </Button>
                          <Button variant="success" type="submit" size='sm'>
                          <i className='fa fa-paper-plane'></i>&nbsp;
                              Submit
                          </Button>
                        </Col>
                     </Form.Group>
                    </Form>
                </Col>
            </Row>        
        </Container>
    </>
  )
}

export default RegisterPage