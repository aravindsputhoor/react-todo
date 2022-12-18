import './App.css';
import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState([]);
  const [removedTodos, setRemovedTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    let bool = false;
    todos.map((value, key)=>{
      if(value.todoText == todo) {
        bool = true;
      } 
    })
    if(todo.trim() == '') {
      toast.warn("Enter a valid text!");
      return [...todos]
    } else if(bool){
      toast.warn("Todo already exists!");
      return [...todos]
    } else {
      return [...todos, {todoText: todo, time: Date.now(), status: 'todo'}]
    }
  }

  const completed = (value) => {
    let todosData = todos.filter((data) => {
      return data != value;
    });
    setTodos(todosData);
    let completedData = [...completedTodos, value];
    setcompletedTodos(completedData);
  }

  const remove = (value)=> {
    let todosData = todos.filter((data) => {
      return data != value;
    });
    setTodos(todosData);
    let removeddData = [...removedTodos, value];
    setRemovedTodos(removeddData);
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
        
        <div className="col-sm-4">
          <ul className="list-group mt-4">
            <li className="list-group-item blue-head"><i className="fa fa-cog" aria-hidden="true"></i> Todo's</li>
            {
              (todos.length === 0) ? <li className="list-group-item center"><p><b>No Todo's</b></p></li>  : todos.map((value, key) => {
               return <li className="list-group-item" key={key}>
                  <div className="row d-flex">
                    <div className="col-sm-8">
                      <p><b>{value.todoText}</b></p>
                      <a>{new Intl.DateTimeFormat('en-US', {year: 'numeric', day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(value.time)}</a>
                    </div>
                    <div className="col-sm-4 end">
                      <button className="btn btn-success btn-circle btn-circle-sm m-1" onClick={() => { completed(value) }} ><i className="fa fa-check"></i></button>
                      <button className="btn btn-danger btn-circle btn-circle-sm m-1" onClick={() => { remove(value) }} ><i className="fa fa-trash"></i></button>
                    </div>
                  </div>
                </li>
              })
            }
          </ul>
        </div>

        <div className="col-sm-4">
          <ul className="list-group mt-4">
            <li className="list-group-item green-head"><i className="fa fa-cog" aria-hidden="true"></i> Completed</li>
            {
              (completedTodos.length === 0) ? <li className="list-group-item center"><p><b>No Todo's</b></p></li>  : completedTodos.map((value, key) => {
                return <li className="list-group-item" key={key}>
                  <p><b>{value.todoText}</b></p>
                  <a>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(value.time)}</a>
                </li>
              })
            }
          </ul>
        </div>

        <div className="col-sm-4">
          <ul className="list-group mt-4">
            <li className="list-group-item red-head"><i className="fa fa-cog" aria-hidden="true"></i> Removed</li>
            {
              (removedTodos.length === 0) ? <li className="list-group-item center"><p><b>No Todo's</b></p></li>  : removedTodos.map((value, key) => {
                return <li className="list-group-item" key={key}>
                  <p><b>{value.todoText}</b></p>
                  <a>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(value.time)}</a>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
