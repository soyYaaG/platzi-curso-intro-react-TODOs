import React from "react";
import noData from "../img/no_data.svg";

function EmptyTodos() {
    return (
        <li className="flex justify-center items-center mt-5">
            <figure>
                <figcaption className="text-center text-gray-300 font-semibold text-xl">
                    ¡Crea tu primer TODO!
                </figcaption>
                <img className="mt-5" src={noData} alt="Crea tu primer TODO" />
            </figure>
        </li>
    );
}

export { EmptyTodos };