import './App.css';
import List from './components/List';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  return (
    <div>
      <div className="header">
      <div className="p-4">
        <h3>Todo planner</h3>
        <div className="pseudo-search">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} className="mt-2 white" type="text" placeholder="Enter todo here.." />
          <button className="fa fa-plus white" onClick={() => setTodos(() => { return [...todos, {todoText: todo, time: Date.now(), status: 'todo'}]})} type="button"></button>
        </div>
      </div>
    </div>

    <div className="container mt-2">
      <div className="row">
        <List status={'todo'} data={todos} />
        <List status={'completed'} data={todos} />
        <List status={'removed'} data={todos} />
      </div>
    </div>
    </div>
  );
}

export default App;
