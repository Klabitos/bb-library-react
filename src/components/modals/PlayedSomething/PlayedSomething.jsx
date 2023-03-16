import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody, 
    ModalCloseButton, Button, Select, InputGroup, NumberInputField, InputLeftAddon, NumberInput, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper
} from '@chakra-ui/react'
import { useState } from 'react'
import { getAllBoardgames } from '../../../services/boardgames.ts'
import { addPlayedInfo } from '../../../services/played.ts'
import { PlayedInfo } from '../../../models/PlayedInfoModel'
import './PlayedSomething.css'


export default function PlayedSomething({ isOpen, onClose }) {

    const [boardgameID, setBoardgameID] = useState(0)
    const [rate, setRate] = useState(5)


    function getOptionsForSelect(){
        const allBoardGames = getAllBoardgames()
        const allBoardGamesAsOption = allBoardGames.map((boardgame) => {
            return <option value={boardgame.id} key={boardgame.id}>{boardgame.name}</option>
        })
        return allBoardGamesAsOption
    }

    function checkFormFields(){
        const playedInfo = new PlayedInfo(boardgameID, 0, 0, rate)
        console.log(playedInfo)
        console.log(addPlayedInfo(playedInfo))
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>What did you play?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <InputGroup className='inputGroup'>
                        <InputLeftAddon children='Boardgame' />
                        <Select value={boardgameID} onChange={e => setBoardgameID(e.target.value)}>
                            {getOptionsForSelect()}
                        </Select>
                    </InputGroup>
                    <InputGroup className='inputGroup'>
                        <InputLeftAddon children='Rate' />
                        <NumberInput defaultValue={5} max={10} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <NumberInput placeholder='Boardgame Rate' value={rate} onChange={e => setRate(e.target.value)} />
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='orange' mr={3} onClick={() => onClose()}>
                        Close
                    </Button>
                <Button colorScheme='twitter' mr={3} onClick={() => checkFormFields()}>
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}