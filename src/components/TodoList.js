import { setAction } from "../reducer";
import Form from "./Form";

function TodoList({ todoApp, dispatch }) {
  function handleDelete(index) {
    dispatch(setAction("Delete", index));
  }
  function handleCheck(index) {
    dispatch(setAction("Completed", index));
  }
  function handleUpdate(index) {
    dispatch(setAction("Update", index));
  }
  return (
    <div className="todoList">
      <ul>
        {!todoApp.update &&
          todoApp.list.map((todo, index) => {
            return (
              <li key={index}>
                <button className="btn" onClick={() => handleCheck(index)}>
                  <i className="fa-solid fa-circle-check"></i>
                </button>
                <span>{todo}</span>
                <button className="btn" onClick={() => handleUpdate(index)}>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className="btn" onClick={() => handleDelete(index)}>
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>
              </li>
            );
          })}
      </ul>
      {todoApp.update && <Form todoApp={todoApp} dispatch={dispatch} />}
    </div>
  );
}

export default TodoList;
