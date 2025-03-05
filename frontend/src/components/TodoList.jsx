import React from "react"
import TodoItem from "./TodoItem"

const TodoList = ({todos,toggleComplete,deleteTodo,editTodo})=>{
    return(
        <div className="todo-list">
            { todos.map(todo=>(
                <TodoItem key={todo.id} 
                todo={todo} 
                toggleComplete={toggleComplete} 
                editTodo={editTodo}
                deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}

export default TodoList