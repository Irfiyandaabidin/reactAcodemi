import React from "react";
import { connect } from "react-redux";
import { BUY_GLOVES } from "../redux/Gloves/GlovesType";

const Gloves = (props) => {
  console.log(props);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stock gloves - {props.gloves}</h1>
      <button onClick={props.buyGloves}>BUY</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    gloves: state.gloves.stockGloves,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyGloves: () => dispatch({ type: BUY_GLOVES }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gloves);
