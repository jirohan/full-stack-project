import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {useFormik} from "formik";
import * as Yup from "yup";

const RegisterPage = () => {

  let defaultValue = {
    name: "",
    email:"",
    password: "",
    role: "",
    status: "active",
    image: "",
    address: ""
  };

  let validate = Yup.object({
    name: Yup.string().required("Name is required").min(3),
    email:Yup.string().email().required(),
    password: Yup.string().required().min(8),
    role: Yup.string().required(),
    status: Yup.string().default("active"),
    image: Yup.object().nullable(),
    address: Yup.string().nullable()
  })

  let formik = useFormik({
    initialValues: defaultValue,
    validationSchema: validate,
    onSubmit: (values) => {
      console.log("Submit: ", values);
    }
  })
  
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
                    <Form onSubmit={formik.handleSubmit}>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Name: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="name"
                              onChange={formik.handleChange}
                              size='sm' 
                              type="text" 
                              placeholder="Enter your name..." 
                              required
                            />
                            <span className='text-danger'>{formik.errors?.name}</span>
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Email: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="email"
                              onChange={formik.handleChange}
                              size='sm' 
                              type="email" 
                              placeholder="Enter your email..." 
                              required
                            />
                            <span className='text-danger'>{formik.errors?.email}</span>
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Password: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="password"
                              onChange={formik.handleChange}
                              size='sm' 
                              type="password" 
                              placeholder="Enter your password..." 
                              required
                            />
                            <span className='text-danger'>{formik.errors?.password}</span>
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Address: </Form.Label>
                        <Col sm={9}>
                            <Form.Control 
                              name="address"
                              onChange={formik.handleChange}
                              size='sm' 
                              as={"textarea"} 
                              rows={7}
                              style={{resize: "none"}}
                              placeholder="Enter your Address..." 
                              required
                            />
                            <span className='text-danger'>{formik.errors?.address}</span>
                        </Col>
                      </Form.Group>
                      <Form.Group className="row mb-3">
                        <Form.Label className="col-sm-3">Role: </Form.Label>
                        <Col sm={9}>
                            <Form.Select 
                              name="role"
                              size='sm'
                              onChange={formik.handleChange} 
                              required
                            >
                               <option>--Select Any One---</option>
                               <option value="customer">Customer</option>  
                               <option value="seller">Seller</option>  
                            </Form.Select> 
                            <span className='text-danger'>{formik.errors?.role}</span> 
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
                                ext = ext.pop();
                                if(["jpg", "jpeg", "png", "bmp", "svg", "webp"].includes(ext.toLowerCase())){
                                  if(file.size <= 10000000){
                                    formik.setValues({
                                      ...formik.values,
                                      image: file
                                    })
                                  } else{
                                      formik.setErrors({
                                        ...formik.errors,
                                        image: "file size should be less than 10mb"
                                      })
                                  } } else {
                                    formik.setErrors({
                                      ...formik.errors,
                                      image: "file format not supported"
                                    })
                                  }
                              }}
                            />
                            <span className='text-danger'>{formik.errors?.image}</span>
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