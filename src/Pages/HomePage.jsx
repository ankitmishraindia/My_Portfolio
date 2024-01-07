import HomeLayout from "../Layouts/HomeLayout";
import AboutSection from "../components/AboutSection";
import HomeSection from "../components/HomeSection";
import SkillsSection from "../components/SkillsSection";


function HomePage(){

    return(
        <HomeLayout>
             {/* Home section******** */}
             <HomeSection/>

             <AboutSection/>
             <SkillsSection/>
        </HomeLayout>
    )
}

export default HomePage;