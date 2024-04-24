import { LiaPrayingHandsSolid } from "react-icons/lia";
import homeimage from '../assets/webdev.jpg'
import CanvasHome from "../Components/CanvasHome";

// import SolarSystem from "../Components/SolarSystem";



function HomeSection(){

    //smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

    return(
        <div id="home" className="h-screen w-full flex items-center justify-center relative " style={{backgroundImage: `url(${homeimage})`}}>
                    <div className="flex flex-col items-center justify-center gap-4 md:gap-10 lg:gap-14 text-center ">
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide flex flex-col items-center lg:items-stretch">
                            <LiaPrayingHandsSolid className="animate-pulse text-red-500"/>
                            <p>Namaskaram, I&apos;am <span className="text-yellow-500">Ankit Mishra</span></p>
                            
                          </h1>
                         
                         <a  onClick={()=>scrollToSection('projects')}>
                                <button className="px-7 lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-white">PROJECTS</button>
                        </a>
                    </div>
                    
                  
                   <CanvasHome/>
                   
             </div>
    )
}

export default HomeSection;