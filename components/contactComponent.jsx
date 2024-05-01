import { Button, Card, CardBody, Heading, Input, Textarea } from "@chakra-ui/react"
import '../styles/contactStyle.css'

function ContactComponent() {
    return (
        <>
        <div className="contactMainContainer">
            <Heading textAlign='left' fontFamily='Josefin Sans' margin={100} fontSize={60}>Contact Me</Heading>
            <Card width={[300, 600]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                <CardBody>
                    <Input placeholder="Enter Name" margin={2}/>
                    <Input placeholder="Enter Mail" margin={2}/>
                    <Textarea size='sm' margin={2} placeholder="Enter Message" resize="None" />
                    <Button colorScheme='teal' margin={2}>Send</Button>
                </CardBody>
            </Card>
        </div>
        </>
    )
}

export default ContactComponent