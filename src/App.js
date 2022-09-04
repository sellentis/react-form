import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
