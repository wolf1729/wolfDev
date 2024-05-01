import '../styles/headStyle.css'
import { Avatar, WrapItem, Button, Text } from '@chakra-ui/react'

function TopBar() {
    return (
        <>
        <div className='headMainContainer'>
            <div className='avatarContainer'>
                <WrapItem alignItems='center'>
                    <Avatar
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src="https://cdn.pixabay.com/photo/2024/04/20/03/58/ai-generated-8707732_1280.png"
                    />{' '}
                    <Text marginLeft={2} fontSize={30} className='headerHeading' color='teal'>Wolf1729</Text>
                </WrapItem>
            </div>
            <div className='buttonContainer'>
                <Button colorScheme='teal' size='md'>Download Resume</Button>
            </div>
        </div>
        </>
    )
}

export default TopBar