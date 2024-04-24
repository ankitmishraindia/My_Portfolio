import { IoMdMail } from "react-icons/io";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import Hexagon from "../Components/Hexagon";





function AboutSection(){
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
        <div id="about" className=" w-full h-fit px-10 md:px-5 lg:px-16 py-0 lg:py-10 flex flex-col items-center justify-evenly lg:justify-around">

            <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-wide">ABOUT ME</h2>
                <div className="w-[100px] bg-yellow-500 h-2 rounded-xl mt-3 m-auto"></div>
            </div>
            <div className="md:flex md:items-center  md:mt-20 mt-10">
                    <div className="space-y-8 lg:space-y-7 w-full  flex flex-col items-center ">
                        
                        
                          
                        <Hexagon/>
                        
                        <div className="flex">
                            <a  onClick={()=>scrollToSection('contact')} className="cursor-pointer text-white hover:text-green-700 animate-bounce ">
                              <IoMdMail size={44} className="text-blue-500"/>
                              <span>Mail me!</span>
                            </a>
                            <a href="https://wa.link/85jmr7" className=" animate-bounce cursor-pointer text-white hover:text-red-400 ml-3 tooltip-left">
                              <PiWhatsappLogoDuotone size={44} className="text-green-400"/>
                              <span className="">Whatsapp me!</span>
                            </a>
                        </div>
                        
                       
                        
                        
                    </div>
                    <div className="w-full space-y-5 lg:space-y-10 text-center md:text-left">
                        <h3 className="text-2xl font-bold">Education & Trainings!</h3>
                        <div className=" lg:text-xl md:max-w-[80%]">
                            <ul className="space-y-2 text-justify" >
                                <li type="square">Completed One year training Program by <em>PWSkills</em>.</li>
                                <li type="square">Completed <b>IT Computer Diploma</b> O&apos; Level from National Institute of Electronics and Information Technology.</li>
                                <li type="square">Completed Graduation from Acharya Narendra Dev Kisan PG College.</li>
                           </ul>
                        </div>
                        <h3 className="text-2xl font-bold">Hobbies!</h3>
                        <ul className="space-y-2 lg:text-xl md:max-w-[80%] text-justify" >
                                <li type="square">I absolutely love traveling and have a deep passion
                                 for exploring new places, cultures, and experiences.</li>
                                <li type="square">Solve real world problems and playing with team.</li>
                                
                           </ul>
                        
                    </div>
            </div>
            
            
             
        </div>
    )
}

export default AboutSection;