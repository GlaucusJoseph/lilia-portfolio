import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainNavbar, Presentation } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainNavbar />
    <Presentation />
  </React.StrictMode>
);
