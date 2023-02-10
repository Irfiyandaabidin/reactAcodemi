import React from "react";
import FormAdd from "./FormAdd";
import axios from "axios";
import { useEffect, useState } from "react";
import ListitemTodo from "./ListitemTodo";

const Todolist = () => {
  const url = "http://localhost:5000/data";

  const [todos, setTodos] = useState([]);
  // GET ALL TODOS
  useEffect(() => {
    axios.get(url).then((res) => {
      try {
        console.log(res.data);
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  // Add Todo
  function addTodo(todo) {
    return axios.post("http://localhost:5000/data", todo);
  }

  // Delete
  function deleteTodo(id) {
    return axios.delete(`${url}/${id}`);
  }

  //  Update
  function updateTodo(id, todo) {
    return axios.put(`${url}/${id}`, todo);
  }

  return (
    <div>
      <FormAdd addTodo={addTodo} />
      <ul>
        {/* comment */}
        {todos
          .map((todo) => (
            <ListitemTodo
              // comment
              deleteData={deleteTodo}
              updateTodo={updateTodo}
              todo={todo.kegiatan}
              key={todo.id}
              id={todo.id}
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default Todolist;
