import React,{useState} from "react";

const TodoForm = ({addTodo})=>{

    const [text,setText] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!text.trim()){
            return
        }
        addTodo(text)
        setText('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
                   value={text}
                   onChange={(e)=>setText(e.target.value)}
                   placeholder="Add new task ..."
            ></input>
            <button>Add</button>
        </form>
    )
}

export default TodoForm