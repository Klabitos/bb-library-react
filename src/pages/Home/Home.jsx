import './Home.css'
import GalleryBoardGameCard from '../../components/cards/GalleryBoardGameCard/GalleryBoardGameCard'
import { getAllBoardgames } from '../../services/boargames'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {

    const [allGamesData, setAllGamesData] = useState(getAllBoardgames)

    return (
        <div className='mainContainer'>
            <Heading className='discover--title' as='h2' size='xl'>
                Discover new games
            </Heading>
            <GalleryBoardGameCard boardGamesList={allGamesData}></GalleryBoardGameCard>
        </div>
    )
}

