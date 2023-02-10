import React from "react";
import { useSelector } from "react-redux";

const Author = ({ userId }) => {
  const users = useSelector((state) => state.users);
  const username = users.find((user) => user.id === Number(userId));

  return <span className="underline">{username ? username.user : "Penulis tidak dikenal"}</span>;
};

export default Author;
