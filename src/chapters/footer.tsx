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
                <div className="headerTitle"><SiGmail /></div>
                <div className="headerTitle"><FaGithub /></div>
                <div className="headerTitle"><FaMediumM /></div>
                <div className="headerTitle"><FaLinkedinIn /></div>
                <div className="headerTitle"><FaTwitter /></div>
            </Stack>
            <Particles quantity={500} color="black" className="absolute inset-0 headerComp"/>
        </Stack>
        </>
    )
}

export default PageFooter