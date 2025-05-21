// src/App.jsx
import React from "react";
import Register from "./Signup/Register"; // ✅ Correct import path
import "./App.css";

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
