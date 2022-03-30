import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();

        if (newTodoValue.length > 2) {
            addTodo(newTodoValue);
            setOpenModal(false);
        }
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="txtTodo">Escribe tu nuevo TODO</label>

            <textarea
                placeholder="Escribe una nueva tarea"
                value={newTodoValue}
                onChange={onChange}
                id="txtTodo"
                rows={5}
            />

            <div className="flex justify-end">
                <button className="btn" type="button" onClick={onCancel}>Cancelar</button>
                <button className="btn btnAdd" type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm } ;