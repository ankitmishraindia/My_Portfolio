import github_finder_image from '../assets/github-finder.jpeg'
import youtube_clone from '../assets/youtube-clone.jpeg';
import blog_image from '../assets/blog-image.jpg';
import lms_image from '../assets/Lms.jpg'
import course_image from '../assets/meditation-course-image.jpg'
import chatbot from '../assets/chatbot.jpg'
import todoApp from '../assets/todoApp-image.jpg'
import portfolio from '../assets/portfolio.jpg'
import bookmovie from '../assets/bookmovie.jpg'
import Project from '../Components/Project';


function ProjectSection(){

    return (
        <div id="projects" className=" w-full px-10 md:px-5 lg:px-16 py-7 lg:py-16 flex flex-col items-center gap-10 lg:gap-20 ">
            <div>
                <h2 className="text-3xl text-center lg:text-4xl font-bold tracking-wide">PROJECTS</h2>
                <div className="w-[100px] bg-yellow-500 h-2 rounded-xl mt-3 m-auto"></div>
                <p className="text-center md:w-[70%] lg:text-xl m-auto mt-2">Here you will find some of the personal and clients projects that I created with each project containing its own case study.</p>
            </div>
            
           
            <Project 
            imageName={chatbot}
            projectName='Chatbot' 
            ProjectDesc="Make live chat with AI through openAPI and save/delete your chat for future use."
            techUsed="REACTJS, EXPRESSJS, API, JAVASCRIT, MONGODB ATLAS"
            liveLink="https://chatbot-frontend-lake.vercel.app/"
            githubLink="https://github.com/ankitmishraindia/Chatbot"/>

            <Project 
            imageName={github_finder_image}
            projectName='Github Avatar Finder' 
            ProjectDesc="It is a very useful app to find github existed users. Anyone can check avatar of any github user."
            techUsed="REACT, FIREBASE, API, HTML, CSS, JS"
            liveLink="https://imagegallery-react.web.app/"
            githubLink="https://github.com/ankitmishraindia/Github-Avatar_Finder"/>

            <Project 
            imageName={todoApp}
            projectName='Dockerized Todo App' 
            ProjectDesc="Todo App with Frontend & Backend Contanerized in Docker for todo task operations."
            techUsed="DOCKER, NODEJS, EXPRESSJS, MONGODB ATLAS, REACTJS"
            githubLink="https://github.com/ankitmishraindia/todo-fullStack-w3dev"/>

           <Project 
            imageName={bookmovie}
            projectName='Movie Summary' 
            ProjectDesc="A preview of some movies with summary and booking process"
            techUsed="TAILWINDCSS,REACT-ROUTER-DOM, REACTJS"
            liveLink="https://book-movie-show.vercel.app/"
            githubLink="https://github.com/ankitmishraindia/BooK-Movie-Show"/>

           <Project 
            imageName={portfolio}
            projectName='Web Developer Portfolio' 
            ProjectDesc="Simple view advanced portfolio with siderbar and home,skills,projects section."
            techUsed="TAILWINDCSS, JAVASCRIPT, VITE, DAISYUI, REACTJS"
            githubLink="https://github.com/ankitmishraindia/todo-fullStack-w3dev"/>
            
            <Project 
            imageName={lms_image}
            projectName='LMS-FRONTEND' 
            ProjectDesc="This is a dark layout learning management system with login, add course, payment etc features."
            techUsed="REACTJS, VITE, DAISYUI, TAILWINDCSS"
            githubLink="https://github.com/ankitmishraindia/LMS-Frontend"/>
            
            <Project 
            imageName={youtube_clone}
            projectName='Spiritual youtube clone' 
            ProjectDesc="This is a video collection of sadhguru. Good looking layout with video click feature."
            techUsed="HTML, CSS, JAVASCRIPT, GITHUB"
            liveLink="https://ankitmishraindia.github.io/Spiritual-youtube-clone/"
            githubLink="https://github.com/ankitmishraindia/Spiritual-youtube-clone"/>

            <Project 
            imageName={blog_image}
            projectName='Blog web App with localstorage' 
            ProjectDesc="This is a blog posting web app with poster. You can read each post separately with localstorage."
            techUsed="HTML, CSS, JAVASCRIPT, LOCALSTORAGE, GITHUB"
            liveLink="https://ankitmishraindia.github.io/Blog-Web-App-LocalStorage-/"
            githubLink="https://github.com/ankitmishraindia/Blog-Web-App-LocalStorage-"/>

            <Project 
            imageName={course_image}
            projectName='Meditation Course Page(Sample)' 
            ProjectDesc="This is a meditation course sample page content imported by json data. You can easily change this page data by updating json data."
            techUsed="NEXTJS, TAILWINDCSS, VERCEL, JAVASCRIPT"
            liveLink="https://meditation-course-frontend.vercel.app/"
            githubLink="https://github.com/ankitmishraindia/Meditation-Course-Frontend"/>
            
            
        </div>
    )
}

export default ProjectSection;