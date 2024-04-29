/* eslint-disable react/no-unescaped-entities */
import '../styles/homeComponentStyle.css'
import { Code } from '@chakra-ui/react'

function HomeComponent() {

    const whoami = () => {
        const htmlString = `class who_Am_I { Developer }`;
        return <Code dangerouslySetInnerHTML={{ __html: htmlString }} fontSize='25px' colorScheme='red
        ' margin={3}></Code>;
      }
    return (
        <>
        <div className='homeMainContainer'>
            <Code colorScheme='teal' fontSize='40px'>var name = "Aryan Mishra"</Code>
            {whoami()}
        </div>
        </>
    )
}

export default HomeComponent