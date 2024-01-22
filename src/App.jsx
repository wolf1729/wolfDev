import '../src/Styles/App.css'
import AboutMe from "./Components/AboutMe";
import SkillsSection from './Components/SkillsSection';
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
    </div>
    </>
  );
}

export default App;
