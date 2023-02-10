import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigator = useNavigate();
  return (
    <div>
      <h1>Halaman Contact</h1>
      <button onClick={() => navigator(-1)}>Back</button>
    </div>
  );
};

export default Contact;
