import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import EditForm from "./EditForm";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Container from "@mui/material/Container";
import { Dialog } from "@mui/material";
import styles from './Todo.module.scss';



const Todo = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);

    const [editTodo, setEditTodo] = useState({});


    const handleEditTodo = (todo) => {
        setIsOpenEditModal(true);
        setEditTodo(todo);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            title: name,
            id: uuidv4(),
            checked: false,
            createdAt: new Date().getTime(),
        };

        setItems((prevState) => [...prevState, newTodo]);
        setIsOpenModal(false);
    };

    const handleDeleteTodo = (id) => {
        const filterItems = items.filter((todo) => todo.id !== id);
        setItems(filterItems);
    };

    const handleCheckedTodo = (id) => {
        const data = items.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    checked: !todo.checked,
                };
            }
            return todo;
        });
        setItems(data);
    };

    const handleSubmitEditForm = (e, newTitle) => {
        e.preventDefault();

        const data = items.map((todo) => {
            if (todo.id === editTodo.id) {
                return {
                    ...todo,
                    title: newTitle,
                };
            }
            return todo;
        });
        setItems(data);
        setIsOpenEditModal(false);
    };

    return (
        <Container maxWidth="md">
            <h1>Todo list: {items.length}</h1>

            <Button
                type="submit"
                variant="contained"
                size="small"
                color="info"
                onClick={() => setIsOpenModal(true)}
            >
                Add todo
            </Button>
            <Dialog
                onClose={() => setIsOpenModal(false)}
                open={isOpenModal}
            >
                <form className={styles.TodoForm} onSubmit={handleFormSubmit}>
                    <h2>Add todo</h2>

                    <Input
                        color="info"
                        placeholder="add todo"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        color="info"
                        disabled={name.trim().length < 1}
                    >
                        Add todo
                    </Button>
                </form>
            </Dialog>

            {editTodo.title && (
                <EditForm
                    isOpen={isOpenEditModal}
                    onClose={setIsOpenEditModal}
                    editTodo={editTodo}
                    onSubmit={handleSubmitEditForm}
                />
            )}

            <div>
                {items.length > 0 &&
                    items.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={handleDeleteTodo}
                            onEdit={handleEditTodo}
                            onChecked={handleCheckedTodo}
                        />
                    ))}
            </div>
        </Container>
    );
};

export default Todo;
