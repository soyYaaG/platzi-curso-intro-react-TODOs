import React from "react";
import "./TodoItem.css";
import { XIcon } from '@heroicons/react/solid'

function TodoItem(props) {
    return (
        <li className="TodoItem flex justify-between items-center">
            <input type="checkbox" className="w-5 h-5 accent-purpel-300 mr-2" checked={ props.completed } onChange={props.onComplete} />
            
            <p className={` ${ props.completed && "line-through" } mr-2`}>{ props.text }</p>

            <span className="cursor-pointer" onClick={props.onDelete}>
                <XIcon className="h-5 w-5" />
            </span>
        </li>
    );
}

export { TodoItem };