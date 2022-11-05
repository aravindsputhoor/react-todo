import React from 'react';

const List = (props) => {
  let todos = props.data;
  let listData = props.data.filter((value)=>{
    return value.status === props.status;
  })

  const completed = (todo) => {
    todos.filter((value) => {
      if(value==todo) {
        todo.status = 'completed';
      }
      return todo;
    })
    return todos;
  }

  const remove = (todo) => {
    todos.filter((value) => {
      if(value==todo) {
        todo.status = 'removed';
      }
      return todo;
    })
    return todos;
  }

  return (
    <div className="col-sm-4">
      <ul className="list-group mt-4">
        {props.status === 'todo' ? <li className="list-group-item blue-head"><i className="fa fa-cog" aria-hidden="true"></i> Todo's</li> : props.status === 'completed' ? <li className="list-group-item green-head"><i className="fa fa-cog" aria-hidden="true"></i> Completed</li> : <li className="list-group-item red-head"><i className="fa fa-cog" aria-hidden="true"></i> Removed</li>}
       
          { (listData.length === 0) ? <li className="list-group-item center"><p><b>No Todo's</b></p></li>  : listData.map((value, key) => {
            if (props.status === value.status) {
              return props.status==='todo' ? <li className="list-group-item" key={key}>
                <div className="row d-flex">
                  <div className="col-sm-8">
                    <p><b>{value.todoText}</b></p>
                    <a>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(value.time)}</a>
                  </div>
                  <div className="col-sm-4 end">
                    <button className="btn btn-success btn-circle btn-circle-sm m-1" onClick={() => { props.function(completed(value)); }} ><i className="fa fa-check"></i></button>
                    <button className="btn btn-danger btn-circle btn-circle-sm m-1" onClick={() => { props.function(remove(value)); }} ><i className="fa fa-trash"></i></button>
                  </div>
                </div>
              </li> : 
              <li className="list-group-item" key={key}>
                <p><b>{value.todoText}</b></p>
                <a>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(value.time)}</a>
              </li>
            }
          })
          }
        
      </ul>
    </div>
  )
}

export default List