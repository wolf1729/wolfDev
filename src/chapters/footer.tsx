import { Stack } from "@chakra-ui/react"
import Particles from "../components/particles"
import '../styles/footerStyle.css'
import { SiGmail } from "react-icons/si";
import { FaGithub, FaMediumM, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function PageFooter() {
    return (
        <>
        <Stack display='flex' alignItems='center' justifyItems='center' width="100%" height='fit-content' paddingTop={5} position='relative'>
            <Stack display='flex' flexDir='row' alignContent='center' justifyContent='space-evenly' borderWidth={0.5} borderColor='rgb(197, 195, 195)' borderRadius={10} width='fit-content' position='absolute'>
                <a href="mailto:your-aryanhra58@gmail.com"><div className="headerTitle"><SiGmail /></div></a>
                <a href="https://github.com/wolf1729"><div className="headerTitle"><FaGithub /></div></a>
                <a href="https://medium.com/@aryanm1729"><div className="headerTitle"><FaMediumM /></div></a>
                <a href="https://www.linkedin.com/in/aryan-mishra-78578b22a/"><div className="headerTitle"><FaLinkedinIn /></div></a>
                <a href="https://x.com/wolf1729"><div className="headerTitle"><FaTwitter /></div></a>
            </Stack>
            <Particles quantity={500} color="black" className="absolute inset-0 headerComp"/>
        </Stack>
        </>
    )
}

export default PageFooter