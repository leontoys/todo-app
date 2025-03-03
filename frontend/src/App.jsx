import React,{useEffect, useState, useRef} from "react";
//import './App.css'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = ()=>{
  //list of todos
  const [todos,setTodos] = useState([])
  //When you want a component to “remember” some information, 
  // but you don’t want that information to trigger new renders, you can use a ref.
  const isInitialRender = useRef(true)

  //read todos on pageload
  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem("todos"))
    if(savedTodos){
      setTodos(savedTodos)
    }
  },[])

  //add todos to local storage
  useEffect(()=>{
    if(isInitialRender.current){
      isInitialRender.current = false
      return
    }
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])      

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
  const editTodo = (id,newText,newDate)=>{
    setTodos(
      todos.map(todo=>
        todo.id === id? {...todo,text:newText,dueDate:newDate}:todo
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