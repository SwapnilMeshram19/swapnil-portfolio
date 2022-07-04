import React from 'react';
import Drawer from 'react-modern-drawer';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Link } from "react-scroll";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import 'react-modern-drawer/dist/index.css'
const MenuDrawer =()=>{
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className="drawer-container">
            <DensityMediumIcon sx={{fontSize:"25px",color:"white",position:"absolute", top:"-5px",right:"-30px",display:"none",
            ['@media screen and (max-width:600px)']:{
                display:"block"
            }
        
        }} onClick={toggleDrawer}/>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                
            >

        <div className='drawer'>
           <div className="drawer-header">
            <ChevronLeftIcon sx={{fontSize:"30px",color:"white"}} onClick={toggleDrawer} />
        </div><br/>
        <div className='drawer-div'>
        <Link  to="home" spy={true} smooth={true} className="drawer-link" sx={{marginTop:"20px"}}onClick={toggleDrawer}>Home
        </Link>

        </div>
       <br/>
       <div className='drawer-div'>
       <Link className="drawer-link" to="about" spy={true} smooth={true} onClick={toggleDrawer}>
          About
        </Link>

       </div><br/>
       <div className='drawer-div'>
       <Link className="drawer-link" to="skills" spy={true} smooth={true} onClick={toggleDrawer}>
          Skills
        </Link>

       </div><br/>
       <div className='drawer-div'>
       <Link className="drawer-link" to="projects" spy={true} smooth={true} onClick={toggleDrawer}>
          Projects
        </Link>

       </div><br/>
       <div className='drawer-div'>
       <Link className="drawer-link" to="contact" spy={true} smooth={true} onClick={toggleDrawer}>
          Contact
        </Link>

       </div>
        

        </div>

        
            </Drawer>
        </div>
    )

}

export default MenuDrawer;