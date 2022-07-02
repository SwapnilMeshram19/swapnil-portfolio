import React from "react";
import htmlLogo from "./Images/html.png";
import cssLogo from "./Images/css.png";
import jsLogo from "./Images/js.png";
import reactLogo from "./Images/react.png";
import reduxLogo from "./Images/redux.svg";
import nodejsLogo from "./Images/nodejs.png";
import expressjsLogo from "./Images/expressjs.svg";
import mysqlLogo from "./Images/mysql.svg";
import javaLogo from "./Images/java.svg";
import { Card } from "@mui/material";
const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>

      <div className="skills-grid">
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={htmlLogo} alt="" />
          <h3>HTML</h3>
        </Card>
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={cssLogo} alt="" />
          <h3>CSS</h3>
        </Card>
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={jsLogo} alt="" />
          <h3>JavaScript</h3>
        </Card>
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={reactLogo} alt="" />
          <h3>React.js</h3>
        </Card>
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={reduxLogo} alt="" />
          <h3>Redux.js</h3>
        </Card>
      </div>
      <div className="skills-grid">
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={nodejsLogo} alt="" />
          <h3>Node.js</h3>
        </Card>
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={expressjsLogo} alt="" />
          <h3>Express.js</h3>
        </Card>
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={mysqlLogo} alt="" />
          <h3>MySql</h3>
        </Card>
        <Card
          sx={{ width: "6vw", padding: "0.8vh 1.2vw" }}
          className="skills-card"
        >
          <img src={javaLogo} alt="" />
          <h3>Java</h3>
        </Card>
      </div>

      {/* <div className="skills">
        <div>
          <img src={htmlLogo} alt="" />
          <h5>HTML</h5>
        </div>
        <div>
          <img src={cssLogo} alt=""/>
          <h5>CSS</h5>
        </div>
        <div>
          <img src={jsLogo} alt=""/>
          <h5>JavaScript</h5>
        </div>
        <div>
          <img src={reactLogo}alt="" />
          <h5>React.js</h5>
        </div>
        <div>
          <img src={reduxLogo} alt=""/>
          <h5>Redux.js</h5>
        </div>

        <div>
          <img src={nodejsLogo} alt=""/>
          <h5>Node.js</h5>
        </div>
        <div>
          <img src={expressjsLogo} alt=""/>
          <h5>Express.js</h5>
        </div>
        <div>
          <img src={mysqlLogo} alt=""/>
          <h5>MySql</h5>
        </div>
        <div>
          <img src={javaLogo} alt="" />
          <h5>Java</h5>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
