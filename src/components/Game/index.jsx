import React, { useContext } from 'react'
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
import { UserContext } from '../../context/UserContext';
import StarIcon from "../../assets/star.png"
import StarGrayIcon from "../../assets/star-gray.png"

export default function Game({game}) {
    const navigate = useNavigate();
    const userState =JSON.parse(localStorage.getItem('user'))
    
    return (
        <Container style={{ opacity: (game.games_collection && userState.id == game.games_collection.id_user) ? 1 : 0.5 }}>
            <GameImg
                onClick={() => navigate(`/jogos/jogo/${game.id}`, {state: game})}
                style={{ backgroundImage: `url(${game.img})` }}/>
            <RowWrap>
                <Title>
                    <img className='starIcon' src={game.stars_qt > 0 ? StarIcon : StarGrayIcon} /> 
                    <span className={game.stars_qt > 0 ? "stars" : "noStars"}>{game.stars_qt}</span>
                    {game.name}
                </Title>
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