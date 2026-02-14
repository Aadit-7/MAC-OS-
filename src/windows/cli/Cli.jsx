import React from "react";
import MacWindow from "../macWindow/MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },

  about: {
    description: "Learn about me.",
    usage: "about",
    fn: () =>
      "Hi! I'm Aadit Yadav, a full-stack developer passionate about creating amazing web experiences.",
  },

  projects: {
    description: "View my recent projects.",
    usage: "projects",
    fn: () =>
      "MAC-OS Portfolio | React Terminal | E-commerce App | Weather App",
  },

  skills: {
    description: "Check my technical skills.",
    usage: "skills",
    fn: () => "JavaScript | React | Node.js | CSS/SCSS | HTML | MongoDB | Git",
  },

  contact: {
    description: "Get my contact information.",
    usage: "contact",
    fn: () =>
      "Email: aadityadav@121.com | GitHub: https://github.com/Aadit-7 | LinkedIn: https://www.linkedin.com/in/aadit-yadav-331b5317b/",
  },

  ls: {
    description: "List portfolio sections.",
    usage: "ls",
    fn: () => "about | projects | skills | contact | experience | education",
  },

  whoami: {
    description: "Display current user.",
    usage: "whoami",
    fn: () => "aadit",
  },

  date: {
    description: "Show current date and time.",
    usage: "date",
    fn: () => new Date().toString(),
  },

  pwd: {
    description: "Print working directory.",
    usage: "pwd",
    fn: () => "/home/aadit/portfolio",
  },

  experience: {
    description: "View my work experience.",
    usage: "experience",
    fn: () => "React JS Developer @ eTechnolab (2024-2025)",
  },

  education: {
    description: "View my education.",
    usage: "education",
    fn: () => "B.E in Computer Science | Pune University, 2024",
  },
};

// 🔥 Commands printed line by line
const welcomeMessage = `
Welcome to Aadit's Terminal Portfolio 🚀

Available Commands:

${Object.keys(commands).join("\n")}

Type 'about' to get started.
`;

const Cli = () => {
  return (
    <MacWindow>
      <div className="cliWindow">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"aadit@yadav:~$"}
          promptLabelStyle={{ color: "#1dec43" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
