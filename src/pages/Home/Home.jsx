import './Home.css'
import GalleryBoardGameCard from '../../components/cards/GalleryBoardGameCard/GalleryBoardGameCard'

export default function Home() {

    return (
        <div className='mainContainer'>
            <h1>
                ALL GAMES
            </h1> 
            <GalleryBoardGameCard boardGamesList={allGamesData}></GalleryBoardGameCard>
        </div>

    )
}

const allGamesData = [
    {
        name:'The Island',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        autor: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
    {
        name:'The Island 2',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        autor: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
    {
        name:'The Island 3',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        autor: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
    {
        name:'The Island 4',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        autor: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
    {
        name:'The Island 5',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        autor: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
    {
        name:'The Island 6',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        autor: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },

]