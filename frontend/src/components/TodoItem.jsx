const TodoItem = ({todo,toggleComplete,deleteTodo})=>{

    return(
        <li style={{textDecoration:todo.completed? "line-through":"none",cursor:"pointer"}}>
        <input 
        onChange={()=>toggleComplete(todo.id)}
        type="checkbox"></input>{todo.text}
        <button onClick={()=>deleteTodo(todo.id)}>❌</button>
        </li>
    )
}

export default TodoItem