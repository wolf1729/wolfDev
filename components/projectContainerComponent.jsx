import { Heading } from '@chakra-ui/react'
import '../styles/projectContainerStyle.css'
import ProjectComponent from "./projectComponent"
import { projectDetails } from './projectDetail'

function ProjectPage() {
  return (
  <>
  <div>
    <div className='headingContainer' >
      <Heading as='h1' textAlign='Center' size='xl' margin={10}>Projects</Heading>
    </div>
    <div className="projectContainer">
      {
      projectDetails.map((e) => {
        return <ProjectComponent 
        key={e}
        name={e.name}
        codeLink={e.codeLink}
        deployedLink={e.deployedLink}
        imageLink={e.image}
        techStackArray={e.techStack}
        description={e.description}
        />
      })
      }
    </div>
  </div>
  </>
  )
}

export default ProjectPage