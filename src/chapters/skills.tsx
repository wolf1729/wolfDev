import { Stack, Text } from '@chakra-ui/react'
import IconCloud from '../components/icon-cloud'
import '../styles/skillsChapter.css'
import Particles from '../components/particles'

function Skills() {
    return (
        <>
        <Stack position='relative' height='fit-content' width="100%" paddingBottom={10}>
            <Stack display='flex' flexDir={['column','row']} flexWrap='wrap' alignItems='center' justifyContent='center' width="100%" position='absolute'>
                <Stack width="40%">
                    <Text fontSize={[30,100]} textAlign={['center','right']} id='skillHeading'>Skills</Text>
                </Stack>
                <Stack width="59%">
                    <IconCloud iconSlugs={["tailwindcss", "bootstrap", "cplusplus", "react", "vite", "html5", "css3", "typescript", "javascript", "dart", "flutter", "nodedotjs", "express", "nextdotjs", "firebase", "git", "github", "docker", "visualstudiocode", "python", "tensorflow", "scikitlearn", "numpy", "pandas", "mongodb", "mysql"]}/>
                </Stack>
            </Stack>
            <Particles quantity={1500} color="black" className="absolute inset-0 skillsComponent"/>
        </Stack>
        </>
    )
}

export default Skills