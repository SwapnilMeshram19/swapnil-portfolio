import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import MenuDrawer from "./MenuDrawer";
import SamLogo from "../sam-logo.png"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="home" spy={true} smooth={true}><img src={SamLogo} class="sam-logo" style={{cursor:"pointer"}}/></Link>
      
      <div className="links">
        <Link className="nav-link" to="home" spy={true} smooth={true}>
          Home
        </Link>
        <Link className="nav-link" to="about" spy={true} smooth={true}>
          About
        </Link>
        <Link className="nav-link" to="skills" spy={true} smooth={true}>
          Skills
        </Link>
        <Link className="nav-link" to="projects" spy={true} smooth={true}>
          Projects
        </Link>
        <Link className="nav-link" to="contact" spy={true} smooth={true}>
          Contact
        </Link>
        <MenuDrawer/>
      </div>
    </div>
  );
};

export default Navbar;
