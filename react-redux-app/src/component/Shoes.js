import React from "react";
import { connect } from "react-redux";
import { BUY_SHOES } from "../redux/Shoes/ShoesType";

const Shoes = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stock Shoes - {props.shoes}</h1>
      <button onClick={props.buyShoes}>BUY</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shoes: state.shoes.stockShoes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyShoes: () => dispatch({ type: BUY_SHOES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Shoes);
