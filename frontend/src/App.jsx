import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {

  const [todos,setTodos] = useState([])
  console.log("todos",todos)


  const addTodo = (input)=>{
    //add input to the task list
    const newTodo = {
      id:Date.now(),
      text:input,
      completed:false
    }
    setTodos([...todos,newTodo])//add new todo
  }

  return(
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App
