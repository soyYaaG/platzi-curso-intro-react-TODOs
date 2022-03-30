import React from "react";

function TodoList(props) {
    return (
        <section className="w-full md:w-1/4">
            <ul className="TodoList">
                { props.children }
            </ul>
        </section>
    );
}

export { TodoList };