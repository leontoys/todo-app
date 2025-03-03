import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      {/* TodoForm and TodoList will go here */}
    </div>
  );
}

export default App;