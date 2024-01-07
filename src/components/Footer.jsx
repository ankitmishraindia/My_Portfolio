import { FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";

function Footer(){

    return(
        <div className="h-[40vh] w-full px-3 md:px-28 bg-black text-white relative">
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
            <p className="absolute text-xs right-0 bottom-0"><a href="https://www.freepik.com/free-vector/white-background-with-triangle-patterns_4403214.htm#query=white%20pattern&position=7&from_view=keyword&track=ais&uuid=263a406c-b367-4dc3-8ef0-658661bf5b86">Image by starline</a> on Freepik</p>
        </div>
    )
}

export default Footer;