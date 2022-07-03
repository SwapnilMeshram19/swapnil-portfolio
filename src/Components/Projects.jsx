import React from "react";
import oneMg from "./Images/oneMg.png";
import { Card, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ImageSlider from "./ImageSlider"

const Projects = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div id="projects">
      <h1>Projects</h1>

      <ImageSlider images={images}/>

      <div>
        <div className="project">
          <Card
            sx={{ width: "30vw", height: "63vh", padding: "0.6vw" }}
            className="project-card"
          >
            <h3>1mg Clone</h3>
            <img src={oneMg}></img>
            <div className="about-project">
              1mg, is a healthcare platform based in Gurgaon, India. It provides
              services, including e-pharmacy, diagnostics, e-consultation and
              health content.
            </div>
            <div className="tech-stack">
              <div>Tech Stack : </div>
              <div>HTML</div>
              <div className="vl"></div>
              <div>CSS</div>
              <div className="vl"></div>
              <div>JavaScript</div>
            </div>
            <div className="button-div">
              <Button
                variant="contained"
                startIcon={<LinkIcon />}
                sx={{
                  padding: "5px 30px",
                  fontSize: "0.9vw",

                  fontWeight: "700",
                  borderRadius: " 5px",
                  border: "2px solid rgb(151, 151, 151)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "left",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                  },
                }}
              >
                Demo
              </Button>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                sx={{
                  padding: "5px 30px",
                  fontSize: "0.9vw",
                  fontWeight: "700",
                  borderRadius: " 5px",
                  border: "2px solid rgb(151, 151, 151)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "right",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                  },
                }}
              >
                Code
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
