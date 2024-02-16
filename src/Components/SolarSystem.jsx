import { useEffect } from "react";

function SolarSystem(){

    useEffect(()=>{
         const canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
          ctx.fillStyle="rgb(200 200 0)";
          ctx.fillRect(10,10,200,200)
        }
    },[])
   
   
    return(
        <canvas id="canvas" width="150" height="150"></canvas>
    )
}

export default SolarSystem;