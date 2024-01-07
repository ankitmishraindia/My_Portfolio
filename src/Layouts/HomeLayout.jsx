
import Footer from "../components/Footer";
import { GiHamburgerMenu } from "react-icons/gi";
import ankitimage from '../assets/ankit_image.jpg'
import { Scrollbar } from "smooth-scrollbar-react";
import toast from "react-hot-toast";

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
                      src={ankitimage}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Ankit Mishra
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Namskaram! I am a web developer!
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
                            <a onClick={()=>hellomessage()}>
                                <img className="h-[150px] w-[100px] md:w-[200px] md:h-[250px] border-white border  rounded-3xl" src={ankitimage} alt="ankit-image" />
                            <span>ANKIT MISHRA</span>
                            </a>
                            
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