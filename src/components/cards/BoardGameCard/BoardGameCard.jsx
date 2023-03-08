import { Badge } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Tag, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import './BoardGameCard.css'

export default function BoardGameCard({ boardGame }) {
    return (
        <div className='cardItem'>
            <Card>
                <Image className='clickable card-image' src={boardGame.imgLink} alt={boardGame.name} />
                <CardHeader className='headerCard clickable'>
                    <h2>
                        <strong>
                            {boardGame.name}
                        </strong>
                    </h2>
                    <div className='gameCard--tagContainer'>
                        <Tag className='gameTag'>{boardGame.author}</Tag>
                    </div>
                </CardHeader>
                <CardBody>
                    <p className='gameText'>{boardGame.resume}</p>
                </CardBody>
                <div className='badgeContainer'>
                    <Badge className='badgeCard' colorScheme='green'>{boardGame.ageLimit}</Badge>
                    <Badge className='badgeCard' colorScheme='blue'>{boardGame.playersLimit}</Badge>
                    <Badge className='badgeCard' colorScheme='purple'>{boardGame.timeOfGame}</Badge>
                </div>
                <Button className='cardFooter' colorScheme='yellow'>
                    I've played this!
                </Button>
            </Card>
        </div>
    )
}