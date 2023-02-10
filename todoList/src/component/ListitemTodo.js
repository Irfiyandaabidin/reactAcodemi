import React, { useState } from "react";

const ListitemTodo = ({ todo, id, deleteData, updateData }) => {
  const [isEdit, setisEdit] = useState(false);
  const [initialTodo, setinitialTodo] = useState({ kegiatan: todo });

  function changeHandler(e) {
    setinitialTodo({ todo: e.target.value });
  }

  function switchEditBtn() {
    setisEdit(!isEdit);
  }

  function submitHandler(e) {
    e.preventDefault();
    setisEdit(!isEdit);
    updateData(id, initialTodo);
  }

  return (
    <div>
      <li className="todo-item">
        <form className="form-edit" onSubmit={submitHandler}>
          {/* edit */}
          {!isEdit ? <input disabled type="text" className="input-no-border " value={initialTodo.kegiatan} /> : <input type="text" className="input-with-border" value={initialTodo.kegiatan} onChange={changeHandler} />}
        </form>
        {!isEdit ? (
          <>
            <button className="btn btn__action btn__action-edit" onClick={switchEditBtn}>
              Edit
            </button>
            <button className="btn btn__action btn__action-delete" onClick={() => deleteData(id)}>
              Hapus
            </button>
          </>
        ) : (
          <>
            <button className="btn btn__action btn__action" onClick={submitHandler}>
              Simpan
            </button>
            <button className="btn btn__action btn__action-batal" onClick={switchEditBtn}>
              Batal
            </button>
          </>
        )}
      </li>
    </div>
  );
};

export default ListitemTodo;
