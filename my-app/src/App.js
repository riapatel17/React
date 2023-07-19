import './App.css';
import TodoList from './Components/TodoApp/TodoList';
import { Route, Routes } from 'react-router-dom';
import Listing from './Components/TodoApp/listing';

function App() {

  return (
    <Routes>
      <Route path='/' element={<TodoList />}></Route>
      <Route path='/todo-list' element={<Listing />}></Route>
    </Routes>
  );
}
export default App;

