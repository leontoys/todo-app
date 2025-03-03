import React, { useState } from "react"
import { formateDate } from "../utils/dateFormatter"

const TodoItem = ({todo,toggleComplete,deleteTodo,editTodo})=>{
    //set editing state
    const [isEditing,setIsEditing] = useState(false)
    const [editedText,setEditedText] = useState(todo.text)

    //update the task text
    const handleEdit = (e)=>{
        if(isEditing){
            editTodo(todo.id,editedText)
        }
        setIsEditing(!isEditing)
    }

    return(
        <div style={{textDecoration:todo.completed?"line-through":"none"}}>
            <input type="checkbox"
            checked={todo.completed}
            onChange={()=>{toggleComplete(todo.id)}}
            />
            { isEditing? (
                <input type="text"
                value={editedText}
                onChange={(e)=>setEditedText(e.target.value)}
                />
            ) : (<span>{todo.text}</span>)
            }
            <button onClick={handleEdit}>{isEditing?"Save":"Edit"}</button>
            <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
            <div>Due:{formateDate(todo.dueDate)}</div>
        </div>
    )
}

export default TodoItem