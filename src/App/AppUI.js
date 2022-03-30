import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos"

function AppUI() {
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />

            <div className="grid justify-items-center mx-2 md:m-0">
                <TodoSearch />

                <TodoList>
                    { error && <TodosError /> }
                    { loading && <TodosLoading /> }
                    { (!loading && !searchedTodos.length) && <EmptyTodos /> }

                    {searchedTodos.map(todo => (
                        <TodoItem 
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
            </div>

            { !!openModal && (
                <Modal>
                    {/* <p>{ searchedTodos[0]?.text }</p> */}
                    < TodoForm />
                </Modal>
            ) }

            <CreateTodoButton
                setOpenModal={setOpenModal}
                // openModal={openModal}
            />
        </React.Fragment>
    );
}

export { AppUI };