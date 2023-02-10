import React, { useRef, useState } from "react";

const UseRef = () => {
  // untuk manipulasi dom secara manual
  const btnRef = useRef(0);

  function handlerState() {
    console.log(btnRef.current);
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div>
      <button onClick={handlerState} ref={btnRef}>
        Hello
      </button>
    </div>
  );
};

export default UseRef;
