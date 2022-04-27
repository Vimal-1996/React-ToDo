import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import TimePicker from 'react-bootstrap-time-picker'


const AddComponent = (props) => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [Time, setTime] = useState("");
  const [Date, setDate] = useState("");
  const [Task, setTask] = useState("");
  const [Domain, setDomain] = useState("");
  const [Description, setDescription] = useState("");
  const newData = {}

  const submit = (e) => {
    e.preventDefault()
    setDatas([...datas, { controlId: Math.random(), Time: Time, Date: Date, Task: Task, Domain: Domain, Description: Description }])
    setTime("")
    setDate("")
    setTask("")
    setDomain("")
    setDescription("")
  }


  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas))
    props.getDatas(datas)
    if(datas.length!=0){
      navigate("/")
    }
    
  }, [datas])


  return (  
    <div className='AddComponent '>
      <div className='Heading ' >
        <h2 className='bg-secondary text-center text-white p-2'>Add Components</h2>
      </div>
      <Container>
        <Row>
          <Col className="col-sm-3 col-md-6 col-lg-6 mx-auto">
            <Form onSubmit={submit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Time</Form.Label>

                <Form.Control type="time" id="picker" placeholder="Enter Time" name="Time" value={Time} onChange={(e) => {
                  setTime(e.target.value)
                }} />


              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Date</Form.Label>

                <Form.Control type="date" placeholder="Enter Date" name="Date" value={Date} onChange={(e) => {
                  setDate(e.target.value)
                }} />


              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Domain</Form.Label>
                <Form.Control type="text" placeholder="Enter Domain" name="Domain" value={Domain} onChange={(e) => {
                  setDomain(e.target.value)
                }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Enter Task" name="Task" value={Task} onChange={(e) => {
                  setTask(e.target.value)
                }} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" name="Description" value={Description} onChange={(e) => {
                  setDescription(e.target.value)
                }} />
              </Form.Group>

              <div className='text-center'>

                <Button variant="primary" type="submit" >
                  Submit
                </Button>


              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AddComponent