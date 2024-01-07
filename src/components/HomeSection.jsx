import { LiaPrayingHandsSolid } from "react-icons/lia";
import homeimage from '../assets/home-bg.jpg'

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
        <div id="home" className="h-[60vh] md:h-[80vh] lg:h-screen w-full flex items-center justify-center flex-col gap-12 lg:gap-14 text-center px-4 relative" style={{backgroundImage:`url(${homeimage})`}}>
                   <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                    <span><LiaPrayingHandsSolid/></span>
                    Namaskaram, I&apos;am <span className="text-yellow-500">Ankit Mishra</span>
                    </h1>
                   <p className="w-[70%] lg:text-xl">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                   <a  onClick={()=>scrollToSection('projects')}>
                            <button className="px-7 lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-white">PROJECTS</button>
                    </a>
                   
                   
             </div>
    )
}

export default HomeSection;