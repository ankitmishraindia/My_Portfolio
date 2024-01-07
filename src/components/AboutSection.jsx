


function AboutSection(){


    
    return(
        <div id="about" className="h-[70vh] lg:h-[120vh] w-full px-10 md:px-5 lg:px-16 py-4 lg:py-0 flex flex-col items-center justify-evenly lg:justify-around ">
            <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-wide">ABOUT ME</h2>
                <div className="w-[100px] bg-yellow-500 h-2 rounded-xl mt-3 m-auto"></div>
            </div>
            <div className="flex justify-between">
                    <div className="space-y-4 lg:space-y-7 lg:w-[40%]">
                        <h3 className="text-2xl lg:text-3xl font-bold">Get to know me!</h3>
                        <div className="space-y-3 lg:space-y-6 lg:text-xl">
                            <p>I&apos;m a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>
                            <p className="">I also like sharing content related to the stuff that I have learned over the years in <b>Web Development</b> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a className="text-yellow-500 underline" href="https://www.linkedin.com/in/ankit-mishra-537217115/">Linkedin</a> and <a className="text-yellow-500 underline" href="https://ankitmishraindia.hashnode.dev/">Hashnode</a> where I post useful content related to Web Development and Programming.</p>
                            <p>I&apos;m open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to contact me.</p>
                        </div>
                        <button className="px-7 lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-white">CONTACT</button>
                    </div>
                    <div className="w-[40%] hidden lg:block space-y-4 lg:space-y-7 h-full">
                        <h3 className="text-2xl font-bold">Education & Trainings!</h3>
                        <div className="space-y-3 lg:text-xl">
                            <ul className="space-y-2" >
                                <li type="square">Completed One year training Program by PWSkills.</li>
                                <li type="square">Completed O Level from National Institute of Electronics and Information Technology.</li>
                                <li type="square">Completed Graduation from Acharya Narendra Dev Kisan PG College.</li>
                           </ul>
                        </div>
                        <h3 className="text-2xl font-bold">Hobbies!</h3>
                        <ul className="space-y-2 lg:text-xl" >
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