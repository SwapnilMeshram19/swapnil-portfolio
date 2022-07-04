import React, { useEffect, useState } from "react";

let imgCounter=0;
let timeout=null;
const ImageSliderBookMyShow =({images})=>{
    const [counter,setCounter]=useState(0);

    useEffect(()=>{
        startInterval();
       
            return ()=>clearInterval(timeout)

    },[])

    imgCounter=counter;
    const startInterval =()=>{
    
        timeout=setInterval(()=>{
            setCounter(counter=>counter+1);
            if(imgCounter===images.length-1){
                setCounter(0);
            }
            
        },3000)
    }
    

    return (

            <img src={images[counter]} alt=""/>


            

    )

}

export default ImageSliderBookMyShow;