import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  return (
    <div>
      {/* replace untuk mengancurkan */}
      <button onClick={() => navigator("contact", { replace: true })}>Contact Me</button>
    </div>
  );
};

export default Home;
