import React from 'react'
import { Container, GameImg, Genre, GenreDiv, Star, StarRating, Title } from './styles'
import StarImg from '../../assets/star.png'
import { useNavigate } from 'react-router-dom';
import { RowWrap } from '../../resource/globalsStyles';

export default function Game ({game}) {
  const navigate = useNavigate();
  return(
    <Container>
      <GameImg onClick={()=>navigate(`jogo/${game.id}`, {state:game})} src={game.img}/>
      <RowWrap>
        <Title>{game.name.substr(0,15)}</Title>
        <GenreDiv>
          <Genre>{game.genre}</Genre>
        </GenreDiv>
        {/* <Star src={StarImg}/>
        <StarRating>24</StarRating> */}
      </RowWrap>
    </Container>
   )
 }