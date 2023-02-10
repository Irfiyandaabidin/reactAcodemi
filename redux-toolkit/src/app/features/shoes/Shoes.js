import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStock, buyShoes } from "./shoesSlice";

const Shoes = () => {
  const shoes = useSelector((state) => state.shoes.stockShoes);
  const dispatch = useDispatch();
  const [addStockNumber, setAddStockNumber] = useState(0);
  const convertNumber = Number(addStockNumber);

  console.log(shoes);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stock Shoes : {shoes}</h1>
      <button onClick={() => dispatch(buyShoes())}>Buy</button>
      <input type="number" onChange={(e) => setAddStockNumber(e.target.value)} value={addStockNumber} />
      <button onClick={() => dispatch(addStock(convertNumber))}>Add Stock</button>
    </div>
  );
};

export default Shoes;
