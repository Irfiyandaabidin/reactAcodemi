import React, { useState } from "react";
import { addPost } from "./postSlice";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title && content && userId) {
      dispatch(
        addPost({
          id: nanoid(),
          title: title,
          content: content,
          userId: userId,
          date: new Date().toISOString(),
        })
      );
      setTitle("");
      setContent("");
      navigate("/");
    } else {
      alert("Data harus diisi semua");
    }
  };

  return (
    <div className="border p-5">
      <h1 className="font-bold text-xl">Add Post</h1>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col">
          <label htmlFor="title">Title </label>
          <input type="text" id="title" className="border outline-none mb-3 px-4 py-1 rounded-lg" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <select id="penulis" onChange={(e) => setUserId(e.target.value)} className="border rounded-md mb-3 outline-none">
            <option> --- Pilih Penulis ---</option>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="content">Content </label>
          <textarea id="content" cols="30" rows="10" className=" border outline-none px-4 py-1 rounded-lg" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <button type="submit" className="bg-blue-400 py-2 w-full rounded mt-5 text-white">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
