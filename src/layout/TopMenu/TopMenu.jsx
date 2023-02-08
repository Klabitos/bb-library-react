
import './TopMenu.css'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
export default function TopMenu() {
    return (
        <div className='topMenu--whole'>
            <Input className='inputSearch--bar' width='50vw' placeholder='Search for your game...' />
            <div>
                <Button colorScheme='gray'> Settings</Button>
                <Button colorScheme='twitter'> Klabitos Pablo</Button>
            </div>
        </div>
    )
}