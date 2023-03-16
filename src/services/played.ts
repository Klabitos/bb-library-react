
import { PlayedInfo } from '../models/PlayedInfoModel'


const allPlayedInfo:Array<PlayedInfo> = [
    {
        idGame: 1,
        idPlayer: 23,
        timestamp: 12142354,
        puntuation: 5,
    },
    {
        idGame: 1,
        idPlayer: 24,
        timestamp: 12142354,
        puntuation: 5,
    },
    {
        idGame: 1,
        idPlayer: 23,
        timestamp: 12142354,
        puntuation: 7,
    },
    {
        idGame: 2,
        idPlayer: 23,
        timestamp: 12142354,
        puntuation: 5,
    },
]


export function getAllGamesPlayedInfo():Array<PlayedInfo>{
    return allPlayedInfo
}

export function addPlayedInfo(newPlayedGameInfo : PlayedInfo):Array<PlayedInfo>{
    console.log(newPlayedGameInfo)
    allPlayedInfo.push(newPlayedGameInfo)
    return allPlayedInfo
}