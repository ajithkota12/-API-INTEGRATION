import React from "react";
import ReactDOM from "react-dom/client"; // Use the new API
import App from "./App";
import "./index.css";

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
