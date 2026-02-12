import React from "react";
import "./app.scss";
import Dock from "./components/Dock/Dock";
import Navbar from "./components/navbar/Navbar";
import MacWindow from "./windows/macWindow/MacWindow";

const App = () => {
  return (
    <div>
      <Dock />
      <Navbar />
      <MacWindow>
        
      </MacWindow>
    </div>
  );
};

export default App;
