import React from "react";
import "./app.scss";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Dock />
      <Navbar/>
    </div>
  );
};

export default App;
