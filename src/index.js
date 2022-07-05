import React, {createRoot} from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./styles.css";


const root = ReactDOM.createRoot(document.getElementById("app"));
root.render( <App />);