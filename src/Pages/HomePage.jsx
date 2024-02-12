import HomeLayout from "../Layouts/HomeLayout";
import AboutSection from "../Sections/AboutSection";
import ContactSection from "../Sections/ContactSection";
import HomeSection from "../Sections/HomeSection";
import ProjectSection from "../Sections/ProjectSection";
import SkillsSection from "../Sections/SkillsSection";


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