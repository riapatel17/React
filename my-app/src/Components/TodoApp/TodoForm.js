import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoForm({ edit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : '');
  const [message, setMessage] = useState('');

  const inputRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!input) {
      setMessage('Please enter task.');
      setTimeout(() => setMessage(''), 2000);
      return;
    };
    setMessage(edit ? 'Task is Updated' : 'Task Added');
    setTimeout(() => setMessage(''), 2000);
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {edit ? (
        <div>
          <input
            placeholder='Update'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </div>
      ) : (
        <div>
          <input
            placeholder='Add a Task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add
          </button>
          <div>
            {!!message && <span>{message}</span>}
          </div>
          <div>
            <button onClick={() => navigate('/todo-list')} className='click'>
              Click here to see Todo List
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
