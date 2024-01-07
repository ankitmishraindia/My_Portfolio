
import Footer from "../components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import ankitimage from '../assets/ankit_image.jpg'
import { Scrollbar } from "smooth-scrollbar-react";

// eslint-disable-next-line react/prop-types
function HomeLayout({children}){

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
            <Scrollbar
        plugins={{
          overscroll: {
            effect: 'bounce',
          },
        }}></Scrollbar>
            <div className="drawer w-fit fixed left-0 top-0 z-10 overflow-hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer">
                       <GiHamburgerMenu size={33} className="m-1 md:m-4 cursor-pointer"/>
                    </label>
                </div> 
                <div className="drawer-side ">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-76 min-h-full bg-base-300 text-base-content font-bold">
                    {/* Sidebar content here */}
                    <li>
                        <div className="flex flex-col border-2 rounded-2xl border-white text-gray-400">
                            <img className="h-[150px] w-[100px] md:w-[200px] md:h-[250px] border-white border  rounded-3xl" src={ankitimage} alt="ankit-image" />
                            <span>ANKIT MISHRA</span>
                        </div>
                        </li>
                    <li className="mt-2"><a onClick={()=>scrollToSection('home')}>HOME</a></li>
                    <li><a  onClick={()=>scrollToSection('about')}>ABOUT</a></li>
                    <li><a onClick={()=>scrollToSection('projects')}>PROJECTS</a></li>
                    <li><a onClick={()=>scrollToSection('skills')} >SKILLS</a></li>
                    <li><a onClick={()=>scrollToSection('contact')}>CONTACT</a></li>
                    
                    </ul>
                </div>
            </div>

            {children}
            
           <Footer/>
        </div>
    )
}

export default HomeLayout;