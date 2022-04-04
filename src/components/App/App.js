import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const Button = ({ myFunction, label }) => {
  return <button onClick={myFunction}>{label}</button>;
};

const ToDo = ({ item, remove, toggleStatus }) => {
  return (
    <li>
      <Button
        label="X"
        myFunction={() => {
          remove();
        }}
      />
      {item.text}
      <Button
        label={item.status}
        myFunction={() => {
          toggleStatus();
        }}
      />
    </li>
  );
};

function App() {
  const [textInput, setTextInput] = useState("");
  const [items, setItems] = useState([]); //[{text: '', status: true}]

  const [filterStatus, setFilterStatus] = useState("All"); 
  const handleOnChange = (event) => {
    setTextInput(event.target.value);
  };
  //id: Math.random() + '' = random ID in String
  const add = () => {
    const saveInputInList = [
      ...items,
      { id: nanoid(), text: textInput, status: "Pending" },
    ];
    setItems(saveInputInList);
  };

  const remove = (itemId) => {
    const updatedStuff = items.filter((item) => item.id !== itemId);
    setItems(updatedStuff);
  };

  const toggleStatus = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          status: item.status === "Complete" ? "Pending" : "Complete",
        };
      } else {
        return item;
      }
    });
    // const newItems = [...items];
    // newItems[itemId].status =
    //   newItems[itemId].status === "Complete" ? "Pending" : "Complete";
    setItems(newItems);
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <input onChange={handleOnChange} type="text" />
      <button onClick={add}>+</button>

      <p>{`Your text length: ${textInput.replace(/\s+/g, "").length}`}</p>
      <button
        onClick={() => {
          setFilterStatus("All");
        }}
      >
        All
      </button>
      <button onClick={() => setFilterStatus("Complete")}>Complete</button>
      <button onClick={() => setFilterStatus("Pending")}>Pending</button>
      <hr />
      <ul>
        {items
          .filter(
            (item) => filterStatus === "All" || item.status === filterStatus
          )
          .map((item) => (
            <ToDo
              key={item.id}
              item={item}
              remove={() => {
                remove(item.id);
              }}
              toggleStatus={() => {
                toggleStatus(item.id);
              }}
            />
          ))}
      </ul>
    </div>
  );
}

export default App;
