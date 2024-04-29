import { Card, CardHeader, CardBody, CardFooter, Text, Image, Button, Kbd, Heading, Link } from "@chakra-ui/react"
import '../styles/projectComponentStyle.css'

function ProjectComponent ({name, codeLink, deployedLink, imageLink, techStackArray, description}) {

    const buttonFunction = () => {
        if (deployedLink === null) {
            return (
                <>
                <Button flex='1' colorScheme='blue' variant='solid' margin={3}><Link href={codeLink} isExternal>Code</Link></Button>
                </>
            )
        }
        else {
            return (
                <>
                <Button flex='1' colorScheme='blue' variant='solid' margin={3}><Link href={codeLink} isExternal>Code</Link></Button>
                <Button flex='1' variant='solid' colorScheme='green' margin={3}><Link href={deployedLink} isExternal>Visit</Link></Button>
                </>
            )
        }
    }
    return (
        <>
        <div className="projectComponentMainContainer">
            <Card>
                <CardHeader alignItems='center'>
                    <Heading as='h3' size='lg'>{name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{description}</Text>
                    <div className="technology"></div>
                    <span>{
                        techStackArray.map((e) => {
                            return <Kbd key={e} margin={2}>{e}</Kbd>
                        })
                        }</span>
                </CardBody>
                <Image
                    objectFit='cover'
                    src={imageLink}
                    alt='Chakra UI'
                />

                <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                    '& > button': {
                        minW: '136px',
                    },
                    }}
                >{buttonFunction()}
                </CardFooter>
            </Card>
        </div>
        </>
    )
}

export default ProjectComponent