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
import { Box, Card, Grid } from "@mui/material";
const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <Box
        sx={{
          flexGrow: 1,
          width: "62%",
          margin: "auto",
          marginTop: "100px",
          ["@media screen and (max-width:600px)"]: {
            width: "80%",
            margin: "auto",
          },
        }}
      >
        <Grid
          container
          rowSpacing={{ xs: 5, sm: 5, md: 6 }}
          columnSpacing={{ xs: 5, sm: 10, md: 25 }}
        >
          <Grid item xs={6} md={1} sm={6} sx={{}}>
            <div className="grid1">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",

                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={htmlLogo} alt="" />
                <h3>HTML</h3>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={1} sm={6}>
            <Card
              sx={{
                width: "6vw",
                padding: "0.8vh 1.2vw",
                ["@media screen and (max-width:600px)"]: {
                  width: "30vw",
                  padding: "1vh 1.5vw",
                },
              }}
              className="skills-card"
            >
              <img src={cssLogo} alt="" />
              <h3>CSS</h3>
            </Card>
          </Grid>

          <Grid item xs={6} md={1} sm={6}>
            <div className="grid2">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",
                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={jsLogo} alt="" />
                <h3>JavaScript</h3>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={1} sm={6}>
            <div className="grid3">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",
                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={reactLogo} alt="" />
                <h3>React.js</h3>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={1} sm={6}>
            <div className="grid3">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",
                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={reduxLogo} alt="" />
                <h3>Redux.js</h3>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={1} sm={6}>
            <div className="grid6">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",
                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={nodejsLogo} alt="" />
                <h3>Node.js</h3>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={1} sm={6}>
            <div className="grid6">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",
                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={expressjsLogo} alt="" />
                <h3>Express.js</h3>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={1} sm={6}>
            <div className="grid6">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",
                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={mysqlLogo} alt="" />
                <h3>MySql</h3>
              </Card>
            </div>
          </Grid>
          <Grid item xs={6} md={1} sm={6}>
            <div className="grid6 grid-last">
              <Card
                sx={{
                  width: "6vw",
                  padding: "0.8vh 1.2vw",
                  ["@media screen and (max-width:600px)"]: {
                    width: "30vw",
                    padding: "1vh 1.5vw",
                  },
                }}
                className="skills-card"
              >
                <img src={javaLogo} alt="" />
                <h3>Java</h3>
              </Card>
            </div>
          </Grid>
        </Grid>
      </Box>
      {/* 
      <div className="skills-grid">
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
      </div> */}

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
