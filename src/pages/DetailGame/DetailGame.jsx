



export default function DetailGame({gameInfo}){

    if(gameInfo==null){
        return <p>NULL</p>
    }

    return(
        <div>
            <p>NOT NULL</p>
        </div>
    )
}