import React, { useState } from "react"
import { formateDate } from "../utils/dateFormatter"

const TodoItem = ({todo,toggleComplete,deleteTodo,editTodo})=>{
    //set editing state
    const [isEditing,setIsEditing] = useState(false)
    const [editedText,setEditedText] = useState(todo.text)
    const [editedDueDate,setEditedDueDate] = useState(todo.dueDate)

    //update the task text
    const handleEdit = (e)=>{
        if(isEditing){
            editTodo(todo.id,editedText,editedDueDate)
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
                <>
                <input type="text"
                value={editedText}
                onChange={(e)=>setEditedText(e.target.value)}
                />
                <input type="date"
                value={editedDueDate}
                onChange={(e)=>setEditedDueDate(e.target.value)}
                ></input>
                </>
            ) : 
            (
            <>
            <span>{todo.text}</span>
            <div>Due:{formateDate(todo.dueDate)}</div>
            </>)
            }
            <button onClick={handleEdit}>{isEditing?"Save":"Edit"}</button>
            <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
        </div>
    )
}

export default TodoItem