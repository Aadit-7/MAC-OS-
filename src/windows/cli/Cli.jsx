import React from "react";
import MacWindow from "../macWindow/MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowState }) => {
  // console.log(setWindowsState);

  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I am a full-stack web developer passionate about building modern web applications with React, Node.js, and cloud technologies.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, Vue.js, Vanilla JS, Sass, HTML/CSS
                Backend: Node.js, Express,
                Databases: MongoDB, MySQL
                Tools: Git, Vite
                `,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. Portfolio Website - React + Vite
                2. E-commerce Platform - MERN Stack
                3. Task Management App - Next.js
                4. Real-time Chat App - Socket.io
                5. Data Dashboard - React + Chart.js`,
    },
    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `React js intern @ eTechno Lab  (2024 - 2025)
                - Led development of 5+ React applications
                - Helped optimize performance by 30% through code splitting and lazy loading
                - Collaborated with designers to implement responsive UI/UX
`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: aadityadav121@gmail.com
                Phone: +91 9370205460
                Location: Pune, Maharashtra`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/Aadit-7", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `
                  LinkedIn: https://www.linkedin.com/in/aadit-yadav-331b5317b/
                  Portfolio: https://portfolio-2-0-red-two.vercel.app/`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`;

  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      height="50vh"
      width="50vw"
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"aadityadav:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
