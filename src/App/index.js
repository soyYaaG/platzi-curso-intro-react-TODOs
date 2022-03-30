import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext"
// import './App.css';

// const defaultTodos = [
//     { text: 'Cortar cebolla', completed: false },
//     { text: 'Cortar tomate', completed: true },
//     { text: 'Llorrar con la llorona', completed: false }
// ]

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    )
}
export default App;