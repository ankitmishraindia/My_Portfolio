import homeimage from '../assets/skill_image2.avif'
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss,SiReact,SiNextdotjs,SiNodedotjs, SiFirebase, SiVercel, SiExpress, SiMongodb, SiGit, SiDocker, SiHashnode, SiRedux, SiJavascript, SiMysql, SiTypescript } from "react-icons/si";


function SkillsSection(){


    return(
        <div id='skills' className=" w-full flex items-center justify-around flex-col lg:gap-14 text-center px-4 py-7 md:py-9 relative " style={{backgroundImage:`url(${homeimage})`}}>
                   <div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-wide">MY SKILLS</h2>
                        <div className="w-[100px] bg-yellow-500 h-2 rounded-xl mt-3 m-auto"></div>
                   </div>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-14 lg:gap-y-20 lg:gap-x-24 lg:text-2xl">
                        <div className='flex items-center gap-3'>
                            <FaHtml5 size={33} className='text-yellow-500'/>
                            <span className='font-bold'>HTML</span>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <SiTailwindcss size={25} className='text-yellow-500'/>
                            <span className='font-bold '>TailwindCSS</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiReact size={33} className='text-yellow-500'/>
                            <span className='font-bold'>ReactJS</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiNextdotjs size={33} className='text-yellow-500'/>
                            <span className='font-bold'>NextJS</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiNodedotjs size={33} className='text-yellow-500'/>
                            <span className='font-bold'>NodeJS</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiFirebase size={33} className='text-yellow-500'/>
                            <span className='font-bold'>Firebase</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiVercel size={33} className='text-yellow-500'/>
                            <span className='font-bold'>Vercel</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiExpress size={33} className='text-yellow-500'/>
                            <span className='font-bold'>ExpressJS</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiMongodb size={33} className='text-yellow-500'/>
                            <span className='font-bold'>MongoDB</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiGit size={33} className='text-yellow-500'/>
                            <span className='font-bold'>Git</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiDocker size={33} className='text-yellow-500'/>
                            <span className='font-bold'>Docker</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiHashnode size={33} className='text-yellow-500'/>
                            <span className='font-bold'>Hashnode</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiRedux size={33} className='text-yellow-500'/>
                            <span className='font-bold'>Redux</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiJavascript size={33} className='text-yellow-500'/>
                            <span className='font-bold'>Javascript</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiMysql size={33} className='text-yellow-500'/>
                            <span className='font-bold'>MySQL</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <SiTypescript size={33} className='text-yellow-500'/>
                            <span className='font-bold'>TypeScript</span>
                        </div>
                   </div>

                   
             </div>
    )

}

export default SkillsSection;