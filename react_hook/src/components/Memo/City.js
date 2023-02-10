import React from "react";

const City = ({ cities, addData }) => {
  console.log("City di render");

  return (
    <div>
      {cities.map((city, index) => {
        return <div key={index}>{city}</div>;
      })}
      <button onClick={addData}>Add</button>
    </div>
  );
};

export default React.memo(City);
