
import './TopMenu.css'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import WIPModal from '../../components/modals/WIP/WIPModal'

export default function TopMenu() {

    const [wipModal, setWipModal] = useState(false)

    return (
        <div className='topMenu--whole'>
            <div>
                <Input className='inputSearch--bar' width='50vw' placeholder='Search for your game... (AUTOCOMPLETE)' />
                <IconButton className='searchIcon'
                    colorScheme='blue'
                    icon={<SearchIcon />}
                    onClick={() => setWipModal(true) }
                />
            </div>
            <div>
                <Button colorScheme='gray' onClick={() => setWipModal(true) }> Settings</Button>
                <Button colorScheme='twitter' onClick={() => setWipModal(true) }> Pablo 'Klabitos' Cruz</Button>
            </div>

            <WIPModal isOpen={wipModal} onClose={() => setWipModal(false)}></WIPModal>
        </div>
    )
}