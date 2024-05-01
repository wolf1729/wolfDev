'use client'
import AboutMe from "../../components/aboutMe"
import ContactComponent from "../../components/contactComponent"
import FooterComponent from "../../components/footer"
import TopBar from "../../components/header"
import HomeComponent from "../../components/homeComponent"
import ProjectPage from "../../components/projectContainerComponent"
import Skills from "../../components/skillsComponent"

//Pages : home, projects, contact, hackathon, 

export default function Page() {
  return (
    <>
    <div>
      <div>
        <TopBar />
      </div>
      <div>
        <HomeComponent />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <ProjectPage />
      </div>
      <div>
        <ContactComponent />
      </div>
      <div>
        <FooterComponent />
      </div>
    </div>
    </>
  )
}