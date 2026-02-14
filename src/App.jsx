import React from "react";
import "./app.scss";
import Dock from "./components/Dock/Dock";
import Navbar from "./components/navbar/Navbar";
import Github from "./windows/github/Github";
import Notes from "./windows/notes/Notes";
import Resume from "./windows/resume/Resume";
import Spotify from "./windows/spotify/Spotify";
import Cli from "./windows/cli/Cli";

const App = () => {
  return (
    <div>
      <Dock />
      <Navbar />
      <Github />
      <Notes />
      <Resume />
      <Spotify />
      <Cli />
    </div>
  );
};

export default App;
