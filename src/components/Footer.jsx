import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

function Footer(){

    return(
        <div className="h-[40vh] w-full px-3 md:px-28 bg-black text-white">
            <div className="h-[80%] flex flex-col md:flex-row-reverse md:items-center md:justify-between justify-evenly space-y-4">
                <div className="space-y-3">
                    <h3 className="text-xl font-bold">SOCIAL</h3>
                    <div className="flex items-center gap-5 text-xl">
                    <a href="https://www.linkedin.com/in/ankit-mishra-537217115/">
                        <FaLinkedinIn/>
                    </a>
                       
                    <a href="https://github.com/ankitmishraindia/">
                        <FaGithub/>
                    </a>
                    
                    <a href="https://ankitmishraindia.hashnode.dev/">
                        <FaHashnode/>
                    </a>

                    </div>
                </div>
                <div className="space-y-3 md:w-[40%]">
                   <h3 className="text-xl font-bold">ANKIT MISHRA</h3>
                   <p className="text-sm">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                
            </div>
            <div className="h-[20%]  border-t-[1px] border-t-gray-500 flex items-center justify-center">
                <p className=" text-xs">© Copyright 2024. Made by
                 <a href="#"><span className="font-semibold text-sm underline">Ankit Mishra</span></a></p>
            </div>
        </div>
    )
}

export default Footer;