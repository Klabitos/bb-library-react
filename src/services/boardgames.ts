/* TODO: BACKEND
import axios from "axios";
import config from '../config.js'
*/
import { Boardgame } from "../models/BoardgameModel"

const allGamesData:Array<Boardgame> = [
    {
        id: 0, 
        name: 'Sumo Party',
        imgLink: 'https://i.ibb.co/HzJq8db/Imagen-Venta.jpg',
        author: 'Pablo "Klabitos" Cruz',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: [6, 99],
        playerLimit: [3, 5],
        timeOfGame: [15, 20]
    },
    {
        id: 1, 
        name: 'Flores en el Convento',
        imgLink: 'https://i.ibb.co/b5NzqPj/image.png',
        author: 'Pablo "Klabitos" Cruz',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: [6, 99],
        playerLimit: [2, 4],
        timeOfGame: [15, 20]
    },
    {
        id: 2, 
        name: '4Reinos',
        imgLink: 'https://i.ibb.co/wS9xhg9/prueba4-Reinos.png',
        author: 'Pablo "Klabitos" Cruz',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: [7, 99],
        playerLimit: [2, 8],
        timeOfGame: [5, 10]
    },
    {
        id: 3, 
        name: 'The Island',
        imgLink: 'https://juegosdemesayrol.com/wp-content/uploads/The-Island-3.jpg',
        author: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: [6, 99],
        playerLimit: [3, 5],
        timeOfGame: [15, 20]
    },
    {
        id: 4, 
        name: 'Monopoly',
        imgLink: 'https://i.ibb.co/w4vB90p/monopoly.jpg',
        author: 'Sr. Monóculo',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: [6, 99],
        playerLimit: [3, 5],
        timeOfGame: [15, 20]
    },
    {
        id: 5, 
        name: 'Mechs & Minions',
        imgLink: 'https://i.ibb.co/bK6why4/lol.jpg',
        author: 'Dan Smith',
        resume: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, velit facilis facere cumque laborum tempore dignissimos, impedit, dolor repudiandae laudantium distinctio architecto non? Dolorum eius maiores fugit accusamus harum perspiciatis!',
        ageLimit: [6, 99],
        playerLimit: [3, 5],
        timeOfGame: [15, 20]
    },
]


export function getAllBoardgames():Array<Boardgame>{
    return allGamesData;
}

export function addNewBoardGame(newBoardGame:Boardgame){
    allGamesData.push(newBoardGame)
    return allGamesData;
}
