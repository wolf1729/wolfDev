/* eslint-disable react/no-unescaped-entities */
import '../styles/aboutMe.css'
import { Heading, Highlight, Stack, Text } from "@chakra-ui/react"

function AboutMe() {
    return (
        <>
        <div className="aboutMeMainContainer">
            <div>
                <Heading margin={4} color='teal' fontSize='60px' paddingLeft={120}>So,</Heading>
            </div>
                <div>
                <Stack align='center' margin={8}>
                    <Text width='60%' align='center' fontSize='20px' marginBottom='80px'>If you share my excitement for innovation, let's connect! Whether it's collaborating
                        on a project or geeking out over the latest tech trends, I'm always up for an adventure.
                        Let's create something extraordinary together!
                    </Text>
                </Stack>
            </div>
        </div>
        </>
    )
}

export default AboutMe