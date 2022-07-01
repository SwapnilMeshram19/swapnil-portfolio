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
const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="skills">
        <div>
          <img src={htmlLogo} />
          <h5>HTML</h5>
        </div>
        <div>
          <img src={cssLogo} />
          <h5>CSS</h5>
        </div>
        <div>
          <img src={jsLogo} />
          <h5>JavaScript</h5>
        </div>
        <div>
          <img src={reactLogo} />
          <h5>React.js</h5>
        </div>
        <div>
          <img src={reduxLogo} />
          <h5>Redux.js</h5>
        </div>

        <div>
          <img src={nodejsLogo} />
          <h5>Node.js</h5>
        </div>
        <div>
          <img src={expressjsLogo} />
          <h5>Express.js</h5>
        </div>
        <div>
          <img src={mysqlLogo} />
          <h5>MySql</h5>
        </div>
        <div>
          <img src={javaLogo} />
          <h5>Java</h5>
        </div>
      </div>
    </div>
  );
};

export default Skills;
