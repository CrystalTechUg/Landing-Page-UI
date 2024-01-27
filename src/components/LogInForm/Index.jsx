import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './login.css';

const LogInForm = ({ showModal, setShowModal }) => {
    return (
        <div>
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShowModal(false)}>Close</Button>
                <Button variant="success" onClick={() => {}}>Log In</Button>
            </Modal.Footer>
          </Modal>
        </div>
    );
}

export default LogInForm;
