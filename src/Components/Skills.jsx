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
import mongoDB from "./Images/MongoDB.png"
import { Box, Card, Grid } from "@mui/material";
import Slider from "react-slick";

const skillsData=[
  {
    image:"images/logos/html.png",
    title:"HTML"
  },
  {
    image:"images/logos/css.png",
    title:"CSS"
  },
  {
    image:"images/logos/js.png",
    title:"JavaScript"
  },
  {
    image:"images/logos/react.png",
    title:"React.js"
  },
  {
    image:"images/logos/redux.svg",
    title:"Redux.js"
  },
  {
    image:"images/logos/nodejs.png",
    title:"Node.js"
  },
  {
    image:"images/logos/expressjs.svg",
    title:"Express.js"
  },
  {
    image:"images/logos/MongoDB.png",
    title:"MongoDB"
  }
]
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

const Skills = () => {
  const settings = {
    className:'slider',
    dots: false,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    // swipeToSlide: false,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]

  };
  return (
    <div id="skills">
      <h1>Skills</h1>

      <div style={{width:"85%", margin:"auto", border:"solid white 2px", marginTop:"80px"}}>
      <Slider {...settings}>
              {skillsData.map((ele) => (
                <div >
   <Card
                sx={{
                  margin:"20px",
                  padding:"0.5rem 1.5rem",
                  
                  marginLeft:"10px"
                }}
                className="skills-card"
              >
                <img src={ele.image} alt={ele.title} />
                <h3>{ele.title}</h3>
              </Card>
                </div>
             
              ))}
            </Slider>
      </div>
{/*      
      <Box
        sx={{
          flexGrow: 1,
          width: "50%",
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
          rowSpacing={{ xs: 10, sm: 5, md: 6 }}
          columnSpacing={{ xs: 5, sm: 5, md: 25 }}
        >
          <Grid item xs={3} md={1} sm={12} sx={{}}>
            
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
            
          </Grid>
          <Grid item xs={3} md={1} sm={12}>
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

          <Grid item xs={3} md={1} sm={12}>
          
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
        
          </Grid>
          <Grid item xs={3} md={1} sm={12}>
          
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
          
          </Grid>
          <Grid item xs={3} md={1} sm={12}>
            
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
            
          </Grid>
          <Grid item xs={3} md={1} sm={12}>
          
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
            
          </Grid>
          <Grid item xs={3} md={1} sm={12}>
            
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
              
          </Grid>
         
          <Grid item xs={3} md={1} sm={12}>
            
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
                <img src={mongoDB} alt=""  style={{width:"100%", height:"50px", margin:"22px 0px"}}/>
                <h3>MongoDB</h3>
              </Card>
        
          </Grid>
        </Grid>
      </Box> */}
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
