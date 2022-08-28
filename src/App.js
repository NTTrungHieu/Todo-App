import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import reducer, { initState } from "./reducer";
import Add from "./components/pages/Add";
import Completed from "./components/pages/Completed";
import Navbar from "./components/Navbar";
import "./App.scss";

function App() {
  const [todoApp, dispatch] = useReducer(reducer, initState);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Add todoApp={todoApp} dispatch={dispatch} />}
        />
        <Route
          path="/completed"
          element={<Completed todoApp={todoApp} />}
        />
      </Routes>
    </div>
  );
}

export default App;
