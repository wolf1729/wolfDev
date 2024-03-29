import '../src/Styles/App.css'
import AboutMe from "./Components/AboutMe";
import GetInTouchSection from './Components/GetInTouch';
import ProjectSection from './Components/ProjectSection';
import SkillsSection from './Components/SkillsSection';
import SocialSection from './Components/SocialSection';
import TitleSection from "./Components/TitleContent";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <>
    <div className="container">
      <Topbar />
      <TitleSection />
      <AboutMe />
      <SkillsSection />
      <ProjectSection />
      <GetInTouchSection />
      <SocialSection />
    </div>
    </>
  );
}

export default App;
