import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUY_SHOES } from "../redux/Shoes/ShoesType";

const ShoesHook = () => {
  const shoes = useSelector((state) => {
    return {
      stockShoes: state.shoes.stockShoes,
    };
  });

  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stock Shoes -{shoes.stockShoes}</h1>
      <button onClick={() => dispatch({ type: BUY_SHOES })}>BUY</button>
    </div>
  );
};

export default ShoesHook;
