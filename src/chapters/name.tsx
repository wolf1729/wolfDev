import { Stack, Button } from "@chakra-ui/react"
import TypingAnimation from "../components/typingAnimation";
import '../styles/nameChapter.css'
import WordPullUp from "../components/word-pullup";
import Particles from "../components/particles";
 
function Name() {
  return (
    <Stack width="100%" position='relative' paddingTop={5} paddingBottom={5}>
        <Stack display='flex' flexDir='column' justifyContent='left' alignItems='center' position='absolute' left={["0px", "25%"]}>
            <TypingAnimation text="Aryan Mishra" className="nameHeading"/>
            <WordPullUp words="Software Engineer | Full Stack Developer | Machine Learning Engineer" className="positionHeading"/>
            <Button as="a" href="https://drive.google.com/file/d/16uKZdcQ1Xo_8GtDcytDcukqL4ma4moIE/view?usp=sharing" colorScheme="blackAlpha" size={['sm', 'md']} marginTop={5}>Download Resume</Button>
        </Stack>     
        <Particles quantity={1000} color="black" className="absolute inset-0 particleComponent"/>
    </Stack>
  );
}

export default Name;
