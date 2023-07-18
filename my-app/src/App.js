import './App.css';
// import Counter from './Components/Counter';
// import CounterApp from "./Components/CounterApp";
// import TodoForm from './Components/TodoApp/TodoForm';
import TodoList from './Components/TodoApp/TodoList';
// import Todo from './Components/TodoApp/Todo';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   {/* <CounterApp /> */}
    //   {/* <Counter /> */}
    //   <TodoList />
    // </div>
    <Routes>
      <Route path='/' element={<TodoList />}></Route>
      {/* <Route path='todo-list' element={<TodoList />}></Route> */}
    </Routes>
  );
}
export default App;

