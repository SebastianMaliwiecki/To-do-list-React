import React from 'react';
import Todo from './Todo';
import './ListStyle.css';

function List({toDo, setToDo, filteredList}) {
    return(
        <div>
            <ul>
                {
                    filteredList.map(todo => (
                        <Todo 
                        setToDo={setToDo} 
                        todo={todo} 
                        toDo={toDo}
                        key={todo.id} 
                        text={todo.text} />
                    ))
                }
            </ul>
        </div>
    );
}

export default List;