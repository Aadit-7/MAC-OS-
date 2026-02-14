import React from "react";
import MacWindwo from "../macWindow/MacWindow";
import gitData from "../../assets/github.json";
import "./github.scss";

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h1>{data.title}</h1>
      <p className="description">{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
          <p className="tag">{tag}</p>
        ))}
      </div>

      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        {data.demoLink && <a href={data.demoLink}>Demo Link</a>}
      </div>
    </div>
  );
};

const Github = ({ windowName, setWindowState }) => {
  return (
    <MacWindwo windowName={windowName} setWindowState={setWindowState}>
      <div className="cards">
        {gitData.map((projects) => {
          return <GitCard data={projects} />;
        })}
      </div>
    </MacWindwo>
  );
};

export default Github;
