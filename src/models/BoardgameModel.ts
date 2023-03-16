export class Boardgame{
    id?: number;
    name: string;
    imgLink: string;
    author: string;
    resume: string;
    ageLimit: Array<number>;
    playerLimit: Array<number>;
    timeOfGame: Array<number>;

    constructor(id:number, name:string, imgLink:string, author:string, resume:string, ageLimit:Array<number>, playerLimit:Array<number>, timeOfGame:Array<number>){
        this.id=id;
        this.name=name;
        this.imgLink=imgLink;
        this.author=author;
        this.resume=resume;
        this.ageLimit=ageLimit;
        this.playerLimit=playerLimit;
        this.timeOfGame=timeOfGame;
    }
}