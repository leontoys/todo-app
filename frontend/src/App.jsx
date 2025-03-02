import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

function App() {

  const [todos,setTodos] = useState([])

  const addTodo(input){
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
    </div>
  )
}

export default App
