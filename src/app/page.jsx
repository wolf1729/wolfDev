'use client'
import AboutMe from "../../components/aboutMe"
import TopBar from "../../components/header"
import HomeComponent from "../../components/homeComponent"
import ProjectPage from "../../components/projectContainerComponent"
// import ProjectContainerComponent from '../../components/projectContainerComponent'

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
        <ProjectPage />
      </div>
    </div>
    </>
  )
}