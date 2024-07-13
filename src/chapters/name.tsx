import { Stack, Button } from "@chakra-ui/react"
import TypingAnimation from "../components/typingAnimation";
import '../styles/nameChapter.css'
import WordPullUp from "../components/word-pullup";
 
function Name() {
  return (
    <Stack maxWidth='100vw' height='fit-content' paddingTop={5} paddingBottom={5} display='flex' alignItems='center' justifyContent='center'>
      <TypingAnimation text="Aryan Mishra" className="nameHeading"/>
      <WordPullUp words="Software Engineer | Full Stack Developer | Machine Learning Engineer" className="positionHeading"/>
      <Button as="a" href="https://drive.google.com/file/d/16uKZdcQ1Xo_8GtDcytDcukqL4ma4moIE/view?usp=sharing" colorScheme="blackAlpha" size={['sm', 'md']} marginTop={5}>Download Resume</Button>
    </Stack>
  );
}

export default Name;
