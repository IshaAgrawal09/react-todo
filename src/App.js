import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(1);

  return (
    <div className="todo">
      <Todo
        todoList={todoList}
        setTodoList={setTodoList}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
