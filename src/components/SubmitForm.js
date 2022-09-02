import Form from 'react-bootstrap/Form';

function SubmitForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Coordinates</Form.Label>
        <Form.Control type="Coordinates" placeholder="82.8628 S, 135.0000 E" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Animal Activity">
        <Form.Label>Type of Activity</Form.Label>
        <Form.Control as="textarea" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="A large alligator is seen">
        <Form.Label>Description of Activity</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
    </Form>
  );
}

export default SubmitForm;
