import HomeLayout from "../Layouts/HomeLayout";
import AboutSection from "../components/AboutSection";
import HomeSection from "../components/HomeSection";


function HomePage(){

    return(
        <HomeLayout>
             {/* Home section******** */}
             <HomeSection/>
             <AboutSection/>
        </HomeLayout>
    )
}

export default HomePage;