import React from 'react'
import { Container, GameImg, Star, StarRating } from './styles'
import StarImg from '../../assets/star.png'
import { useNavigate } from 'react-router-dom';
import { RowWrap } from '../../resource/globalsStyles';

export default function Game ({img,name,categories,stars}) {
  const navigate = useNavigate();
  return(
    <Container>
      <GameImg onClick={()=>navigate('jogo')} src={'https://tm.ibxk.com.br/2022/10/10/10130612756184.jpg?ims=184x240'}/>
      <RowWrap>
        <Star src={StarImg}/>
        <StarRating>24</StarRating>
      </RowWrap>
    </Container>
   )
 }