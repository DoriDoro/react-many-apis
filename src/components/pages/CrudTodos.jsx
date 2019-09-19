import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CrudTodos() {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/todos").then(response => {
      setTodos(response.data);
    });
  }, []);

  function handleChange(e) {
    setNewItem(e.target.value);
  }
  function addItem() {
    axios
      .post("http://localhost:8000/todos", { item: newItem })
      .then(response => {
        console.log("Done", response.data);
        setTodos([...todos, response.data]); // to add the tiem created in the state todo
        setNewItem(""); // to clear the input
      });
  }

  function handleDelete(id) {
    axios
      .delete("http://localhost:8000/todos/" + id)
      .then(response => {
        console.log("Delete sucessfully");
        setTodos(todos.filter(todo => todo.id !== id));
      });
  }

  return (
    <div>
      <h1>CRUD TODOs</h1>
      <p>You need to:</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {" "}
            {todo.item}{" "}
            <button onClick={() => handleDelete(todo.id)}> delete </button>{" "}
          </li>
        ))}
      </ul>
      <input type="text" value={newItem} onChange={handleChange} />{" "}
      <button onClick={addItem}> Add </button>
      <hr />
      <ol>
        <li>
          Execute the following command:{" "}
          <code>json-server --watch db.json --port 8000</code>
        </li>
        <li>
          Test the API with Postman by send the following request:{" "}
          <code>GET http://localhost:8000/todos</code>
        </li>
        <li>Display the list of all TODOs</li>
        <li>
          Add a TODO item by doing the following request:{" "}
          <code>POST http://localhost:8000/todos</code>{" "}
        </li>
        <li>Delete a TODO item</li>
      </ol>
    </div>
  );
}
