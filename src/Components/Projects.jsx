import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import ImageSliderBookMyShow from "./ImageSliderBookMyShow";
import ImageSliderOneMg from "./ImageSliderOneMg";
import ImageSliderDinout from "./ImageSliderDineout";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import SimpleImageSlider from "react-simple-image-slider";
import { Box, Button, CardMedia, Divider, Card } from "@mui/material";
import ReactImageGallery from "react-image-gallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: false,
  autoplay: true,
  autoplaySpeed: 2000,
};
const Projects = () => {
  const oneMgImages = [
    "images/1mg-images/img1.png",
    "images/1mg-images/img2.png",
    "images/1mg-images/img3.png",
    "images/1mg-images/img4.png",
    "images/1mg-images/img5.png",
  ];

  const bookmyshowImages = [
    "images/bookmyshow-images/img1.png",
    "images/bookmyshow-images/img2.png",
    "images/bookmyshow-images/img3.png",
    "images/bookmyshow-images/img4.png",
    "images/bookmyshow-images/img5.png",
    "images/bookmyshow-images/img6.png",
    "images/bookmyshow-images/img7.png",
    "images/bookmyshow-images/img8.png",
    "images/bookmyshow-images/img9.png",
  ];

  const dineoutImages = [
    "images/dineout-images/img1.png",
    "images/dineout-images/img2.png",
    "images/dineout-images/img3.png",
    "images/dineout-images/img4.png",
    "images/dineout-images/img5.png",
    "images/dineout-images/img6.png",
    "images/dineout-images/img7.png",
  ];
  const imdbImages = [
    "images/imdb-images/img1.png",
    "images/imdb-images/img2.png",
    "images/imdb-images/img3.png",
    "images/imdb-images/img4.png",
    "images/imdb-images/img5.png",
    "images/imdb-images/img6.png",
    "images/imdb-images/img7.png",
    "images/imdb-images/img8.png",
    "images/imdb-images/img9.png",
    "images/imdb-images/img10.png",
    "images/imdb-images/img11.png",
    "images/imdb-images/img12.png",
  ];

  // const imdbImages = [
  //   { original: "images/imdb-images/img1.png",originalWidth:"250px",originalHeight:"300px" },
  //   { original: "images/imdb-images/img2.png" },
  //   { original: "images/imdb-images/img3.png" },
  //   { original: "images/imdb-images/img4.png" },
  //   { original: "images/imdb-images/img5.png" },
  //   { original: "images/imdb-images/img6.png" },
  //   { original: "images/imdb-images/img7.png" },
  //   { original: "images/imdb-images/img8.png" },
  //   { original: "images/imdb-images/img9.png" },
  //   { original: "images/imdb-images/img10.png" },
  //   { original: "images/imdb-images/img11.png" },
  //   { original: "images/imdb-images/img12.png" },
  // ];
  let width = 100;
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div>
        <div className="project">
          <Card
            sx={{
              maxWidth: "450px",
              margin: "auto",
            }}
          >
            <CardHeader
              title="IMDb Clone"
              fontWeight={900}
              sx={{ fontWeight: "800" }}
            />

            <Slider {...settings}>
              {imdbImages.map((ele) => (
                <CardMedia
                  component="img"
                  height="250"
                  image={ele}
                  alt="imdb images"
                />
              ))}
            </Slider>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                IMDb is an online database of information related to films,
                television series, home videos, video games, and streaming
                content online
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "flex",
                  gap: "4px",
                  fontWeight: "600",
                  marginTop: "10px",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Typography variant="span" sx={{}}>
                  Tech Stack :
                </Typography>{" "}
                HTML <Divider orientation="vertical" flexItem />
                CSS
                <Divider orientation="vertical" flexItem />
                JavaScript
                <Divider orientation="vertical" flexItem />
                React JS
                <Divider orientation="vertical" flexItem />
                Redux
              </Typography>
            </CardContent>

            <CardActions
              sx={{ justifyContent: "space-between", padding: "10px 20px" }}
            >
              <Button
                variant="contained"
                startIcon={<LinkIcon />}
                sx={{
                  padding: "5px 30px",
                  fontSize: "0.9vw",
                  fontWeight: "700",
                  borderRadius: " 5px",
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "left",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://62f1166bb465cf7b970869f9--imdbclone-masai.netlify.app/"
                  );
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
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "right",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://github.com/SwapnilMeshram19/imdbclone.git"
                  );
                }}
              >
                Code
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              maxWidth: "450px",
              margin: "auto",
            }}
          >
            <CardHeader
              title="Bookmyshow Clone"
              fontWeight={900}
              sx={{ fontWeight: "800" }}
            />

            <Slider {...settings}>
              {bookmyshowImages.map((ele) => (
                <CardMedia
                  component="img"
                  height="250"
                  image={ele}
                  alt="bookmyshow images"
                />
              ))}
            </Slider>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Book advance movie tickets, cinema tickets, sports & cricket
              tickets. Get movie show times, buy merchandise, concert tickets &
              play tickets.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "flex",
                  gap: "4px",
                  fontWeight: "600",
                  marginTop: "10px",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Typography variant="span" sx={{}}>
                  Tech Stack :
                </Typography>{" "}
                HTML <Divider orientation="vertical" flexItem />
                CSS
                <Divider orientation="vertical" flexItem />
                JavaScript
                <Divider orientation="vertical" flexItem />
                React JS
                <Divider orientation="vertical" flexItem />
                Redux
              </Typography>
            </CardContent>

            <CardActions
              sx={{ justifyContent: "space-between", padding: "10px 20px" }}
            >
              <Button
                variant="contained"
                startIcon={<LinkIcon />}
                sx={{
                  padding: "5px 30px",
                  fontSize: "0.9vw",
                  fontWeight: "700",
                  borderRadius: " 5px",
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "left",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open("https://bookmyshow-cloned.netlify.app/");
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
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "right",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://github.com/SwapnilMeshram19/bookmyshow-clone.git"
                  );
                }}
              >
                Code
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              maxWidth: "450px",
              margin: "auto",
            }}
          >
            <CardHeader
              title="1mg Clone"
              fontWeight={900}
              sx={{ fontWeight: "800" }}
            />

            <Slider {...settings}>
              {oneMgImages.map((ele) => (
                <CardMedia
                  component="img"
                  height="250"
                  image={ele}
                  alt="1mg images"
                />
              ))}
            </Slider>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
              1mg is India's best online pharmacy, is an healthcare platform. It provides services, including
              e-pharmacy, diagnostics, e-consultation and health content.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "flex",
                  gap: "4px",
                  fontWeight: "600",
                  marginTop: "10px",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Typography variant="span" sx={{}}>
                  Tech Stack :
                </Typography>{" "}
                HTML <Divider orientation="vertical" flexItem />
                CSS
                <Divider orientation="vertical" flexItem />
                JavaScript
                
              </Typography>
            </CardContent>

            <CardActions
              sx={{ justifyContent: "space-between", padding: "10px 20px" }}
            >
              <Button
                variant="contained"
                startIcon={<LinkIcon />}
                sx={{
                  padding: "5px 30px",
                  fontSize: "0.9vw",
                  fontWeight: "700",
                  borderRadius: " 5px",
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "left",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open("https://1mg-cloned.netlify.app/");
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
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "right",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://github.com/SwapnilMeshram19/1mg.git"
                  );
                }}
              >
                Code
              </Button>
            </CardActions>
          </Card>
          <Card
            sx={{
              maxWidth: "450px",
              margin: "auto",
            }}
          >
            <CardHeader
              title="Dineout Clone"
              fontWeight={900}
              sx={{ fontWeight: "800" }}
            />

            <Slider {...settings}>
              {dineoutImages.map((ele) => (
                <CardMedia
                  component="img"
                  height="250"
                  image={ele}
                  alt="dineout images"
                />
              ))}
            </Slider>

            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Dineout is a table booking platform helping customers to do table booking in their favourite restaurants for free and help them get great discounts.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  display: "flex",
                  gap: "4px",
                  fontWeight: "600",
                  marginTop: "10px",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Typography variant="span" sx={{}}>
                  Tech Stack :
                </Typography>{" "}
                HTML <Divider orientation="vertical" flexItem />
                CSS
                <Divider orientation="vertical" flexItem />
                JavaScript
                
              </Typography>
            </CardContent>

            <CardActions
              sx={{ justifyContent: "space-between", padding: "10px 20px" }}
            >
              <Button
                variant="contained"
                startIcon={<LinkIcon />}
                sx={{
                  padding: "5px 30px",
                  fontSize: "0.9vw",
                  fontWeight: "700",
                  borderRadius: " 5px",
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "left",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open("https://dineout-cloned.netlify.app/");
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
                  border: "2px solid rgb(255, 173, 0)",
                  cursor: "pointer",
                  backgroundColor: " rgb(255, 173, 0)",
                  float: "right",
                  "&:hover": {
                    backgroundColor: "rgb(25, 118, 210)",
                    color: "rgb(255, 173, 0)",
                  },

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://github.com/SwapnilMeshram19/Dineout-Clone.git"
                  );
                }}
              >
                Code
              </Button>
            </CardActions>
          </Card>

          
        </div>
        {/* <div className="project">
          <Card
            sx={{
              width: "30vw",
              height: "452px",
              padding: "0.6vw 0px",
              ["@media screen and (max-width:600px)"]: {
                width: "80%",
                margin: "auto",
                height: "400px",
                padding: "1vw 0px",
                marginTop: "5vh",
              },
            }}
            className="project-card"
          >
            <h3>1mg Clone</h3>
            <ImageSliderOneMg images={oneMgImages} />
            <div className="about-project">
              1mg, is a healthcare platform. It provides services, including
              e-pharmacy, diagnostics, e-consultation and health content.
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

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open("https://1mg-cloned.netlify.app/");
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

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open("https://github.com/SwapnilMeshram19/1mg.git");
                }}
              >
                Code
              </Button>
            </div>
          </Card>

          <Card
            sx={{
              width: "30vw",
              height: "452px",
              padding: "0.6vw 0px",
              ["@media screen and (max-width:600px)"]: {
                width: "80%",
                margin: "auto",
                height: "400px",
                padding: "1vw 0px",
                marginTop: "5vh",
              },
            }}
            className="project-card"
          >
            <h3>Dineout Clone</h3>
            <ImageSliderDinout images={dineoutImages} />
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

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open("https://dineout-cloned.netlify.app/");
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

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://github.com/SwapnilMeshram19/Dineout-Clone.git"
                  );
                }}
              >
                Code
              </Button>
            </div>
          </Card>
        </div> */}
        {/* <div className="project-l2">
          <Card
            sx={{
              width: "30vw",
              height: "452px",
              padding: "0.6vw 0px",
              ["@media screen and (max-width:600px)"]: {
                width: "80%",
                margin: "auto",
                height: "400px",
                padding: "1vw 0px",
                marginTop:"5vh"
              },
            }}
            className="project-card"
          >
            <h3>Dineout Clone</h3>
            <ImageSliderDinout images={dineoutImages} />
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

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://dineout-cloned.netlify.app/"
                  );
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

                  ["@media screen and (max-width:600px)"]: {
                    fontSize: "3.2vw",
                    padding: "3px 20px",
                  },
                }}
                onClick={(event) => {
                  window.open(
                    "https://github.com/SwapnilMeshram19/Dineout-Clone.git"
                  );
                }}
              >
                Code
              </Button>
            </div>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
