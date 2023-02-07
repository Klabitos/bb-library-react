import BoardGameCard from "../BoardGameCard/BoardGameCard"
import './GalleryBoardGameCard.css'

export default function GalleryBoardGameCard({boardGamesList}){
    return(
        <div className="gallery-boardgames">
            {boardGamesList.map(game => 
                <BoardGameCard boardGame={game} key={game.name}></BoardGameCard>) 
            }
        </div>
    )
}