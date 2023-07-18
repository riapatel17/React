import './App.css';
import { Route, Routes } from 'react-router-dom';
// import TodoForm from './Components/TodoApp/TodoForm';
import TodoList from './Components/TodoApp/TodoList';


function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />}></Route>
      {/* <Route path='todo-list' element={<TodoList />}></Route> */}
    </Routes>
  );
}
export default App;

