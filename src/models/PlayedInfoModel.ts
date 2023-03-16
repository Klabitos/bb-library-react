export class PlayedInfo{
    idGame: number;
    idPlayer: number;
    timestamp: number;
    puntuation: number;

    constructor(idGame:number, idPlayer:number, timestamp:number, puntuation:number){
        this.idGame = idGame;
        this.idPlayer = idPlayer;
        this.timestamp = timestamp;
        this.puntuation = puntuation;
    }
}