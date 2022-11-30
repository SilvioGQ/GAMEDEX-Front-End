import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { BackgroundLight, ListGames, ListGamesFlex, Row, RowWrap } from '../../resource/globalsStyles'
import { GetUserById, GetUsers } from '../api'
import { RowBetween } from '../Games/styles'
import { CollectorMargin, Container, Joystick, Profile, Star, StarRating, Title, UserName } from './styles'
import StarImg from '../../assets/star.png'
import JoystickImg from '../../assets/joystick.png'

export default function CollectionsProfile() {
  const navigate = useNavigate();
  const [hoveringInput, setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  const [colecionador, setColecionador] = useState('');
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0
})
  const Colletions = async() => {
    await GetUserById(3).then((res) => { setColecionador(res.user)})
}
console.log(colecionador)
useEffect(() => {
  Colletions()
}, [pagination])
  return (
    <Container>
      <Header selected={'collectors'} />
      <BackgroundLight>
      <CollectorMargin>
      <Profile src='https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg'/>
      <div style={{display:'flex', flexDirection:'column',margin:0}}>
        <UserName>{colecionador && colecionador.name}</UserName>
        <Row>
          <Star src={StarImg}/>
          <StarRating>24</StarRating>
          <Star src={JoystickImg}/>
          <Joystick>10</Joystick>
        </Row>
      </div>
    </CollectorMargin>
    <p>Jogos</p>
    
      </BackgroundLight>
    </Container>
  )
}