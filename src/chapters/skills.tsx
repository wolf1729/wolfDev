import { Stack, Text } from '@chakra-ui/react'
import IconCloud from '../components/icon-cloud'
import '../styles/skillsChapter.css'

function Skills() {
    return (
        <>
        <Stack height='fit-content' maxWidth="100vw" paddingTop={10} paddingBottom={10} display='flex' flexDir={['column','row']} flexWrap='wrap' alignItems='center' justifyContent='center'>
            <Stack width="40%">
                <Text fontSize={[30,100]} textAlign={['center','right']} id='skillHeading'>Skills</Text>
            </Stack>
            <Stack width="59%">
                <IconCloud iconSlugs={["tailwindcss", "bootstrap", "cplusplus", "react", "vite", "html5", "css3", "typescript", "javascript", "dart", "flutter", "nodedotjs", "express", "nextdotjs", "firebase", "git", "github", "docker", "visualstudiocode", "python", "tensorflow", "scikitlearn", "numpy", "pandas", "mongodb", "mysql"]}/>
            </Stack>
        </Stack>
        </>
    )
}

export default Skills