import React from 'react'
import { Card, ListGroup, Container, Button, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const ToDoCard = (props) => {
    if (props.details.length === 0) {
        return (
            <div className='text-center'  >
                <h1>Excellent !!!, You have completed your tasks</h1>
                <div className='addButton'>
                    <Link to ="/add">
                        <button type="button" class="btn btn-primary">Add</button>
                    </Link>

                </div>
            </div>

        )
    } else {
        return (
            props.details.map((obj) => {
                return (
                    <div className='ToDoCard' key={obj.controlId}>
                        <Container className='mb-5'>
                            <Row className='bg-secondary p-4'>
                                <Col className="col-sm-3 col-md-6 col-lg-4 ">
                                    <Card style={{ width: '18rem' }} className="mx-auto my-auto">
                                        <Card.Header>Time:{obj.Time}</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Date:{obj.Date}</ListGroup.Item>
                                            <ListGroup.Item>Domain:{obj.Domain}</ListGroup.Item>
                                            <ListGroup.Item>Task:{obj.Task}</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                                <Col className="col-sm-9 col-md-6 col-lg-8 ">
                                    <Card style={{ width: '18rem' }} className="mx-auto my-auto">
                                        <Card.Body>
                                            <Card.Title>Description</Card.Title>

                                            <Card.Text>
                                                {obj.Description}
                                            </Card.Text>
                                            <Link to= {`/details/${obj.controlId}`} state={{from :obj}}>
                                            <Button variant="success" onClick={()=>{
                                            }}>Know more...</Button>
                                            </Link>
     
                                        </Card.Body>

                                        <Button variant='danger' onClick={() => {
                                            console.log('button clcked in todo', obj.controlId)
                                            props.deleteKey(obj.controlId)
                                        }}>Delete {obj.Task}</Button>
                                    </Card>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            })
        )
    }

}

export default ToDoCard