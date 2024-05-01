import '../styles/footerStyle.css'
import { Center, Stack, Text } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"


function FooterComponent() {
    return (
        <>
        <div className="footerMainContainer">
            <Text>@developed using Next.js and ChakraUI</Text>
            <Stack display='flex' flexDirection='row' margin={4} justifyContent='space-evenly' alignItems='center'>
                <a href="https://github.com/wolf1729"><FontAwesomeIcon icon={faGithub} className='symbol'/></a>
                <a href="https://www.linkedin.com/in/aryan-mishra-78578b22a/"><FontAwesomeIcon icon={faLinkedin} className='symbol'/></a>
                <a href="https://twitter.com/wolf1729"><FontAwesomeIcon icon={faTwitter} className='symbol'/></a>
            </Stack>
        </div>
        </>
    )
}

export default FooterComponent