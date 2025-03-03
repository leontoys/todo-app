import React,{useState} from "react";

const TodoForm = ({addTodo})=>{

    const [text,setText] = useState('')
    const [dueDate,setDueDate] = useState("")

    //for adding new todo
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!text.trim()){
            return
        }
        addTodo(text,dueDate)
        setText('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={text}
                   onChange={(e)=>setText(e.target.value)}
                   placeholder="Add new task ..."
            ></input>
            <input type="date"
                value={dueDate}
                onChange={(e)=>setDueDate(e.target.value)}
                ></input>
            <button>Add</button>
        </form>
    )
}

export default TodoForm