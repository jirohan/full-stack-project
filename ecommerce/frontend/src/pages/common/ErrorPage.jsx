import React from 'react'
import { HeaderComponent } from '../../components/home/HeaderComponent'
import { Col, Container, Row } from 'react-bootstrap'

const ErrorPage = ({error}) => {
  return (
    <>
        <HeaderComponent />
        <Container>
            <Row>
                <Col className='text-danger fond-bold'>
                    {
                    error === 404 ? "Resource not Found" : "Server Not Found"
                    }
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default ErrorPage