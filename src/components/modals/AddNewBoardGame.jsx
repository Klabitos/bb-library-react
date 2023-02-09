import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button,
    Textarea, InputGroup, Input, InputLeftAddon, InputRightAddon
} from '@chakra-ui/react'
import { useState } from 'react'
import './AddNewBoardGame.css'


export default function AddNewBoardGame({isOpen, onClose}){

    const [errorInInput, setErrorInInput] = useState(false)

    function errorMessage(isThereAnError){
        if(isThereAnError) return <h2 className='errorMessage'>Fill all the fields in order to finish</h2>
        return <></>
    }

    const [nameValue, setNameValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [ageLimitValue, setAgeLimitValue] = useState('')
    const [playerLimitValue, setPlayerLimitValue] = useState('')
    const [minutesLimit, setMinutesLimit] = useState('')
    const [pictureUrlValue, setPictureUrlValue] = useState('')
    const [tagValues, setTagValues] = useState('')

    function checkAreEmptyVariables(){
        if(nameValue == '') return true;
        if(textareaValue == '') return true;
        if(ageLimitValue == '') return true;
        if(playerLimitValue == '') return true;
        if(minutesLimit == '') return true;
        if(pictureUrlValue == '') return true;
        if(tagValues == '') return true;

        return false;
    }

    function emptyVariables(){
        setErrorInInput(false)
        setNameValue('')
        setAgeLimitValue('')
        setMinutesLimit('')
        setPictureUrlValue('')
        setTagValues('')
        setPlayerLimitValue('')
    }

    function addCheckers(){
        const error = checkAreEmptyVariables()
        if(error){
            setErrorInInput(true)
        }else{
            //add method (quizás store de juegos de mesa?)
            onClose()
            emptyVariables()
        }
    }


    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Boardgame to Database</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <InputGroup className='inputGroup'>
                            <InputLeftAddon children='Name' />
                            <Input placeholder='Boardgame name' value={nameValue} onChange={e => setNameValue(e.target.value)} />
                        </InputGroup>
                        <InputGroup className='inputGroup'>
                            <Textarea placeholder='Description' value={textareaValue} onChange={e => setTextareaValue(e.target.value)} />
                        </InputGroup>
                        <InputGroup className='inputGroup'>
                            <InputLeftAddon children='Age Limit' />
                            <Input placeholder='6+' value={ageLimitValue} onChange={e => setAgeLimitValue(e.target.value)} />
                        </InputGroup>
                        <InputGroup className='inputGroup'>
                            <InputLeftAddon children='Player Limit' />
                            <Input placeholder='2 - 4' value={playerLimitValue} onChange={e => setPlayerLimitValue(e.target.value)} />
                        </InputGroup>
                        <InputGroup className='inputGroup'>
                            <InputLeftAddon children='Min Limit' />
                            <Input placeholder='15 - 25min' value={minutesLimit} onChange={e => setMinutesLimit(e.target.value)} />
                        </InputGroup>
                        <InputGroup className='inputGroup'>
                            <InputLeftAddon children='Picture URL' />
                            <Input placeholder='https://...' value={pictureUrlValue} onChange={e => setPictureUrlValue(e.target.value)}/>
                        </InputGroup>
                        <InputGroup className='inputGroup'>
                            <InputLeftAddon children='Tag' />
                            <Input placeholder='Party' value={tagValues} onChange={e => setTagValues(e.target.value)}/>
                            <InputRightAddon children={
                                 <Button colorScheme='blue' size='xs'>
                                 +
                               </Button>
                            } />
                        </InputGroup>
                        {errorMessage(errorInInput)}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='orange' mr={3} onClick={()=>{
                            onClose();
                            emptyVariables();
                        }}>
                            Close
                        </Button>
                        <Button colorScheme='twitter' onClick={addCheckers}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
    )
}
