import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BodyModal } from "./modal";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";
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
    const [editing, setEditing] = useState();
    const [editingTexts, setEditingTexts] = useState({});

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function addTodo() {
        if (text === "") {
            setError("Утга оруулна уу!!!");
        } else {
            if (editing === undefined) {
                const newTodo = {
                    text: text,
                    done: false,
                    id: uuidv4(),
                };
                const newTodos = [newTodo, ...todos];
                setTodos(newTodos);
            } else {
                const newTodos = [...todos];
                newTodos[editing].text = text;
                setTodos(newTodos);
                setEditing(undefined);
            }
            handleClose();
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

    function editTodInline(id, index) {
        const newEditingTexts = { ...editingTexts };
        newEditingTexts[id] = todos[index].text;
        setEditingTexts(newEditingTexts);
    }

    function handleEditingText(id, event) {
        const newEditingTexts = { ...editingTexts };
        newEditingTexts[id] = event.target.value;
        setEditingTexts(newEditingTexts);
    }

    function cancelEditing(id) {
        const newEditingTexts = { ...editingTexts };
        newEditingTexts[id] = undefined;
        setEditingTexts(newEditingTexts);
    }

    function updateEditingText(index, id) {
        const newTodos = [...todos];
        newTodos[index].text = editingTexts[id];
        setTodos(newTodos);

        cancelEditing(id);
    }

    function handleKeyUp(event) {
        if (event.code === "Enter") {
            addTodo();
        }
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
                <React.Fragment
                    key={todo.id}
                    // style={{
                    //     textDecoration: todo.done ? "line-through" : "none",
                    // }}
                >
                    <div
                        className="card w-50"
                        style={{
                            opacity: todo.done ? "50%" : "100%",
                        }}
                    >
                        <div className="card-body d-flex align-items-center justify-content-between">
                            {editingTexts[todo.id] !== undefined ? (
                                <React.Fragment className="d-flex">
                                    <Form.Control
                                        value={editingTexts[todo.id]}
                                        onChange={(event) =>
                                            handleEditingText(todo.id, event)
                                        }
                                    />
                                    {/* <input
                                        style={editingInputStyle}
                                        value={editingTexts[todo.id]}
                                        onChange={(event) =>
                                            handleEditingText(todo.id, event)
                                        }
                                    ></input> */}
                                    <div className="d-flex">
                                        <Button
                                            className="btn-success d-flex"
                                            onClick={() =>
                                                updateEditingText(
                                                    index,
                                                    todo.id
                                                )
                                            }
                                        >
                                            Хадгалах
                                        </Button>
                                        <Button
                                            className="btn-dark ms-2 d-flex"
                                            onClick={() =>
                                                cancelEditing(todo.id)
                                            }
                                        >
                                            Болих
                                        </Button>
                                        <Button
                                            className="btn-danger ms-2 d-flex  "
                                            onClick={() => handleDelete(index)}
                                        >
                                            Устгах
                                        </Button>
                                    </div>
                                </React.Fragment>
                            ) : (
                                <React.Fragment className="d-flex">
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            onChange={(event) =>
                                                handleDoneChange(todo.id, event)
                                            }
                                        />
                                        <span
                                            className="ms-3"
                                            style={{
                                                textDecoration: todo.done
                                                    ? "line-through"
                                                    : "none",
                                            }}
                                        >
                                            {todo.text}
                                        </span>
                                    </div>
                                    <div className="d-flex">
                                        <Button
                                            disabled={todo.done}
                                            className="btn-warning d-flex"
                                            onClick={() =>
                                                editTodInline(todo.id, index)
                                            }
                                        >
                                            Засах
                                        </Button>
                                        <Button
                                            disabled={todo.done}
                                            className="btn-danger ms-2 d-flex  "
                                            onClick={() => handleDelete(index)}
                                        >
                                            Устгах
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
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
                handleKeyUp={handleKeyUp}
                // closeOrNew={closeOrNew}
            />
        </Container>
    );
}
