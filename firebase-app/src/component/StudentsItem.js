import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config";

const StudentsItem = ({ student, no }) => {
  const navigate = useNavigate();
  const deleteItem = async () => {
    await deleteDoc(doc(db, "mahasiswa", student.id));
  };
  return (
    <tr>
      <td className="no">{no}</td>
      <td>{student.nama}</td>
      <td>{student.email}</td>
      <td>{student.jurusan}</td>
      <td className="action">
        <button className="btn btn-delete" onClick={deleteItem}>
          Delete
        </button>
        <button className="btn btn-edit" onClick={() => navigate(`update/${student.id}`, { state: student })}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default StudentsItem;
