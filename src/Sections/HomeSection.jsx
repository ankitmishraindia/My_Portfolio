
import {  BiSolidBriefcase } from "react-icons/bi";
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
        <div id="home" className="h-screen w-full flex items-center justify-center relative ">
                    <div className="flex flex-col items-center justify-center gap-4 md:gap-10 lg:gap-14 text-center z-10">
                          <h1 className="text-4xl sacramento-regular md:text-6xl text-white bg-transparent  tracking-wide flex flex-col items-center lg:items-stretch">
                            
                            <p className="font-extrabold">
                              Namaskaram, I&apos;m <span className="text-yellow-500">
                                 Ankit Mishra,
                                </span>
                                <br />
                                <span className="text-red-500">Full stack Web developer.</span>
                                </p>
                            
                          </h1>
                         
                         <a  onClick={()=>scrollToSection('projects')}>
                                <button className="px-7 flex items-center gap-2 bg-transparent lg:px-10 py-2 lg:py-3 font-bold  hover:bg-yellow-600 text-white border-2 border-white hover:text-black">
                                  PROJECTS
                                  <BiSolidBriefcase/>
                                  </button>
                        </a>
                    </div>
                    
                  
                   <CanvasHome/>
                   
             </div>
    )
}

export default HomeSection;