import React, { useState } from "react"
import { formateDate } from "../utils/dateFormatter"

const TodoItem = ({todo,toggleComplete,deleteTodo,editTodo})=>{
    //set editing state
    const [isEditing,setIsEditing] = useState(false)
    const [editedText,setEditedText] = useState(todo.text)
    const [editedDueDate,setEditedDueDate] = useState(todo.dueDate)
    const [editedCategory,setEditedCategory] = useState(todo.category)

    //update the task text
    const handleEdit = (e)=>{
        if(isEditing){
            editTodo(todo.id,editedText,editedDueDate,editedCategory)
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
                <select value={editedCategory}
                    onChange={(e)=>setEditedCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
            </select>                   
                </>
            ) : 
            (
            <>
            <span>{todo.text}</span>
            <div>Due:{formateDate(todo.dueDate)}</div>
            <div>Category: {todo.category}</div> {/* <-- Display category */}            
            </>)
            }
            <button onClick={handleEdit}>{isEditing?"Save":"Edit"}</button>
            <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
        </div>
    )
}

export default TodoItem