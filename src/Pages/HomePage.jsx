import HomeLayout from "../Layouts/HomeLayout";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HomeSection from "../components/HomeSection";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";


function HomePage(){

    return(
        <HomeLayout>
             {/* Home section******** */}
             <HomeSection/>

             <AboutSection/>
             <SkillsSection/>
             <ProjectSection/>
             <ContactSection/>
        </HomeLayout>
    )
}

export default HomePage;