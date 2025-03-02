import React, {useState} from "react";

const TodoForm = ({addTodo})=>{
    const [input,setInput] = useState("")//makes the input field controlled component by linking

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!input.trim()){
            return
        }
        //we have to add to the todo list
        addTodo(input)//call function in App.js
        setInput("")
    }
    
    return(
        //form with task input and button
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Enter a task..."
            ></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm

