import ProjectComponent from "../components/projectComponent"
import { projectDetails } from "../lib/projectDetails"
import { Stack, Text } from "@chakra-ui/react"
import '../styles/projectChapter.css'
import Particles from "../components/particles"

function Project() {

    const showingProject = () => {
        return projectDetails.map((e, index) => (
            <ProjectComponent key={index} name={e.name} codeLink={e.codeLink} liveLink={e.deployedLink || "not there"} photo={e.image} description={e.description} techStack={e.techStack}/>
        ))
    } 

    return (
        <>
        <Stack position='relative' height={["2650px", "1200px"]} width="100%">
            <Stack position='absolute'>
                <Text className="projectHeading">Projects</Text>
                <Stack display='flex' flexDir='row' flexWrap='wrap' alignItems='flex-end' justifyContent='space-evenly'>
                    {showingProject()}
                </Stack>
            </Stack>
            <Particles quantity={2000} color="black" className="absolute inset-0 projectComp"/>
        </Stack>
        </>
    )
}

export default Project