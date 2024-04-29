/* eslint-disable react/no-unescaped-entities */
import '../styles/aboutMe.css'
import { Heading, Highlight, Stack, Text } from "@chakra-ui/react"

function AboutMe() {
    return (
        <>
        <div className="aboutMeMainContainer">
            <div>
                <Heading margin={4} color='teal' fontSize='60px'>So,</Heading>
            </div>
                <div>
                <Stack align='self-start' margin={4}>
                    <Text width='50%' align='left' fontSize='15px'>Welcome to my digital space! I'm a MERN stack and machine learning developer
                        with a passion for crafting innovative solutions. Over the past decade, I've
                        honed my skills in building scalable web applications and implementing cutting-edge
                        machine learning techniques.
                    </Text>
                </Stack>
                <Stack align='self-end' margin={4}>
                    <Text width='50%' align='right' fontSize='15px'>I thrive on challenges and enjoy pushing the boundaries of what's possible.
                        Beyond coding, you'll find me exploring new cuisines, devouring science fiction
                        novels, and engaging in thought-provoking conversations about the future of technology.
                    </Text>
                </Stack>
                <Stack align='self-start' margin={4}>
                    <Text width='50%' align='left' fontSize='15px'>If you share my excitement for innovation, let's connect! Whether it's collaborating
                        on a project or geeking out over the latest tech trends, I'm always up for an adventure.
                        Let's create something extraordinary together!
                    </Text>
                </Stack>
                <Stack align='center' margin={8}>
                    <Text width='50%' align='center' fontSize='20px' marginBottom='80px'>If you share my excitement for innovation, let's connect! Whether it's collaborating
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