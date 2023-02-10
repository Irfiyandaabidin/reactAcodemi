import React, { useCallback, useMemo, useState } from "react";
import City from "./City";

const kuadrat = (count) => {
  console.log("Kuadrat Dijalankan");
  return count * count;
};

// Memo untuk menghentikan render ketika props dijalankan
const Index = () => {
  const [counter, setCounter] = useState(0);
  const [city, setCity] = useState(["Pemalang", "Jogja", "Semarang"]);
  const newKuadrat = useMemo(() => kuadrat(counter), [counter]);

  function increment() {
    setCounter(counter + 1);
  }

  // Use Callback
  const addCity = useCallback(() => {
    setCity((prev) => [...prev, "Kota Baru"]);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{counter}</h1>
      <h1>{newKuadrat}</h1>
      <button onClick={increment}>Increment</button>
      <hr />
      <City addData={addCity} cities={city} />
    </div>
  );
};

export default Index;
