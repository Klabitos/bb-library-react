import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Alert,
    AlertIcon,
    ModalCloseButton, Button, InputGroup, NumberInputField, InputLeftAddon, NumberInput, NumberInputStepper, NumberDecrementStepper, NumberIncrementStepper,
    AlertTitle,
    Textarea, Input, 
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { addNewBoardGame, getAllBoardgames } from '../../services/boardgames'
import './AddNewBoardGame.css'

import { Boardgame } from '../../models/BoardgameModel'


export default function AddNewBoardGame({ isOpen, onClose }) {

    useEffect( () => {
        setErrorInInput(false);
        emptyVariables();
    }, []) //Only executed once, if we want more ew put here the value we have to watch
    


    const [errorInInput, setErrorInInput] = useState(false)
    const [errorText, setErrorText] = useState('Fill all the fields')
    function errorMessage(isThereAnError) {
        if (isThereAnError) return (
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{errorText}</AlertTitle>
            </Alert>
        )
        return <></>
    }

    const [nameValue, setNameValue] = useState('')
    const [authorValue, setAuthorValue] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [ageLimitValueFrom, setAgeLimitValueFrom] = useState(0)
    const [ageLimitValueTo, setAgeLimitValueTo] = useState(0)
    const [playerLimitValueFrom, setPlayerLimitValueFrom] = useState(0)
    const [playerLimitValueTo, setPlayerLimitValueTo] = useState(0)
    const [minutesLimitFrom, setMinutesLimitFrom] = useState(0)
    const [minutesLimitTo, setMinutesLimitTo] = useState(0)
    const [pictureUrlValue, setPictureUrlValue] = useState('')
    function addBoardgame() {
        const newBoardGame = new Boardgame(nameValue+ageLimitValueFrom+playerLimitValueFrom,nameValue, pictureUrlValue, authorValue, [ageLimitValueFrom, ageLimitValueTo], [playerLimitValueFrom, playerLimitValueTo], [minutesLimitFrom, minutesLimitTo])
        if (isThereAnError()) {
            setErrorInInput(true)
        } else {
            console.log(addNewBoardGame(newBoardGame))
            onClose()
            setErrorInInput(false)
            emptyVariables()
        }
    }
    
    function isThereAnError(){
        if (areVariablesEmpty())  return true;
        if(!arePairValuesCorrect()){setErrorText('Check Age, players or duration. TO field cannot be greater than the min limit.'); return true} ;
        if (doesTheGameExist()) {setErrorText('This game is already in our database!'); return true} ;
        return false
    }
    function areVariablesEmpty() {
        if (nameValue == '') return true;
        if (authorValue == '') return true;
        if (textareaValue == '') return true;
        if (ageLimitValueFrom == 0) return true;
        if (ageLimitValueTo == 0) return true;
        if (playerLimitValueFrom == 0) return true;
        if (playerLimitValueTo == 0) return true;
        if (minutesLimitFrom == 0) return true;
        if (minutesLimitTo == 0) return true;
        if (pictureUrlValue == '') return true;

        return false;
    }
    function arePairValuesCorrect(){
        return playerLimitValueFrom<playerLimitValueTo && ageLimitValueFrom<ageLimitValueTo && minutesLimitFrom<minutesLimitTo
    }
    function doesTheGameExist(){
        const allBoardgames = getAllBoardgames() //TODO
        return allBoardgames.forEach(boargame => boargame.name==nameValue?true:false)
    }

    

    function emptyVariables() {
        setErrorInInput(false)
        setAuthorValue('')
        setTextareaValue('')
        setNameValue('')
        setAgeLimitValueFrom(0)
        setAgeLimitValueTo(0)
        setMinutesLimitFrom(0)
        setMinutesLimitTo(0)
        setPlayerLimitValueFrom(0)
        setPlayerLimitValueTo(0)
        setPictureUrlValue('')
    }

    function closeModalEffects(){
        onClose();
        setErrorInInput(false);
        emptyVariables();
    }


    return (
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
                        <InputLeftAddon children='Author' />
                        <Input placeholder='Boardgame author' value={authorValue} onChange={e => setAuthorValue(e.target.value)} />
                    </InputGroup>
                    <InputGroup className='inputGroup'>
                        <Textarea placeholder='Description' value={textareaValue} onChange={e => setTextareaValue(e.target.value)} />
                    </InputGroup>
                    <div className='input-group-number--to'>
                        <InputGroup className='input-number'>
                            <InputLeftAddon children='Age Limit' />
                            <NumberInput min={0} value={ageLimitValueFrom} onChange={value => setAgeLimitValueFrom(value)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput  />
                        </InputGroup>
                        <InputGroup className='input-number'>
                            <InputLeftAddon children='To' />
                            <NumberInput max={99} min={1}  value={ageLimitValueTo} onChange={value => setAgeLimitValueTo(value)} >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput/>
                        </InputGroup>
                    </div>
                    <div className='input-group-number--to'>
                        <InputGroup className='input-number'>
                            <InputLeftAddon children='Number Players' />
                            <NumberInput max={10} min={0} value={playerLimitValueFrom} onChange={value => setPlayerLimitValueFrom(value)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput  />
                        </InputGroup>
                        <InputGroup className='input-number'>
                            <InputLeftAddon children='To' />
                            <NumberInput max={10} min={0} value={playerLimitValueTo} onChange={value => setPlayerLimitValueTo(value)} >
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput />
                        </InputGroup>
                    </div>
                    <div className='input-group-number--to'>
                        <InputGroup className='input-number'>
                            <InputLeftAddon children='Duration (min)' />
                            <NumberInput min={0} value={minutesLimitFrom} onChange={value => setMinutesLimitFrom(value)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput  />
                        </InputGroup>
                        <InputGroup className='input-number'>
                            <InputLeftAddon children='To' />
                            <NumberInput min={0} value={minutesLimitTo} onChange={value => setMinutesLimitTo(value)}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <NumberInput  />
                        </InputGroup>
                    </div>
                    <InputGroup className='inputGroup'>
                        <InputLeftAddon children='Picture URL' />
                        <Input placeholder='https://...' value={pictureUrlValue} onChange={e => setPictureUrlValue(e.target.value)} />
                    </InputGroup>
                    {errorMessage(errorInInput)}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='orange' mr={3} onClick={() => closeModalEffects()}>
                        Close
                    </Button>
                    <Button colorScheme='twitter' onClick={() => addBoardgame()}>Add</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
