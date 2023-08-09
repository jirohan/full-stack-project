import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { users } from '../../mock/data'

const HomePage2 = () => {
    let data = users.result
  return (
    <>
       <Container>
        <Row>
            <Col sm={12}>
                <Col as={"h1"} bsPrefix='text-center'>User List</Col>
                <hr></hr>
                <Table bordered hover responsive size='sm'>
                    <thead className='table-dark'>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td>{item.role}</td>
                                    <td>{item.status}</td>
                                    <t>
                                        <Button variant='success' size="sm" className='me-3 btn-rounded'>
                                            <i class="fa-regular fa-pen-to-square"></i>
                                        </Button>
                                        <Button variant='danger' size="sm" className='btn-rounded'>
                                            <i class="fa-solid fa-trash-can"></i>
                                        </Button>
                                    </t>
                                </tr>
                            ))    
                        }
                    </tbody>

                </Table>
            </Col>
        </Row>
       </Container>
    </>
  )
}

export default HomePage2