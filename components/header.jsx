import '../styles/headStyle.css'
import { Avatar, WrapItem, Button } from '@chakra-ui/react'

function TopBar() {
    return (
        <>
        <div className='headMainContainer'>
            <div className='avatarContainer'>
                <WrapItem>
                    <Avatar
                    size='lg'
                    name='Prosper Otemuyiwa'
                    src="https://cdn.pixabay.com/photo/2024/04/20/03/58/ai-generated-8707732_1280.png"
                    />{' '}
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