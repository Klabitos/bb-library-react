/* TODO: BACKEND
import axios from "axios";
import config from '../config.js'
*/

const allGamesData = [
    {
        name: 'Sumo Party',
        imgLink: 'https://i.ibb.co/HzJq8db/Imagen-Venta.jpg',
        author: 'Pablo "Klabitos" Cruz',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '3-5 players',
        timeOfGame: '15-20 Min'
    },
    {
        name: 'Flores en el Convento',
        imgLink: 'https://i.ibb.co/b5NzqPj/image.png',
        author: 'Pablo "Klabitos" Cruz',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '20 Min'
    },
    {
        name: '4Reinos',
        imgLink: 'https://i.ibb.co/wS9xhg9/prueba4-Reinos.png',
        author: 'Pablo "Klabitos" Cruz',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+7 años',
        playersLimit: '2-8 players',
        timeOfGame: '5 Min'
    },
    {
        name: 'The Island',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        author: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
    {
        name: 'Monopoly',
        imgLink: 'https://i.ibb.co/w4vB90p/monopoly.jpg',
        author: 'Sr. Monóculo',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
    {
        name: 'Mechs & Minions',
        imgLink: 'https://i.ibb.co/bK6why4/lol.jpg',
        author: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: '+6 años',
        playersLimit: '2-4 players',
        timeOfGame: '35min'
    },
]


export function getAllBoardgames(){
    return allGamesData
}
