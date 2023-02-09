
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image  } from '@chakra-ui/react'
import AddNewBoardGame from '../../components/modals/AddNewBoardGame'
import { useDisclosure } from '@chakra-ui/react'
import './LateralLeftMenu.css'

export default function LateralLeftMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className='leftMenu--whole'>
            <div className='leftMenu--top'>
                <div>
                    <Image className='fakeLogo' src='src\assets\img\logo.png' alt='Fake Logo' />
                </div>
                <Button colorScheme='green' className='menuButton'>
                    I PLAYED SOMETHING!
                </Button>
                <Button onClick={onOpen} colorScheme='purple' className='menuButton'>
                    New Game to Database
                </Button>
                <hr className='horizontalLine' />
                <Button colorScheme='yellow' className='menuButton'>
                    Played last 7 days
                </Button>
                <Button colorScheme='yellow' className='menuButton'>
                    Played last month
                </Button>
                <Button colorScheme='yellow' className='menuButton'>
                    Played last year
                </Button>
                <Button colorScheme='yellow' className='menuButton'>
                    Played all time
                </Button>
                <hr className='horizontalLine' />
                <Button colorScheme='orange' className='menuButton'>
                    Most Played Overall
                </Button>
                <Button colorScheme='orange' className='menuButton'>
                    Ranking
                </Button>
                <hr className='horizontalLine' />
                <Button colorScheme='telegram' className='menuButton'>
                    All Database Games
                </Button>
                <Button colorScheme='telegram' className='menuButton'>
                    All Categories
                </Button>
            </div>

            <Button colorScheme='gray' className='menuButton'>
                Logout
            </Button>

            {/* MODALS */}

            
        <AddNewBoardGame isOpen={isOpen} onClose={onClose}></AddNewBoardGame>


        </div>
    )
}