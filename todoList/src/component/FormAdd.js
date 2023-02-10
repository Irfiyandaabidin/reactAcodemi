import axios from "axios";
import React, { useState } from "react";

const FormAdd = ({ addTodo }) => {
  const [initialTodo, setinitialTodo] = useState({ kegiatan: "" });

  function handlerChange(e) {
    setinitialTodo({ kegiatan: e.target.value });
  }

  function handlerSubmit(e) {
    if (initialTodo.kegiatan !== "") {
      addTodo(initialTodo);
      setinitialTodo({ kegiatan: "" });
    }
  }

  return (
    <form className="flex" onSubmit={handlerSubmit}>
      <input type="text" className="input-add" onChange={handlerChange} placeholder="Ketik todo..." value={initialTodo.kegiatan} />
      <button className="btn btn__add" type="submit">
        Add
      </button>
    </form>
  );
};

export default FormAdd;
