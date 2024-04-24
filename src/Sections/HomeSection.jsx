

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
                          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white bg-transparent font-bold tracking-wide flex flex-col items-center lg:items-stretch">
                            
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