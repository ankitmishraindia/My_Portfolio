
import Footer from "../Sections/Footer";
import { GiHamburgerMenu,GiMultiDirections } from "react-icons/gi";
import { BiSolidBriefcase } from "react-icons/bi";

import { ImProfile } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";


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
            
            <div className="drawer w-fit fixed left-0 top-0 z-10 overflow-hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer">
                       <GiHamburgerMenu size={38} className="m-1 md:m-4 cursor-pointer text-red-600 hover:text-red-500"/>
                    </label>
                </div> 
                <div className="drawer-side ">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu space-y-2 p-4 w-76 min-h-full bg-base-300 text-base-content font-bold">
                    {/* Sidebar content here */}
                    
                    <li className="mt-2"><a className={activeLink === 'HOME' ? 'text-white bg-red-600 ease-in-out hover:bg-red-500' : ''} onClick={()=>{scrollToSection('home');
                     setActiveLink('HOME')}}><FaHome className="text-blue-800" size={18}/>HOME</a></li>
                    <li><a className={activeLink === 'ABOUT' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('about');
                     setActiveLink('ABOUT')}}><BsFillInfoCircleFill className="text-blue-800" size={18}/>ABOUT</a></li>
                    <li><a className={activeLink === 'PROJECTS' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('projects');
                     setActiveLink('PROJECTS')}}><BiSolidBriefcase className="text-blue-800" size={18}/>PROJECTS</a></li>
                    <li><a className={activeLink === 'SKILLS' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('skills');
                     setActiveLink('SKILLS')}}><GiMultiDirections className="text-blue-800" size={18}/>SKILLS</a></li>
                    <li><a className={activeLink === 'CONTACT' ? 'text-white bg-red-600 hover:bg-red-500' : ''} onClick={()=>{scrollToSection('contact');
                     setActiveLink('CONTACT')}}><MdPermPhoneMsg className="text-blue-800" size={18}/>CONTACT</a></li>
                    <li>
                      <a href="https://drive.google.com/file/d/1t9rJEcp7oLOizvis4hgtocXWlMXxLaGx/view?usp=sharing">
                      <ImProfile className="text-blue-800" size={18}/>RESUME</a>
                      
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