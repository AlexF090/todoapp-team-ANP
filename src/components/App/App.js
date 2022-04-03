import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const Button = ({myFunction, label}) => {
  return <button onClick={myFunction}>{label}</button>;
};

const ToDo = ({ item, index, remove, toggleStatus }) => {
  return (
    <li>
      <Button
        label="X"
        myFunction={() => {
          remove(index);
        }}
      />
      {item.text}
      <Button
        label={item.status}
        myFunction={() => {
          toggleStatus(index);
        }}
      />
    </li>
  );
};


function App() {
  const [textInput, setTextInput] = useState("");
  const [items, setItems] = useState([]); //[{text: '', status: true}]
const [fiteredItems, setFiteredItems] = useState([...items])
  const handleOnChange = (event) => {
    setTextInput(event.target.value);
  };

  const add = () => {
    const saveInputInList = [...items, { text: textInput, status: "Pending" }];
    setItems(saveInputInList);
    // console.log(items)
  };

  const remove = (itemIndex) => {
    const updatedStuff = items.filter((_, index) => index !== itemIndex);
    setItems(updatedStuff);
  };

  const toggleStatus = (itemIndex) => {
    const newItems = [...items];
    newItems[itemIndex].status = newItems[itemIndex].status === "Complete" ? "Pending" : "Complete";
    setItems(newItems);
    // console.log(newItems)
  };

const FilterByStatus = (value) => {
  const updatedStuff = items.filter((items) => items.status === value);
  setFiteredItems(updatedStuff);
};
const AllStats = () => {
  const newItems = [...items];
  setItems(newItems)
  console.log(newItems)
};
  return (
    <div className="App">
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
      <p>{`Your text length: ${textInput.replace(/\s+/g, "").length}`}</p>
      <button onClick={AllStats}>All</button>
      <button onClick={()=>FilterByStatus('Complete')}>Complete</button>
      <button onClick={()=>FilterByStatus('Pending')}>Pending</button>
      {/* <hr /> */}
      <ul>
        {items.map((item, index) => (
          <ToDo
            key={`${index}_${item.text}`}  
            item={item}
            index={index}
            remove={remove}
            toggleStatus={toggleStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;


