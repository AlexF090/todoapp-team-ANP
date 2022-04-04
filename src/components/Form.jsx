import React from "react";

function Form({ setInputText, todos, setToDos, inputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setToDos([...todos, { text: inputText, completed: false }]);
    setInputText("");
  };
  return (
    <div>
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <button onClick={submitTodoHandler} className="todo-button">
        Add
      </button>
    </div>
  );
}

export default Form;
