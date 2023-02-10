import React, { useContext } from "react";
import { namaContext } from "../../App";

const Child = () => {
  const nama = useContext(namaContext);
  return (
    <div>
      {nama.firstname} - {nama.lastname}
    </div>
  );
};

export default Child;
