
import Footer from "../Sections/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import ankitimage from '../assets/ankit_image.jpg'
import ankit from '../assets/ankit-favicon.jpg'
import toast from "react-hot-toast";
import { GiHeraldicSun } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { PiToolboxDuotone } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { MdPermPhoneMsg } from "react-icons/md";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function HomeLayout({children}){
  const [activeLink, setActiveLink] = useState('HOME'); // State to keep track of active link


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

      //hello mesage on click on image
      function hellomessage(){
        toast.custom((t) => (
            <div
              className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={ankit}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Ankit Mishra
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Namskaram! I am a Full stack web developer!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ))
      }

    return(
        <div className="min-h-screen w-full relative">
             <div className="animate-[bounce_7s_infinite] absolute top-10 z-10  border-gray-500 w-full flex justify-center "><GiHeraldicSun className="text-yellow-500 text-4xl md:text-6xl lg:text-9xl  animate-[spin_15s_infinite]" /></div>
            <div className="drawer w-fit fixed left-0 top-0 z-10 overflow-hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer">
                       <GiHamburgerMenu size={33} className="m-1 md:m-4 cursor-pointer text-red-600 hover:text-red-500"/>
                    </label>
                </div> 
                <div className="drawer-side ">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu space-y-2 p-4 w-76 min-h-full bg-base-300 text-base-content font-bold">
                    {/* Sidebar content here */}
                    <li>
                        <div className="flex flex-col border-2 rounded-[10px_100px_10px_100px] border-white text-gray-400">
                            <a onClick={()=>hellomessage()}>
                                <img className="h-[150px] w-[100px] md:w-[200px] md:h-[250px] border-yellow-500 border-4  rounded-[10px_100px_10px_100px]" src={ankitimage} alt="ankit-image" />
                            
                            </a>
                            
                        </div>
                        </li>
                    <li className="mt-2"><a className={activeLink === 'HOME' ? 'text-white bg-red-600 ease-in-out hover:bg-red-500' : ''} onClick={()=>{scrollToSection('home');
                     setActiveLink('HOME')}}>HOME<FaHome/></a></li>
                    <li><a className={activeLink === 'ABOUT' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('about');
                     setActiveLink('ABOUT')}}>ABOUT<BsFillInfoCircleFill/></a></li>
                    <li><a className={activeLink === 'PROJECTS' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('projects');
                     setActiveLink('PROJECTS')}}>PROJECTS<PiToolboxDuotone/></a></li>
                    <li><a className={activeLink === 'SKILLS' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('skills');
                     setActiveLink('SKILLS')}}>SKILLS<GoGoal/></a></li>
                    <li><a className={activeLink === 'CONTACT' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('contact');
                     setActiveLink('CONTACT')}}>CONTACT<MdPermPhoneMsg/></a></li>
                    <li>
                      <a href="https://drive.google.com/file/d/1t9rJEcp7oLOizvis4hgtocXWlMXxLaGx/view?usp=sharing">RESUME
                      <ImProfile/></a>
                      
                      </li>
                    
                    </ul>
                </div>
            </div>

            {children}
            
           <Footer/>
        </div>
    )
}

export default HomeLayout;