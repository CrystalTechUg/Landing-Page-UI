import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./login.css";

const LogInForm = ({ showModal, setShowModal }) => {
  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div
          style={{
            backgroundColor: "var(--secondary-color)",
            borderRadius: "6px",
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Login Form
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)} style={{backgroundColor: 'gray', border: '1px solid gray'}}>Close</Button>
            <Button variant="success" onClick={() => {}} style={{backgroundColor: '#0FAE96'}}>
              Log In
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </div>
  );
};

export default LogInForm;
