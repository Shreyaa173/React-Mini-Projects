import './TodoListHead.css'
function TodoListHead(){
    return (
        <>
        <div className="row main-row">
            <div className="col-2">
              <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div className="col-2">
              <input type="date" />
            </div>
            <div className="col-1">
              <button type="button" className="btn btn-success button">
                Add
              </button>
            </div>
          </div>
        </>
    )
}

export default TodoListHead;