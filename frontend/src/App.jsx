import React,{useEffect, useState} from "react";
//import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = ()=>{
  //list of todos
  const [todos,setTodos] = useState([])

  //add todos to local storage
  useEffect(()=>{
    if(todos.length > 0){
    localStorage.setItem("todos",JSON.stringify(todos))
    }
  },[todos])  

  //read todos on pageload
  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos"))
    if(savedTodos){
      setTodos(savedTodos)
    }
  },[])

  //for adding new todo
  const addTodo = (text,dueDate)=>{
    const newTodo = {id:Date.now(),text:text, completed:false, dueDate}
    setTodos([...todos,newTodo])
  }

  //for marking todo as complete
  const toggleComplete = (id)=>{
    setTodos(
      todos.map(todo=>
        todo.id===id? {...todo,completed:!todo.completed} :todo
      )
    )
  }

  //delete a todo
  const deleteTodo = (id)=>{
    setTodos(
      todos.filter(todo=>
        todo.id !== id
      )
    )
  }

  //edit todo
  const editTodo = (id,newText)=>{
    setTodos(
      todos.map(todo=>
        todo.id === id? {...todo,text:newText}:todo
      )
    )
  }

  return(
    <div className="App">
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} 
      toggleComplete={toggleComplete} 
      editTodo={editTodo}
      deleteTodo={deleteTodo}></TodoList>
    </div>
  )
}

export default App