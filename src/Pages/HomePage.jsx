import HomeLayout from "../Layouts/HomeLayout";
import { LiaPrayingHandsSolid } from "react-icons/lia";
import homeimage from '../assets/home-bg.jpg'

function HomePage(){

    return(
        <HomeLayout>
             {/* Home section******** */}
             <div className="h-[80vh] md:h-[100vh] w-full flex items-center justify-center flex-col gap-12 lg:gap-14 text-center px-4 relative " style={{backgroundImage:`url(${homeimage})`}}>
                   <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide">
                    <span><LiaPrayingHandsSolid/></span>
                    Namaskaram, I'am <span className="text-yellow-500">Ankit Mishra</span>
                    </h1>
                   <p className="w-[70%] lg:text-xl">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                   <button className="px-9 py-3 lg:px-14 lg:py-4 bg-yellow-500 font-semibold lg:font-bold hover:bg-yellow-600">PROJECTS</button>
                   <p className="absolute text-xs right-0 bottom-0"><a href="https://www.freepik.com/free-vector/white-background-with-triangle-patterns_4403214.htm#query=white%20pattern&position=7&from_view=keyword&track=ais&uuid=263a406c-b367-4dc3-8ef0-658661bf5b86">Image by starline</a> on Freepik</p>
             </div>
        </HomeLayout>
    )
}

export default HomePage;