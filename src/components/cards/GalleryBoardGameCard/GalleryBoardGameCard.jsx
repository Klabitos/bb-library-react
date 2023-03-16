import BoardGameCard from "../BoardGameCard/BoardGameCard"
import './GalleryBoardGameCard.css'

import PropTypes from 'prop-types'; // ES6
import { Boardgame } from "../../../models/BoardgameModel"


export default function GalleryBoardGameCard({boardGamesList}){
    return(
        <div className="gallery-boardgames">
            {boardGamesList.map(game => 
                <BoardGameCard boardGame={game} key={game.name}></BoardGameCard>) 
            }
        </div>
    )
}

GalleryBoardGameCard.propTypes = {
    boardGamesList: PropTypes.arrayOf(Boardgame).isRequired
}