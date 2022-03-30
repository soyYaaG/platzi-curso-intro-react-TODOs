import React from "react";
import error from "../img/error.svg";

function TodosError() {
    return (
        <li className="flex justify-center items-center mt-5">
            <figure>
                <figcaption className="text-center text-red-500 font-semibold">
                    Error al cargar los TODOs.
                </figcaption>
                <img className="mt-5" src={error} alt="Error al cargar los TODOs" />
            </figure>
        </li>
    );
}

export { TodosError };