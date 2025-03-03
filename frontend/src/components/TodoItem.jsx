import React from "react"

const TodoItem = ({todo})=>{
    return(
        <div>
            <span>{todo.text}</span>
        </div>
    )
}

export default TodoItem