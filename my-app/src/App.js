import { useState } from 'react';
import './App.css';
import TodoList from './Components/TodoApp/TodoList';
import { Route, Routes } from 'react-router-dom';
import Listing from './Components/TodoApp/listing';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Routes>
      <Route path='/' element={<TodoList todos={todos} setTodos={setTodos} />}></Route>
      <Route path='/todo-list' element={<Listing todos={todos} setTodos={setTodos} />}></Route>
    </Routes>
  );
}
export default App;

