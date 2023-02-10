import React from "react";
import { Link } from "react-router-dom";
import logo from "../../utils/utility";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex w-screen h-16 justify-between px-4 items-center sticky top-0" style={{ background: "#931814" }}>
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="h-14" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
