import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../config";
import { collection, onSnapshot } from "firebase/firestore";
import StudentsItem from "./StudentsItem";

const UserLists = () => {
  const [students, setStudents] = useState([]);

  //  // data tidak realtime
  // const fetchData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "mahasiswa"));
  //   let list = [];
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     list.push({ id: doc.id, ...doc.data() });
  //   });
  //   setStudents(list);
  // };

  useEffect(() => {
    // fetchData();

    const unsub = onSnapshot(
      collection(db, "mahasiswa"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setStudents(list);
      },
      (error) => console.log(error)
    );

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <h1>Daftar Mahasiswa</h1>
      <Link to={"/add"} className="btn btn-add">
        Tambah
      </Link>
      <table className="customTable">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Jurusan</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <StudentsItem key={student.id} student={student} no={i + 1} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserLists;
