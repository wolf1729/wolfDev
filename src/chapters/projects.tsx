import ProjectComponent from "../components/projectComponent"
import { projectDetails } from "../lib/projectDetails"
import { Stack, Text } from "@chakra-ui/react"
import '../styles/projectChapter.css'

function Project() {

    const showingProject = () => {
        return projectDetails.map((e, index) => (
            <ProjectComponent key={index} name={e.name} codeLink={e.codeLink} liveLink={e.deployedLink || "not there"} photo={e.image} description={e.description} techStack={e.techStack}/>
        ))
    } 

    return (
        <>
        <Stack maxWidth="100vw" height='fit-content' paddingBottom={5} width="100%">
            <Text className="projectHeading">Projects</Text>
            <Stack display='flex' flexDir='row' flexWrap='wrap' alignItems='center' justifyContent='space-evenly'>
                {showingProject()}
            </Stack>
        </Stack>
        </>
    )
}

export default Project