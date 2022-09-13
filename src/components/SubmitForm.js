import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import './styles/SubmitForm.css'
import { useState } from 'react';

function SubmitForm() {
  const [timestamp, setTimestamp] = useState ('')
  const [coordinates, setCoordinates] = useState ('')
  const [type, setType] = useState ('')
  const [description, setDescription] = useState ('')

  function handleSubmit (timestamp, coordinates, type, description) {


    fetch('https://everglades-api.web.app/activity/postactivity', {
    // fetch('localhost:9000/postactivity', {
      method: "POST" ,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({timestamp: timestamp, coordinates: coordinates, type: type, description: description})

    })
        .then((res) => res.json())
        .then(data => console.log(data))
        .catch((err) => console.log(err))

 }

 

  return (
    <Container className='formContain' style={{width: '35%',borderRadius: '5px', boxShadow: '5px 5px 5px lightGray' }}   >
    <Form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(timestamp, coordinates, type, description)}} style={{margin: '14rem 0 14rem 0' }}>  
      <Form.Group className="mb-3" controlId="SubmitForm.ControlInput1">  
        <Form.Label>Timestamp</Form.Label>
        <Form.Control required type="TimeStamp" placeholder="12/01/22 16:00" value={timestamp} onChange={(e) => (setTimestamp(e.target.value))}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="SubmitForm.ControlInput1">
        <Form.Label>Coordinates</Form.Label>
        <Form.Control required type="Coordinates" placeholder="Ex: 82.8628 S, 135.0000 E" value={coordinates} onChange={(e) => (setCoordinates(e.target.value))}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="SubmitForm.ControlTextarea1"/>  
        <Form.Label>Type of Activity</Form.Label>
        {/* <Form.Control type="Type" placeholder="Human Activity, Animal Activity or Other" value={type} onChange={(e) => (setType(e.target.value))}/> */}
          <Form.Select aria-label="Default select example" value={type} onChange={(e) => (setType(e.target.value))}>
            <option>Please Choose</option>
            <option value="Human Activity">Human</option>
            <option value="Animal Activity">Animal</option>
            <option value="Other Activity">Other</option>
          </Form.Select>
      <Form.Group className="mb-3" controlId="SubmitForm.ControlTextarea2">
        <Form.Label>Description of Activity</Form.Label>
        <Form.Control required as="textarea" type="description" rows={3} placeholder="Ex: large alligator seen" value={description} onChange={(e) => (setDescription(e.target.value))}/>
      </Form.Group>
      <Form.Group className='mb-3' style={{display: 'flex', justifyContent: 'center'}}>
      <Button variant="primary" type="submit" style={{margin: '0 0 1rem 0'}}>
        Submit
      </Button>
      </Form.Group>
    </Form>
    </Container>
  );
}

export default SubmitForm;
