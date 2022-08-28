import { useState, useRef, useEffect } from "react";
import { setAction } from "../reducer";

function Form({ todoApp, dispatch }) {
  const [todo, setTodo] = useState(todoApp.list[todoApp.index] || "");
  const [btn, setBtn] = useState("ADD");
  const inputRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    if (todoApp.update) {
      setBtn("Update");
      inputRef.current.focus();
      btnRef.current.className="updateBtn"
    } else{
      btnRef.current.className="addBtn"
      inputRef.current.focus();
    }
  }, []);

  function handleAdd() {
    if (btn === "ADD") {
      dispatch(setAction('Add',todo))
    } else {
      dispatch(setAction('UpdateDone',todo))
    }
    setTodo("");
    inputRef.current.focus();
  }

  return (
    <div className="form">
      <input
        ref={inputRef}
        value={todo}
        type="text"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button ref={btnRef} onClick={handleAdd}>{btn}</button>
    </div>
  );
}

export default Form;
