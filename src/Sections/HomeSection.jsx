import { LiaPrayingHandsSolid } from "react-icons/lia";
import homeimage from '../assets/webdev.jpg'

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
        <div id="home" className="h-[60vh] md:h-[80vh] lg:h-screen w-full flex items-center justify-center relative " style={{backgroundImage: `url(${homeimage})`}}>
                    <div className="flex flex-col items-center justify-center gap-4 md:gap-10 lg:gap-14 text-center ">
                          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                            <div><LiaPrayingHandsSolid/></div>
                            Namaskaram, I&apos;am <span className="text-yellow-500">Ankit Mishra</span>
                          </h1>
                         <p className="w-[70%] lg:text-xl">A focused Full stack Web Developer building the Frontend & Backend of Websites and Web Applications that leads to the success of the overall product.</p>
                         <a  onClick={()=>scrollToSection('projects')}>
                                <button className="px-7 lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-white">PROJECTS</button>
                        </a>
                    </div>
                  
                  
                   
             </div>
    )
}

export default HomeSection;