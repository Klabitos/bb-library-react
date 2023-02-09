
import './TopMenu.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'

export default function TopMenu() {
    return (
        <div className='topMenu--whole'>
            <div>
                <Input className='inputSearch--bar' width='50vw' placeholder='Search for your game...' />
                <IconButton className='searchIcon'
                    colorScheme='blue'
                    icon={<SearchIcon />}
                />
            </div>
            <div>
                <Button colorScheme='gray'> Settings</Button>
                <Button colorScheme='twitter'> Klabitos Pablo</Button>
            </div>
        </div>
    )
}