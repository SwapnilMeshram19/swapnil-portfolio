import React from "react";
import oneMg from "./Images/oneMg.png";
import { Card, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ImageSlider from "./ImageSlider";

const Projects = () => {
  const oneMgImages = [
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/1mg-images/img1.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/1mg-images/img2.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/1mg-images/img3.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/1mg-images/img4.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/1mg-images/img5.png?raw=true",
  ];

  const bookmyshowImages = [
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img1.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img1.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img3.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img4.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img5.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img6.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img7.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img8.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/bookmyshow-images/img9.png?raw=true",
  ];

  const dineoutImages = [
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/dineout-images/img1.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/dineout-images/img2.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/dineout-images/img3.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/dineout-images/img4.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/dineout-images/img5.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/dineout-images/img5.png?raw=true",
    "https://github.com/SwapnilMeshram19/swapnil-portfolio/blob/main/project-images/dineout-images/img7.png?raw=true",
  ];
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div>
        <div className="project">
          <Card
            sx={{ width: "30vw", height: "452px", padding: "0.6vw 0px" }}
            className="project-card"
          >
            <h3>Bookmyshow Clone</h3>
            <ImageSlider images={bookmyshowImages} />
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

          <Card
            sx={{ width: "30vw", height: "452px", padding: "0.6vw 0px" }}
            className="project-card"
          >
            <h3>1mg Clone</h3>
            <ImageSlider images={oneMgImages} />
            <div className="about-project">
              Book advance movie tickets, cinema tickets, sports & cricket
              tickets. Get movie show times, buy merchandise, concert tickets &
              play tickets.
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
        <div className="project-l2">
          <Card
            sx={{ width: "30vw", height: "452px", padding: "0.6vw 0px" }}
            className="project-card"
          >
            <h3>Dineout Clone</h3>
            <ImageSlider images={dineoutImages} />
            <div className="about-project">
              Dineout is a table booking platform helping customers to do table
              booking in their favourite restaurants for free and help them get
              great discounts.
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
