import { useState } from "react";
import "./App.css";
import SetUpRouter from "./router/SetUpRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import Context from "./context/Context";
import { useEffect } from "react";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <SetUpRouter />
      </BrowserRouter>
    </Context>
  );
}

export default App;
