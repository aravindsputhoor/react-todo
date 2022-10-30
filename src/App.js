import './App.css';
import List from './components/List';

function App() {
  return (
    <div>
      <div className="header">
      <div className="p-4">
        <h3>Todo planner</h3>
        <div className="pseudo-search">
          <input className="mt-2" type="text" placeholder="Enter todo here.." />
          <button className="fa fa-plus" type="button"></button>
        </div>
      </div>
    </div>

    <div className="container mt-2">
      <div className="row">
        <List header={'todo'} />
        <List header={'completed'} />
        <List header={'removed'} />
      </div>
    </div>
    </div>
  );
}

export default App;
