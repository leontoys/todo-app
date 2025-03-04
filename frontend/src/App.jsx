import React,{useEffect, useState, useRef} from "react";
import './App.css'
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
  const addTodo = (text,dueDate,category)=>{
    const newTodo = {id:Date.now(),text:text, completed:false, dueDate,category}
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
  const editTodo = (id,newText,newDate,newCategory)=>{
    setTodos(
      todos.map(todo=>
        todo.id === id? {...todo,text:newText,dueDate:newDate,category:newCategory}:todo
      )
    )
  }

  // Sort todos by due date
  const sortTodosByDueDate = (todos) => {
    return todos.slice().sort((a, b) => {
      if (a.dueDate && b.dueDate) {
        return new Date(a.dueDate) - new Date(b.dueDate); // <-- Sort by due date
      }
      return 0; // <-- If due date is missing, maintain original order
    });
  };

  // Get sorted todos
  const sortedTodos = sortTodosByDueDate(todos);  

  return(
    <div className="App">
      <h1>Todo List App</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={sortedTodos} 
      toggleComplete={toggleComplete} 
      editTodo={editTodo}
      deleteTodo={deleteTodo}></TodoList>
    </div>
  )
}

export default App