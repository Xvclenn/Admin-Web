import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BodyModal } from "./modal";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

// const categories = [
//     { id: "1", name: "Улс Төр" },
//     { id: "2", name: "Спорт" },
//     { id: "3", name: "Спорт" },
// ];

export function Body() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function addTodo() {
        if (text === "") {
            setError("Утга оруулна уу!!!");
        } else {
            const newTodo = {
                text: text,
                done: false,
                id: uuidv4(),
            };
            handleClose();
            const newTodos = [newTodo, ...todos];
            setTodos(newTodos);
            setText("");
            setError("");
        }
    }

    function handleDelete(bairlal) {
        if (window.confirm("Та устгахдаа итгэлтэй байна уу?")) {
            const newTodos = [...todos];
            newTodos.splice(bairlal, 1);
            setTodos(newTodos);
        }
    }

    function handleDoneChange(id) {
        const newTodos = [...todos];

        let index;

        for (let i = 0; i < todos.length; i++) {
            if (id === todos[i].id) {
                index = i;
                break;
            }
        }

        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
    }

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

            {todos.map((todo, index) => (
                <React.Fragment key={todo.id}>
                    <div className="card w-50">
                        <div className="card-body d-flex align-items-center">
                            {todo.text}
                            <Button className="btn-warning ms-auto d-flex">
                                Засах
                            </Button>
                            <Form.Check
                                onChange={() => handleDoneChange(todo.id)}
                            />
                            <Button
                                className="btn-danger ms-2 d-flex  "
                                onClick={() => handleDelete(index)}
                            >
                                Устгах
                            </Button>
                        </div>
                    </div>
                    <br />
                </React.Fragment>
            ))}

            <BodyModal
                show={show}
                handleClose={handleClose}
                handleTextChange={handleTextChange}
                addTodo={addTodo}
                text={text}
                setError={setError}
                error={error}
                // closeOrNew={closeOrNew}
            />
        </Container>
    );
}
