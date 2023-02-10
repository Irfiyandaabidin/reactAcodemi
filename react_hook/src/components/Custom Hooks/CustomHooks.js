import React, { useEffect, useState } from "react";
import UseFetch from "./UseFetch";

const CustomHooks = () => {
  const [data] = UseFetch("https://jsonplaceholder.typicode.com/users");
  return <div>{data && data.map((user) => <p key={user.id}>{user.name}</p>)}</div>;
};

export default CustomHooks;
