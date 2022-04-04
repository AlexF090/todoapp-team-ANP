import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos }) {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((todos) => (
          <ToDo text={todos.text} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
