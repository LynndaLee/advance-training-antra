import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import "./index.css";

// ReactDOM.render(<HelloMessage />, document.getElementById("app"));
const root = createRoot(document.getElementById("app")); 
root.render(<App />);

//new updated version did not work 
//   const root = ReactDOM.createRoot(document.getElementById("app"));
//   root.render(<HelloMessage />);


