import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button,
} from '@chakra-ui/react'

export default function WIPModal({isOpen, onClose}){

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Work in Progress</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <p>Sorry for the incoveniences</p>
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='orange' mr={3} onClick={()=> onClose()}>
                    Close
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
    )
}