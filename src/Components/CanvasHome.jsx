import { useEffect } from "react";


function CanvasHome(){

useEffect(()=>{
    const canvas=document.getElementById('canvas1') 
    const ctx=canvas.getContext('2d')
     console.log(ctx)
    
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    class Particle{
           constructor(effect){
            this.effect=effect;
            this.x=Math.random()* this.effect.width;
            this.y=Math.random() * this.effect.height;
            this.radius=2;
            this.speedX=1;
           }
           draw(context){
            context.fillStyle='hsl('+this.x+',100%,50%)';
            context.beginPath();
            context.arc(this.x,this.y,this.radius,0,Math.PI*2)
            context.fill()
           }
           update(){
            this.x +=this.speedX;
            if(this.x>this.effect.width||this.x<0) this.speedX *=-1
           }
    }


    class Effect{
       constructor(canvas){
        this.canvas=canvas;
        this.height=this.canvas.height;
        this.width=this.canvas.width;
        this.particles=[];
        this.numberOfParticles=100;
        this.createParticles()
       }
       createParticles(){
        for(let i=0;i<this.numberOfParticles;i++){
            this.particles.push(new Particle(this))
        }
       }
       handleParticles(context){
        this.particles.forEach(particle=>{
            particle.draw(context)
            particle.update()
        })
       }
    }
    const effect=new Effect(canvas)
    

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        effect.handleParticles(ctx)
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