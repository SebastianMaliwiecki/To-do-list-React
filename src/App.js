import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form.jsx';
import List from './components/List.jsx';

function App() {
  
  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [status, setFilterStatus] = useState("all");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("todoList"));
    if(localList)
      setToDo(localList);
  }, [])

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(toDo));
  }, [toDo])

  useEffect(() => { 

    switch(status) {
      case 'completed':
        setFilteredList(toDo.filter((todo) => todo.complete === true));
        break;
      case 'notcompleted':
        setFilteredList(toDo.filter((todo) => todo.complete === false))
        break;
      default:
        setFilteredList(toDo);
        break;
    }

    return() => {
      setFilteredList([]);
    }
  }, [toDo, status]);


  

  return (
    <main>
      <header>
        <h1>
          To Do List 1.0
        </h1>
      </header>
      <Form 
        setInputText={setInputText} 
        toDo={toDo} 
        setToDo={setToDo} 
        inputText={inputText}
        setFilterStatus={setFilterStatus}
      />
      <List 
        setToDo={setToDo}
        toDo={toDo}
        filteredList={filteredList}
      />
    </main>
  );
}

export default App;
