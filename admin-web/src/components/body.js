import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

export function Body() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="d-flex flex-column align-items-center">
      <div className="d-flex w-50 mt-5 mb-5 justify-content-between">
        <h1>Ангилал</h1>
        <Button
          style={{ marginRight: "16px" }}
          onClick={handleShow}
          className="btn-light btn-outline-primary align-items-center"
        >
          Шинэ
        </Button>
      </div>
      <div className="card w-50">
        <div className="card-body d-flex align-items-center">
          Улс Төр
          <Button className="btn-light ms-auto d-flex  ">Засах</Button>
        </div>
      </div>
      <br />
      <div className="card w-50">
        <div className="card-body d-flex align-items-center">
          Нийгэм
          <Button className="btn-light ms-auto d-flex  ">Засах</Button>
        </div>
      </div>
      <br />
      <div className="card w-50">
        <div className="card-body d-flex align-items-center">
          Спорт
          <Button className="btn-light ms-auto d-flex  ">Засах</Button>
        </div>
      </div>
      <br />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title fs-3">Ангилал Нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Нэр:</Form.Label>
              <Form.Control type="name" placeholder="Ангилалын Нэр" autoFocus />
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
          <Button variant="primary" onClick={handleClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
