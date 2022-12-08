import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { BackgroundLight, ListGames, ListGamesFlex, Row, RowWrap } from '../../resource/globalsStyles'
import { GetCollection, getGames, GetUserById, GetUsers } from '../api'
import { RowBetween } from '../Games/styles'
import { CollectorMargin, Container, Joystick, Profile, Star, StarRating, Title, UserName } from './styles'
import StarImg from '../../assets/star.png'
import JoystickImg from '../../assets/joystick.png'
import Game from '../../components/Game'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from '../../components/Arrow'

export default function CollectionsProfile() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [hoveringInput, setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  const [colecionador, setColecionador] = useState('');
  const [pagination, setPagination] = useState(0);
  const [games,
    setGames] = useState([]);
  const Colletions = async () => {
    await GetUserById(id).then((res) => { setColecionador(res.user) })
  }
  const GetGames = async () => {
    await GetCollection(5, pagination, id).then((res) => { setGames(res.rows); })
  }
  console.log(colecionador)
  useEffect(() => {
    Colletions()
    GetGames()
  }, [pagination])
  return (
    <Container>
      <Header selected={'collectors'} />
      <BackgroundLight>
        <CollectorMargin>
          <Profile src='https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg' />
          <div style={{ display: 'flex', flexDirection: 'column', margin: 0 }}>
            <UserName>{colecionador && colecionador.name}</UserName>
            {/* <Row>
              <Star src={StarImg} />
              <StarRating>24</StarRating>
              <Star src={JoystickImg} />
              <Joystick>10</Joystick>
            </Row> */}
          </div>
        </CollectorMargin>
        <p>Jogos</p>
        <ScrollMenu RightArrow={<Arrow Rotation={'270deg'} Onpress={()=>setPagination(pagination+7)} />} LeftArrow={<Arrow Rotation={'90deg'} Onpress={()=>{if(pagination > 6)return setPagination(pagination-7)}} />}>
        {games.length > 0 && games.map((game, index) => {
          return (<div style={{marginRight:30}}><Game key={index} game={game} /></div>)
        })}
        </ScrollMenu>
      </BackgroundLight>
    </Container>
  )
}