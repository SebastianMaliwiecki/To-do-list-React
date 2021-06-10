import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './FormStyle.css';

function Form({setInputText, toDo, setToDo, inputText, setFilterStatus}) {

    const handleTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodo = (e) => {
        e.preventDefault();
        if(inputText === "") return
        let todoID = uuidv4();
        setToDo([
            ...toDo,
            {text: inputText, id: todoID, complete: false}
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setFilterStatus(e.target.value)
    };

    return(
        <div>
            <form>
                <input 
                    className="inputText"
                    value={inputText} 
                    type="text" 
                    onChange={handleTextHandler}>
                </input>
                <button className="submitBtn"
                    type="submit" 
                    onClick={submitTodo}>
                        Add
                </button>
                <select onClick={statusHandler} className="filterOpt">
                    <option value="all" className="option">All</option>
                    <option value="notcompleted" className="option">Not-completed</option>
                    <option value="completed" className="option">Completed</option>
                </select>
            </form>
        </div>
    );
}

export default Form;