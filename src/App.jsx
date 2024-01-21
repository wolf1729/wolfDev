import '../src/Styles/App.css'
//import AboutMe from "./Components/AboutMe";
import TitleSection from "./Components/TitleContent";
import Topbar from "./Components/Topbar";

function App() {
  return (
    <>
    <div className="container">
      <Topbar />
      <TitleSection />
    </div>
    </>
  );
}

export default App;
