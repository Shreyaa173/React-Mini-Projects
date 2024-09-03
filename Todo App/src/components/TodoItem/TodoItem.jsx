import "./TodoItem.css";
function TodoItem() {
  let TodoName = "Buy Milk";
  let TodoDate = "4/10/2023";
  return (
    <>
      <div classNameName="main">
        <div className="row main-row">
          <div className="content">
            <div className="col-2">{TodoName}</div>
            <div className="col-2">{TodoDate}</div>
            <div className="col-1">
              <button type="button" className="btn btn-danger button">
                Delete
              </button>
              <div />
            </div>
          </div>
        </div>
        <div className="row main-row">
          <div className="content">
            <div className="col-2">{TodoName}</div>
            <div className="col-2">{TodoDate}</div>
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
