import React,{useState} from "react";
import TodoItem from './TodoItem'

const TodoList = ({todos,toggleComplete,deleteTodo})=>{
    return(
    <ul style={{listStyle:"none"}}>
        {todos.map( todo=>
            <TodoItem key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            ></TodoItem>
        )}
    </ul>
    )
}

export default TodoList