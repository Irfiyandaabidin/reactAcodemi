import { React, useState } from "react";
import { useAddTodoMutation } from "../app/features/apiSlice";
import { nanoid } from "nanoid";

const FormAdd = () => {
  const [addTodo] = useAddTodoMutation();
  const [inputTodo, setInputTodo] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    addTodo({ id: nanoid(), title: inputTodo, completed: false });
    setInputTodo("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" className="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default FormAdd;
