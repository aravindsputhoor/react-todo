import React from 'react'

const List = (props) => {
  console.log(props);
  return (
    <div className="col-sm-4">
      <ul className="list-group">
        {props.status == 'todo' ? <li className="list-group-item blue-head">Todo's</li> : props.status == 'completed' ? <li className="list-group-item green-head">Completed</li> : <li className="list-group-item red-head">Removed</li>}
       
          { props.data.length == 0 ? <li className="list-group-item center"><p><b>No Todo's</b></p></li>  : props.data.map((value) => {
            if (props.status == value.status) {
              return <li className="list-group-item">
                <div className="row">
                  <div className="col-sm-8">
                    <p>{value.todoText}</p>
                  </div>
                  <div className="col-sm-4 center">
                    <button className="btn btn-success btn-circle btn-circle-sm m-1"><i className="fa fa-check"></i></button>
                    <button className="btn btn-danger btn-circle btn-circle-sm m-1"><i className="fa fa-trash"></i></button>
                  </div>
                </div>
                
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