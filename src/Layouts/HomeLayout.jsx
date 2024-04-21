
import Footer from "../Sections/Footer";
import { GiHamburgerMenu } from "react-icons/gi";

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