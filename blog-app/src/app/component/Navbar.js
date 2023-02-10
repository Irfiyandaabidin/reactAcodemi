import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex text-white bg-emerald-400 justify-between px-8 py-5 items-center">
      <Link to="/">
        <h1 className="text-2xl font-medium">MyBlogs</h1>
      </Link>
      <div className="flex justify-around w-36">
        <Link to={"/"}>Home</Link>
        <Link to={"add-post"}>Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
