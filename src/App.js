import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Form inputText={inputText} todos={todos} setToDos={setTodos} setInputText={setInputText} />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
