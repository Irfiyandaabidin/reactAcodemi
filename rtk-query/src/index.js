import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import apiSlice from "./app/features/apiSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={apiSlice}>
    <App />
  </ApiProvider>
);
