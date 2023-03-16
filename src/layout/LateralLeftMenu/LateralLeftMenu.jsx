
import { Button } from '@chakra-ui/react'
import { Image  } from '@chakra-ui/react'
import AddNewBoardGame from '../../components/modals/AddNewBoardGame'
import PlayedSomething from '../../components/modals/PlayedSomething/PlayedSomething'
import WIPModal from '../../components/modals/WIP/WIPModal'
import './LateralLeftMenu.css'
import { useState } from 'react'

export default function LateralLeftMenu() {

    const [modalAddBoardgame, setModalAddBoardgame] = useState(false)
    const [modalPlayedSomething, setModalPlayedSomething] = useState(false)

    const [wipModal, setWipModal] = useState(false)


    return (
        <div className='leftMenu--whole'>
            <div className='leftMenu--top'>
                <div>
                    <Image className='fakeLogo' src='src\assets\img\logo.png' alt='Fake Logo' />
                </div>
                <Button onClick={() => setModalPlayedSomething(true)} colorScheme='green' className='menuButton'>
                    I played a Boardgame!
                </Button>
                <Button onClick={() => setModalAddBoardgame(true)} colorScheme='purple' className='menuButton'>
                    New Game to Database
                </Button>
                <hr className='horizontalLine' />
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played last 7 days (TABLA GENERICA TODO)
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played last month (TABLA?)
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played last year (TABLA?)
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='yellow' className='menuButton'>
                    Played ALL time (TABLA)
                </Button>
                <hr className='horizontalLine' />
                <Button onClick={() => setWipModal(true)} colorScheme='orange' className='menuButton'>
                    Most Played Overall (TABLA DE TODOS)
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='orange' className='menuButton'>
                    Ranking (TABLA DE TODOS)
                </Button>
                <hr className='horizontalLine' />
                <Button onClick={() => setWipModal(true)} colorScheme='telegram' className='menuButton'>
                    All Database Games (TABLA ORDER NAME)
                </Button>
                <Button onClick={() => setWipModal(true)} colorScheme='telegram' className='menuButton'>
                    All Categories (CUADRADOS CON CATEGORIAS Y LUEGO TABLA)
                </Button>
            </div>

            <Button onClick={() => setWipModal(true)} colorScheme='gray' className='menuButton'>
                Logout
            </Button>

            {/* MODALS */}

            
        <AddNewBoardGame isOpen={modalAddBoardgame} onClose={() => setModalAddBoardgame(false)}></AddNewBoardGame>
        <PlayedSomething isOpen={modalPlayedSomething} onClose={() => setModalPlayedSomething(false)}></PlayedSomething>
        <WIPModal isOpen={wipModal} onClose={() => setWipModal(false)}></WIPModal>



        </div>
    )
}