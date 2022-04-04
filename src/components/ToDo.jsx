import React from "react";

function ToDo({ text }) {
  return (
    <div className="toDo">
      <li className="todo-item">
        <button>Trash</button>
        {text}
        <button>Done</button>
      </li>
    </div>
  );
}

export default ToDo;
