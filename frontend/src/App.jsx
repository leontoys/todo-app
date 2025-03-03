import React,{useState} from "react";
import './App.css'
import TodoForm from "./components/TodoForm";

const App = ()=>{
  //list of todos
  const [todos,setTodos] = useState([])

  const addTodo = (text)=>{
    const newTodo = {id:Date.now(),text:text, completed:false}
    console.log("newtodo",newTodo)
    setTodos([...todos,newTodo])
  }

  return(
    <div className="App">
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App