import { useState } from "react"

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newText,setNewText] = useState(todo.text)

    const handleSave = ()=>{
        if(!newText.trim()){
            return
        }
        setNewText(newText)
        setIsEditing(false)
    }

    return (
        <li style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}>
            <input type="checkbox"
                onChange={() => toggleComplete(todo.id)}></input>

            { isEditing?(
                <>
                <input type = "text" value = { newText } onChange = {(e) => setNewText(e.target.value)} />
                <button onClick={handleSave}>💾 Save</button>  
                </>               
                )               
                : (
                <span>{todo.text}</span>
                )}


            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </li>
    )
}

export default TodoItem