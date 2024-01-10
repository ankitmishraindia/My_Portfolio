import github_finder_image from '../assets/github-finder.jpeg'
import youtube_clone from '../assets/youtube-clone.jpeg';
import blog_image from '../assets/blog-image.jpg';
import lms_image from '../assets/Lms.jpg'
import course_image from '../assets/meditation-course-image.jpg'
import todoApp from '../assets/todoApp-image.jpg'


function ProjectSection(){

    return (
        <div id="projects" className=" w-full px-10 md:px-5 lg:px-16 py-7 lg:py-16 flex flex-col items-center gap-10 lg:gap-20 ">
            <div>
                <h2 className="text-3xl text-center lg:text-4xl font-bold tracking-wide">PROJECTS</h2>
                <div className="w-[100px] bg-yellow-500 h-2 rounded-xl mt-3 m-auto"></div>
                <p className="text-center md:w-[70%] lg:text-xl m-auto mt-2">Here you will find some of the personal and clients projects that I created with each project containing its own case study.</p>
            </div>
            
            <div className="text-center space-y-7 md:flex gap-4 lg:gap-8 items-center">
                <div className='border-8 border-yellow-500 rounded-xl md:w-1/2 shadow-[20px_20px_10px_rgba(0,0,0,0.8)]'>
                    <img className='w-full h-full rounded-lg' src={github_finder_image} alt="github-finder" />
                </div>
                <div className='space-y-5 lg:space-y-8 md:w-1/2'>
                    <h3 className='text-2xl lg:text-3xl font-bold'>Github Avatar Finder</h3>
                    <p className='lg:text-xl'>It is a very useful app to find github existed users. Anyone can check avatar of any github user.</p>
                    <p className='lg:text-xl'>Tech: <span className='font-semibold'>REACT, FIREBASE, API, HTML, CSS, JS</span></p>
                    <div className='space-x-3'>
                         <a href="https://imagegallery-react.web.app/">
                             <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Live</button>
                        </a>
                        <a href="https://github.com/ankitmishraindia/Github-Avatar_Finder">
                            <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-7 md:flex gap-4 lg:gap-8 items-center">
                <div className='border-8 border-yellow-500 rounded-xl md:w-1/2 shadow-[20px_20px_10px_rgba(0,0,0,0.8)]'>
                    <img className='w-full h-full rounded-lg' src={todoApp} alt="todoApp" />
                </div>
                <div className='space-y-5 lg:space-y-8 md:w-1/2'>
                    <h3 className='text-2xl lg:text-3xl font-bold'>Dockerized Todo App</h3>
                    <p className='lg:text-xl'>Todo App with Frontend & Backend Contanerized in Docker for todo task operations.</p>
                    <p className='lg:text-xl'>Tech: <span className='font-semibold'>DOCKER, NODEJS, EXPRESSJS, MONGODB ATLAS, REACTJS</span></p>
                    <div className='space-x-3'>
                         
                        <a href="https://github.com/ankitmishraindia/todo-fullStack-w3dev">
                            <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Code</button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="text-center space-y-7 md:flex gap-4 lg:gap-8 items-center">
                <div className='border-8 border-yellow-500 rounded-xl md:w-1/2 shadow-[20px_20px_10px_rgba(0,0,0,0.8)]'>
                    <img className='w-full h-full rounded-lg' src={lms_image} alt="github-finder" />
                </div>
                <div className='space-y-5 lg:space-y-8 md:w-1/2'>
                    <h3 className='text-2xl lg:text-3xl font-bold'>LMS-FRONTEND <span className='text-sm'>(Working..)</span> </h3>
                    <p className='lg:text-xl'>This is a dark layout learning management system with login, add course, payment etc features.</p>
                    <p className='lg:text-xl'>Tech: <span className='font-semibold'>REACTJS, VITE, DAISYUI, TAILWINDCSS</span></p>
                    <div className='space-x-3'>
                        {/* <a href="https://ankitmishraindia.github.io/Spiritual-youtube-clone/">
                        <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Live</button>
                        </a> */}
                        <a href="https://github.com/ankitmishraindia/LMS-Frontend">
                            <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Code</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-7 md:flex gap-4 lg:gap-8 items-center">
                <div className='border-8 border-yellow-500 rounded-xl md:w-1/2 shadow-[20px_20px_10px_rgba(0,0,0,0.8)]'>
                    <img className='w-full h-full rounded-lg' src={youtube_clone} alt="github-finder" />
                </div>
                <div className='space-y-5 lg:space-y-8 md:w-1/2'>
                    <h3 className='text-2xl lg:text-3xl font-bold'>Spiritual youtube clone</h3>
                    <p className='lg:text-xl'>This is a video collection of sadhguru. Good looking layout with video click feature.</p>
                    <p className='lg:text-xl'>Tech: <span className='font-semibold'>HTML, CSS, JAVASCRIPT, GITHUB</span></p>
                    <div className='space-x-3'>
                        <a href="https://ankitmishraindia.github.io/Spiritual-youtube-clone/">
                        <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Live</button>
                        </a>
                        <a href="https://github.com/ankitmishraindia/Spiritual-youtube-clone">
                            <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Code</button>
                            </a>
                    </div>
                </div>
            </div>

            <div className="text-center space-y-7 md:flex gap-4 lg:gap-8 items-center">
                <div className='border-8 border-yellow-500 rounded-xl md:w-1/2 shadow-[20px_20px_10px_rgba(0,0,0,0.8)]'>
                    <img className='w-full h-full rounded-lg' src={blog_image} alt="blog-image" />
                </div>
                <div className='space-y-5 lg:space-y-8 md:w-1/2'>
                    <h3 className='text-2xl lg:text-3xl font-bold'>Blog web App with localstorage</h3>
                    <p className='lg:text-xl'>This is a blog posting web app with poster. You can read each post separately with localstorage.</p>
                    <p className='lg:text-xl'>Tech: <span className='font-semibold'>HTML, CSS, JAVASCRIPT, LOCALSTORAGE, GITHUB</span></p>
                    <div className='space-x-3'>
                        <a href="https://ankitmishraindia.github.io/Blog-Web-App-LocalStorage-/">
                        <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Live</button>
                        </a>
                        <a href="https://github.com/ankitmishraindia/Blog-Web-App-LocalStorage-">
                        <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Code</button></a>
                    </div>
                </div>
                
            </div>

            <div className="text-center space-y-7 md:flex gap-4 lg:gap-8 items-center">
                <div className='border-8 border-yellow-500 rounded-xl md:w-1/2 shadow-[20px_20px_10px_rgba(0,0,0,0.8)]'>
                    <img className='w-full h-full rounded-lg' src={course_image} alt="course-image" />
                </div>
                <div className='space-y-5 lg:space-y-8 md:w-1/2'>
                    <h3 className='text-2xl lg:text-3xl font-bold'>Meditation Course Page(Sample) <span className='text-sm'>(working..)</span></h3>
                    <p className='lg:text-xl'>This is a meditation course sample page content imported by json data. You can easily change this page data by updating json data.</p>
                    <p className='lg:text-xl'>Tech: <span className='font-semibold'>NEXTJS, TAILWINDCSS, VERCEL, JAVASCRIPT,</span></p>
                    <div className='space-x-3'>
                        <a href="https://meditation-course-frontend.vercel.app/">
                        <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Live</button>
                        </a>
                        <a href="https://github.com/ankitmishraindia/Meditation-Course-Frontend">
                        <button className="px-7  lg:px-10 py-2 lg:py-3 font-bold bg-yellow-500 hover:bg-yellow-600 hover:text-gray-300">Code</button></a>
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default ProjectSection;