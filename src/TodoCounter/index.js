import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css"

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <h1 className="soyYaaG">SoyYaaG</h1>
            <h2 className="TodoCounter">Has completado { completedTodos } de { totalTodos } TODOs</h2>
        </React.Fragment>
    );
}

export { TodoCounter };