import React from 'react';
import TodoForm from './TodoForm';
import './Todo.css'

function TodoList({ todos, setTodos }) {
  const addTodo = todo => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
