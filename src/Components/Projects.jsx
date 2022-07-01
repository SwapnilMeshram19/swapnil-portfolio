import React, { useEffect } from "react";
import ReactPlayer from "react-player"
import mg from "./videos/1mg.mp4";
import bookmyshow from "./videos/bookmyshow.mp4";
import dineout from "./videos/dineout.mp4"

const Projects = () => {

  
  return (
    <div id="projects">
      <h1>Projects</h1>

      <div>
        <div className="project">
          <ReactPlayer
           url={mg}
           loop={true}
           playing={true}
           muted={true}
           playbackRate={0.5}
           controls={false}
           config={{ file: { 
            attributes: {
              controlsList: 'nodownload'  
            }
        }}}
           onContextMenu={e => e.preventDefault()}
           onEnded={()=>this.onEnded()}
          />
          <ReactPlayer
           url={bookmyshow}
           muted={true}
           playbackRate={0.5}
           loop={true}
           playing={true}
           controls={false}
           config={{ file: { 
            attributes: {
              controlsList: 'nodownload' 
            }
        }}}
        onContextMenu={e => e.preventDefault()}
           onEnded={()=>this.onEnded()}
          />
        </div>

      </div>
    </div>
  );
};

export default Projects;
