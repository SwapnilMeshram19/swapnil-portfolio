import React from "react";
import oneMg from  "./Images/oneMg.png"
import {Card} from "@mui/material"


const Projects = () => {

  
  return (
    <div id="projects">
      <h1>Projects</h1>

      <div>
        <div className="project">
          <Card sx={{width:"30vw",height:"60vh",padding:"0.5vw"}} className="project-card">
            <img src={oneMg}></img>
            <div>
              
            </div>

          </Card>
          
        </div>

      </div>
    </div>
  );
};

export default Projects;
