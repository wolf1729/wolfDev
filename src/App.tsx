import PageFooter from "./chapters/footer"
import Name from "./chapters/name"
import Project from "./chapters/projects"
import Skills from "./chapters/skills"
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
    <Name />
    <Skills />
    <Project />
    <PageFooter />
    <Analytics />
    </>
  )
}

export default App

