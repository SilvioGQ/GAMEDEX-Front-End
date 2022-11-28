import React from 'react'
import {
    Container,
    GameImg,
    Genres,
    Genre,
    GenreDiv,
    Star,
    StarRating,
    Title
} from './styles'
import StarImg from '../../assets/star.png'
import {useNavigate} from 'react-router-dom';
import {RowWrap} from '../../resource/globalsStyles';

export default function Game({game}) {
    const navigate = useNavigate();
    return (
        <Container style={{ opacity: game.games_collection ? 1 : 0.5 }}>
            <GameImg
                onClick={() => navigate(`jogo/${game.id}`, {state: game})}
                style={{ backgroundImage: `url(${game.img})` }}/>
            <RowWrap>
                <Title>{game.name}</Title>
				<Genres>
					{game.genre.split(",").map((genre, key) => {
						return <GenreDiv>
							<Genre key={key}>{genre.toUpperCase()}</Genre>
						</GenreDiv>
					})}
				</Genres>
                {/* <Star src={StarImg}/>
        <StarRating>24</StarRating> */}
            </RowWrap>
        </Container>
    )
}