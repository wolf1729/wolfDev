import { Button, Heading } from "@chakra-ui/react"
import tech from './skillsDetails'
import '../styles/skillsStyle.css'

function Skills() {
    const color = ["green", "teal", "blue", "facebook", "whatsapp", "twitter"]
    return (
        <>
        <div className="skillsMainContainer">
            <Heading as='h1' textAlign='Center' size='xl' marginBottom={8}>Skills</Heading>
            <div className="skillsContainer">
            {
                tech.map((items) => {
                    return <Button size='lg' leftIcon={items.skillSymbol} colorScheme={color[Math.floor(Math.random() *5)]} variant='solid' key={items} margin={2} padding={5}>{items.skillName}</Button> 
                })
            }
            </div>
        </div>
        </>
    )
}

export default Skills