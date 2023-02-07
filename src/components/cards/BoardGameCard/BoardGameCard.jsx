import { Badge } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import './BoardGameCard.css'

export default function BoardGameCard({boardGame}) {
    return (
        <div className='cardItem'>
            <Card>
                <CardHeader>
                    <h2>
                        <strong>
                            {boardGame.name}
                        </strong>
                    </h2>
                </CardHeader>
                <Image src={boardGame.imgLink} alt={boardGame.name} />
                <CardBody>
                    <p className='gameText'>{boardGame.resume}</p>
                </CardBody>
                <CardFooter>
                    <Badge className='badgeCard'>{boardGame.ageLimit}</Badge>
                    <Badge className='badgeCard'>{boardGame.playersLimit}</Badge>
                    <Badge className='badgeCard'>{boardGame.timeOfGame}</Badge>
                </CardFooter>
            </Card>
        </div>
    )
}