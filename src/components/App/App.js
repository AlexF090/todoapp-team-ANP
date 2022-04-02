import "./App.css";
import GlobalStyle from "../../style/globalstyles";
import React, { useState } from "react";


///// const List = () => {

///// };

//App/Main (usestates)
//Header (html & addButton & input)
//Liste (Liste[Array], Remove, Toggle[Button])

function App() {
  const [textInput, setTextInput] = useState("");
  const [items, setItems] = useState([]); //[{text: '', status: true}]
  

  const handleOnChange = (event) => {
    setTextInput(event.target.value);
  };

// const countLength = (event) => {
//     setTextInput(event.replace(/\s+/g, '').length);
// };

  const add = () => {
    const saveInputInList = [...items, { text: textInput, status: "Pedding" }]; //{text: textInput, status: 'Pedding'}
    setItems(saveInputInList);
  };

const remove = (itemIndex) => {
    const updatedStuff = items.filter((_, index) => index !== itemIndex);
    setItems(updatedStuff);
};

const toggleStatus = (itemIndex) => {
    const newItems = [...items];
newItems[itemIndex].status = newItems[itemIndex].status === "Complete" ? "Pending" : "Complete";
    setItems(newItems);
};

  return (
    <div className="App">
      <GlobalStyle />
      <h1>ToDo App</h1>
      <input onChange={handleOnChange} type="text" />
      <button onClick={add}>+</button>
      {/* <button
        onClick={() => {
          console.log(items);
        }}
      >
        check
      </button> */}
      <p>{`Your text length: ${textInput.replace(/\s+/g, '').length}`}</p>
      <button>All</button>
      <button>Complete</button>
      <button>Pending</button>
      {/* <hr /> */}
      <ul>
        {items.map((item, index) => { return (
        <li key={index}>
            <button onClick={() => {remove(index)}}>X</button>
            {item.text}
            <button onClick={() => {toggleStatus(index)}}>{item.status}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
