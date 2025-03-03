import React, { useState } from "react";

const TodoItem = ({todo,toggleComplete,deleteTodo})=>{

    const [isEditing,setIsEditing] = useState(false)
    const [newText,setNewText] = useState(todo.text)

    const handleEdit = ()=>{

    }

    const handleSave = ()=>{

    }

    return(
        <li style={{textDecoration:todo.completed? "line-through":"none",cursor:"pointer"}}>
        <input 
        onChange={()=>toggleComplete(todo.id)}
        type="checkbox"></input>
        <input value={todo.text}></input>
        <button onClick={handleSave} style={{ marginLeft: "8px" }}>💾 Save</button>        
        <button onClick={handleEdit}>✏️ Edit</button>        
        <button onClick={()=>deleteTodo(todo.id)}>❌</button>
        </li>
    )
}

export default TodoItem