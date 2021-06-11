import React from 'react';
import './TodoStyle.css';
import Typewriter from 'typewriter-effect';

export default function Todo({ setToDo, todo, toDo, text }) {

    const deleteHandler = () => {
        setToDo(toDo.filter(el => el.id !== todo.id))
    };

    const completeHandler = () => {
        setToDo(toDo.map(item => {
            if(item.id === todo.id) 
                return {
                    ...item, complete: !item.complete
                };
            return item;
        }))
    };
    
    return (
        <div>
            <li className={todo.complete ? "completed" : ""}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString(`${text}`).start();
                    }}
                />
                
            </li>
            <div className="optionButtons">
                <button onClick={completeHandler} value="done" className={todo.complete ? "undoBtn" : "completeBtn"} title={todo.complete ? "Undo complete" : "Mark as complete"}>
                    <i className={todo.complete ? "fas fa-undo" : "fas fa-check"}></i>
                </button>
                <button onClick={deleteHandler} value="delete" className="deleteBtn" title="Delete todo">
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

