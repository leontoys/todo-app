import React,{useState} from "react";
import TodoItem from './TodoItem'

const TodoList = ({todos,toggleComplete,deleteTodo,handleEdit,handleSave})=>{
    return(
    <ul>
        {todos.map( todo=>
            <TodoItem key={todo.id} todo={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            ></TodoItem>
        )}
    </ul>
    )
}

export default TodoList