import "./App.css";
import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

// const MyList = ({items, remove, toggleStatus}) => {
//   return(
//     items.map((item, index) => (
//     <ToDo
//       key={`${index}_${item.text}`}
//       item={item}
//       index={index}
//       remove={remove}
//       toggleStatus={toggleStatus}
//     />
//   )))
// };

const Button = ({ myFunction, label }) => {
  return <button onClick={myFunction}>{label}</button>;
};

const ToDo = ({ item, remove, toggleStatus, visible }) => {
  return (
    <li className={visible ? "" : "hidden"}>
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
    const saveInputInList = [...items, { text: textInput, status: "Pending" }];
    setItems(saveInputInList);
  };

  const remove = (itemIndex) => {
    const updatedStuff = items.filter((_, index) => index !== itemIndex);
    setItems(updatedStuff);
  };

  const toggleStatus = (itemIndex) => {
    const newItems = [...items];
    newItems[itemIndex].status =
      newItems[itemIndex].status === "Complete" ? "Pending" : "Complete";
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
        {items.map((item, index) => (
          <ToDo
            key={`${index}_${item.text}`}
            item={item}
            remove={() => {
              remove(index);
            }}
            toggleStatus={() => {
              toggleStatus(index);
            }}
            visible={filterStatus === "All" || item.status === filterStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
