import './App.css';
import List from './components/List';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const addTodo = () => {
    let bool = false;
    console.log('sx');
    todos.map((value, key)=>{
      if(value.todoText == todo) {
        bool = true;
      } 
    })
    if(bool){
      toast.warn("Todo already exists!");
      return [...todos]
    } else {
      return [...todos, {todoText: todo, time: Date.now(), status: 'todo'}]
    }
  }

  return (
    <div>
      <ToastContainer />
      <div className="header">
      <div className="p-4">
        <h3>Todo planner</h3>
        <div className="pseudo-search">
          <input value={todo} onChange={(e) => setTodo(e.target.value)} className="mt-2 white" type="text" placeholder="Enter todo here.." />
          <button className="fa fa-plus white" onClick={() => setTodos(addTodo)} type="button"></button>
        </div>
      </div>
    </div>

    <div className="container mt-2">
      <div className="row">
        <List status={'todo'} data={todos} function= {setTodos}/>
        <List status={'completed'} data={todos} function= {setTodos}/>
        <List status={'removed'} data={todos} function= {setTodos}/>
      </div>
    </div>
    </div>
  );
}

export default App;
