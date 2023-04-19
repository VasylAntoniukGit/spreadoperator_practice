import React, { useState } from "react";

function App() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);

  function onChangeHandler(event) {
    const newInput = event.target.value;
    setInput(newInput);
  }
  function addItem() {
    if (inputText !== "") {
      setItems((prevVar) => {
        return [...prevVar, inputText];
      });
    }
    setInput("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={onChangeHandler} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
