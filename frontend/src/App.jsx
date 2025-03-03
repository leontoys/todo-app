import React,{useState} from "react";
import './App.css'

const App = ()=>{
  //list of todos
  const [todos,setTodos] = useState([])

  return(
    <div className="App">
      <h1>Todo List App</h1>
    </div>
  )
}

export default App