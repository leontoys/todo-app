import React,{useState} from "react";

const TodoForm = ({addTodo})=>{

    const [text,setText] = useState('')
    const [dueDate,setDueDate] = useState("")
    const [category,setCategory] = useState('Personal')

    //for adding new todo
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!text.trim()){
            alert('Task cannot be empty')
            return
        }
        addTodo(text,dueDate,category)
        setText('')
        setDueDate('')
        setCategory('Personal')//Reset
    }

    return(
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text"
                   value={text}
                   onChange={(e)=>setText(e.target.value)}
                   placeholder="Add new task ..."
            ></input>
            <input type="date"
                value={dueDate}
                onChange={(e)=>setDueDate(e.target.value)}
                ></input>
            <select value={category}
                    onChange={(e)=>setCategory(e.target.value)}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
            </select>    
            <button>Add</button>
        </form>
    )
}

export default TodoForm