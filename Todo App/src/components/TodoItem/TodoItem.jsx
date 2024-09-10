import "./TodoItem.css";
function TodoItem({todoName,todoDate}) {
  return (
    <>
      <div className="main">
        <div className="row main-row">
          <div className="content">
            <div className="col-2">{todoName}</div>
            <div className="col-2">{todoDate}</div>
            <div className="col-1">
              <button type="button" className="btn btn-danger button">
                Delete
              </button>
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
