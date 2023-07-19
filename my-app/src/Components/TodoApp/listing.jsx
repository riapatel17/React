import React, { useContext } from 'react'
import Todo from './Todo';
import { useNavigate } from 'react-router-dom';
import { context } from '../../Context';

const Listing = () => {
  const { todos, setTodos } = useContext(context)
  const navigate = useNavigate();
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || newValue.text.trim() === '') {
      alert('Enter Updated Task')
      return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Today's todos</h1>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
      <button onClick={() => navigate('/')} className='click'>
        Back
      </button>
    </div>
  )
}

export default Listing;
