// import React from "react";
import ReactDOM from 'react-dom';
// import { XCircleIcon } from '@heroicons/react/solid';
import "./Modal.css";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='modal'>
            {/* <button className='closeModal'>
                <XCircleIcon />
            </button> */}
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal } ;