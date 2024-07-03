import { Card, CardBody, CardFooter, CardHeader, Flex, Box, Heading, Button, Text, Image, Kbd } from "@chakra-ui/react"
import { FaCode } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

interface ProjectComponentProps {
    name: string;
    codeLink: string;
    liveLink : string;
    photo: string;
    description: string;
    techStack: string[]
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({ name, codeLink, liveLink, photo, description, techStack }) => {

    function buttonClick( link : string) {
        window.location.href = link;
    }

    function showTechUsed(techStack : string[]) {
        return techStack.map((e) => (
            <Kbd>{e}</Kbd>
        ))
    }
    return (
       <>
       <Card maxW={['xs', 'xs']}>
            <CardHeader>
                <Flex>
                    <Flex flex='1' alignItems='center' flexWrap='wrap'>
                        <Box>
                            <Heading size='md'>{name}</Heading>
                            <Box height={3}></Box>
                            <Text>{description}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody display='flex' flexDir='row' flexWrap='wrap' alignItems='flex-start' justifyContent='space-evenly'>
                {showTechUsed(techStack)}
            </CardBody>
            <Image
                objectFit='cover'
                src= {photo}
                alt='Project pic'
            />

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                '& > button': {
                    minW: '136px',
                },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<FaCode />} onClick={() => buttonClick(codeLink)}>
                    Code
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<CiGlobe />} onClick={() => buttonClick(liveLink)}>
                    Live
                </Button>
            </CardFooter>
        </Card>
        </>
    );
};

export default ProjectComponent;
