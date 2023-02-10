import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link to={"email"}>Email</Link>
      <br />
      <Link to={"alamat"}>alamat</Link>

      {/* Outlet = lokasi tampilkan component */}
      <Outlet />
    </div>
  );
};

export default About;
