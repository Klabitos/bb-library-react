import { Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import './ErrorRouter.css'
export default function ErrorRouter() {

    const navigate = useNavigate()

    function goHome(){
        navigate("/")
    }

    return (
        <div className='error-container'>
            <div className='error-container-header'>
                <Heading as='h2' size='2xl'>ERROR</Heading>
                <Heading as='h3' size='lg'>We couldn't find the page you were looking for. </Heading>
                <Heading as='h5' size='sm'>Sorry :( </Heading>
            </div>
            <img className='card-image-error' src="https://media.tenor.com/yTzojOpIABQAAAAd/catan-tableflip.gif" alt="Persona tirando mesa Catan"></img>
            <Button onClick={() => goHome()} className='card-btn--home' colorScheme='yellow'>
                Bring me back HOME
            </Button>
        </div>
    )
}