import React, { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  const [todos,setTodos] = useState([])

  //read from local storage
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos){
      setTodos(storedTodos)
    }
  },[])

  //update local storage, when todos change
  useEffect(()=>{
    if(todos.length > 0){
    localStorage.setItem("todos",JSON.stringify(todos))
    }
  },[todos])

  const addTodo = (input)=>{
    //add input to the task list
    const newTodo = {
      id:Date.now(),
      text:input,
      completed:false
    }
    setTodos([...todos,newTodo])//add new todo
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) =>{
    setTodos(
      todos.filter((todo)=>
        todo.id !== id
      )
    )
  }

  return(
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos} 
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      ></TodoList>
    </div>
  )
}

export default App
