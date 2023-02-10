import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./userSlice";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      {user.loading && <p> Loading</p>}
      {user.user.length &&
        user.user.map((userItem) => {
          return <p> {userItem.name}</p>;
        })}
    </div>
  );
};

export default User;
