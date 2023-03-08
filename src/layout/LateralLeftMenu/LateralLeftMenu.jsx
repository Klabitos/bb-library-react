
import { Button } from '@chakra-ui/react'
import { Image  } from '@chakra-ui/react'
import AddNewBoardGame from '../../components/modals/AddNewBoardGame'
import WIPModal from '../../components/modals/WIP/WIPModal'
import './LateralLeftMenu.css'
import { useState } from 'react'

export default function LateralLeftMenu() {

    const [modalAddBoardgame, setModalAddBoardgame] = useState(false)
    const [wipModal, setWipModal] = useState(false)


    return (
        <div className='leftMenu--whole'>
            <div className='leftMenu--top'>
                <div>
                    <Image className='fakeLogo' src='src\assets\img\logo.png' alt='Fake Logo' />
                </div>
                <Button onClick={() => setWipModal(true)} colorScheme='green' className='menuButton'>
                    I PLAYED SOMETHING!
                </Button>
                <Button onClick={() => setModalAddBoardgame(true)} colorScheme='purple' className='menuButton'>
                    New Game to Database
                </Button>
                <hr className='horizontalLine' />
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played last 7 days
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played last month
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played last year
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played all time
                </Button>
                <hr className='horizontalLine' />
                <Button onClick={() => setWipModal(true)} colorScheme='orange' className='menuButton'>
                    Most Played Overall
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='orange' className='menuButton'>
                    Ranking
                </Button>
                <hr className='horizontalLine' />
                <Button onClick={() => setWipModal(true)} colorScheme='telegram' className='menuButton'>
                    All Database Games
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='telegram' className='menuButton'>
                    All Categories
                </Button>
            </div>

            <Button onClick={() => setWipModal(true)} colorScheme='gray' className='menuButton'>
                Logout
            </Button>

            {/* MODALS */}

            
        <AddNewBoardGame isOpen={modalAddBoardgame} onClose={() => setModalAddBoardgame(false)}></AddNewBoardGame>
        <WIPModal isOpen={wipModal} onClose={() => setWipModal(false)}></WIPModal>



        </div>
    )
}