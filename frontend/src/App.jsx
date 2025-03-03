import React,{useState} from "react";
import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = ()=>{
  //list of todos
  const [todos,setTodos] = useState([])

  const addTodo = (text)=>{
    const newTodo = {id:Date.now(),text:text, completed:false}
    setTodos([...todos,newTodo])
  }

  return(
    <div className="App">
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos}></TodoList>
    </div>
  )
}

export default App