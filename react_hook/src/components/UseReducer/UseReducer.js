import React, { useReducer } from "react";

const UseReducer = () => {
  function reducer(state, action) {
    // Ketika di INCREMENT
    // Jalankan action.type === INCREMENT
    if (action.type === "INCREMENT") {
      return state + action.value;

      // Ketika di DECREMENT
      // Jalankan action.type === DECREMENT
    } else if (action.type === "DECREMENT") {
      return state - action.value;
    } else {
      return 0;
    }
  }

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    // Sebuah function untuk mengelola state, sama dengan useState tetapi lebih komplek
    <div style={{ textAlign: "center" }}>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT", value: 5 })}>Decrement</button>
        <button onClick={() => dispatch({ type: "INCREMENT", value: 6 })}>Increment</button>
      </div>
    </div>
  );
};

export default UseReducer;
