// import "./App.css";
// import React, { useState } from "react";

// // import Header from "../Form/Form.jsx";

// const Header = () => {
//   //HERE useState Text & stuff?
//   const [items, setItems] = useState([{ text: "TEST TEXT", status: true }]);
//   const [toDos, setToDos] = useState("");

//   const handleOnChange = (event) => {
//     const input = event.target.value;
//     setToDos(input);
//   };

//   const add = () => {
//     const newText = [...items, { text: toDos, status: true }];
//     setItems(newText);
//   };

//   const remove = (toDosIndex) => {
//     const updatedItems = items.filter((index) => index !== toDosIndex);
//     setItems(updatedItems);
//   };

// const toggleButton = () => {
// const toDos = items.status
// }

//   return (
//     <div>
//       <input onChange={handleOnChange} type="text" />
//       <button onClick={add}>Add</button>
//       <ul>
//         {items.map((item, index, array) => {
//           return (
//             <li key={index}>
              
//               <button onClick={() => remove(item, index)}>X</button>
//               {item.text}
//               <button onClick={() => toggleButton(item.status)}>{button.value}</button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// // const List = () => {
// //   return (
// //
// //   )
// // }

// function App() {
//   return (
//     <div className="App">
//       <h1>ToDo App</h1>
//       <Header></Header>
//       {/* <List></List> */}
//     </div>
//   );
// }

// export default App;
