import PageFooter from "./chapters/footer"
import Name from "./chapters/name"
import Project from "./chapters/projects"
import Skills from "./chapters/skills"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

function App() {

  return (
    <>
    <Name />
    <Skills />
    <Project />
    <PageFooter />
    <Analytics />
    <SpeedInsights />
    </>
  )
}

export default App

