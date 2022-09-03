import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function SubmitForm() {
  return (
    <Container>
    <Form>
      <Form.Group className="mb-3" controlId="SubmitForm.ControlInput1">
        <Form.Label>Coordinates</Form.Label>
        <Form.Control type="Coordinates" placeholder="Ex: 82.8628 S, 135.0000 E" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="SubmitForm.ControlTextarea1">  
        <Form.Label>Type of Activity</Form.Label>
        <Form.Control as="textarea" placeholder="Human Activity, Animal Activity or Other"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="SubmitForm.ControlTextarea2">
        <Form.Label>Description of Activity</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Ex: large alligator seen"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default SubmitForm;
