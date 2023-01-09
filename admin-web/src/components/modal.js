import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../components/style.css";

export function BodyModal({
    show,
    handleClose,
    handleTextChange,
    addTodo,
    text,
    error,
}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title fs-3">
                    Ангилал Нэмэх
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Нэр:</Form.Label>
                        <Form.Control
                            className="shake"
                            value={text}
                            onChange={handleTextChange}
                            type="name"
                            placeholder="Ангилалын Нэр"
                            autoFocus
                            style={{
                                borderColor: error && !text ? "red" : "#ced4da",
                            }}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="modal-footer justify-content-between">
                <Button
                    className="btn-light btn-outline-danger"
                    onClick={handleClose}
                >
                    Устгах
                </Button>
                <Button variant="primary" onClick={addTodo}>
                    Хадгалах
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
