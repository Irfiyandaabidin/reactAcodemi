import React from "react";
import CustomHooks from "./components/Custom Hooks/CustomHooks";
import Index from "./components/Memo";
import UseReducer from "./components/UseReducer/UseReducer";
import UseRef from "./components/UseRef/UseRef";

// Belajar
// import Parent from "./components/UseContext/Parent";

// // Membuat context
// export const namaContext = React.createContext();

// function App() {
//   return (
//     <namaContext.Provider value={{ firstname: "Irfiyanda", lastname: "Abidin" }}>
//       <Parent />
//     </namaContext.Provider>
//   );
// }
// Selesai Belajar Context

function App() {
  return (
    <div>
      <CustomHooks />
    </div>
  );
}

export default App;
