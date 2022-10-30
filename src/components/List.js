import React from 'react'

const List = (props) => {
  console.log(props);
  return (
    <div className="col-sm-4">
      <ul className="list-group">
        {props.header == 'todo' ? <li className="list-group-item blue-head">Todo's</li> : props.header == 'completed' ? <li className="list-group-item green-head">Completed</li> : <li className="list-group-item red-head">Removed</li>}
        <li className="list-group-item">
          {props.header == 'todo' ?
            <div class="row">
              <div className="col-sm-8">
                <p>Dapibus ac facilisis insxasdasdasdasdasd sadasdasd scasd</p>
              </div>
              <div className="col-sm-4">
                <button className="btn btn-success btn-circle btn-circle-sm m-1"><i className="fa fa-check"></i></button>
                <button className="btn btn-danger btn-circle btn-circle-sm m-1"><i className="fa fa-trash"></i></button>
              </div>
            </div> : <p>Porta ac consectetur ac</p>
          }
          <a>sdcadcasd</a>
        </li>
      </ul>
    </div>
  )
}

export default List