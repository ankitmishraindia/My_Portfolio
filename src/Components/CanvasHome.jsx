import { useEffect } from "react";


function CanvasHome(){

useEffect(()=>{
    const canvas=document.getElementById('canvas1') 
    const ctx=canvas.getContext('2d')
    const particlesArray=[]
    
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    window.addEventListener('resize',function(){
        canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    })
    
    

    class Particle{
        constructor(){
            this.x=Math.random() * canvas.width;
            this.y=Math.random() * canvas.height;
            this.size=Math.random()*5 +1;
            this.speedX=Math.random() *3 -1.5;
            this.speedY=Math.random() *3 -1.5;
        }
        update(){
           this.x +=this.speedX;
           this.y +=this.speedY;
        }
        draw(){
            ctx.strokeStyle='green';
            ctx.fillStyle='blue'
           ctx.lineWidth='3px'
           ctx.beginPath();
            ctx.arc(this.x,this.y,30,0,Math.PI*2)
           ctx.fill()
        }
    }

    function init(){
          for(let i=0;i<100;i++){
            particlesArray.push(new Particle())
          }
    }
    init()
    
    // draw and give speed to each particle
    function handleParticle(){
        for(let i=0;i<particlesArray.length;i++){
            particlesArray[i].update();
            particlesArray[i].draw();
        }
    }

    

     
    //animation
    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        handleParticle()
        requestAnimationFrame(animate)
    }
    animate()
   
    
},[])

    return(
        <canvas id="canvas1" className="w-full h-full bg-black absolute top-0 left-0">

        </canvas>
    )
}

export default CanvasHome;