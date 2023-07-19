import React, { useContext } from 'react';
import TodoForm from './TodoForm';
import './Todo.css'
import { context } from '../../Context';

function TodoList() {

  const { todos, setTodos } = useContext(context)

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
