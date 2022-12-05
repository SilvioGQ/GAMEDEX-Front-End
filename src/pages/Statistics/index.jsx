import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { BackgroundLight, ListGames, ListGamesFlex, Row, RowWrap } from '../../resource/globalsStyles'
import { getGames, GetUserById, GetUsers } from '../api'
import { RowBetween } from '../Games/styles'
import { CollectorMargin, Container, Joystick, Profile, Star, StarRating, Title, UserName } from './styles'
import StarImg from '../../assets/star.png'
import JoystickImg from '../../assets/joystick.png'
import Game from '../../components/Game'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Arrow from '../../components/Arrow'
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme, VictoryPolarAxis } from 'victory';
import Charts from '../../components/Charts'
export default function Statistics() {
  const navigate = useNavigate();
  const [hoveringInput, setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  const [colecionador, setColecionador] = useState('');
  const [pagination, setPagination] = useState(0);
  const [games,
    setGames] = useState([]);
  const Colletions = async () => {
    await GetUserById(3).then((res) => { setColecionador(res.user) })
  }
  const GetGames = async () => {
    await getGames(7, pagination).then((res) => { setGames(res.games); })
  }
  console.log(colecionador)
  useEffect(() => {
    Colletions()
    GetGames()
  }, [pagination])
  return (
    <Container>
      <Header selected={'statiscts'} />
      <BackgroundLight>
        <CollectorMargin>
          <Profile src='https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg' />
          <div style={{ display: 'flex', flexDirection: 'column', margin: 0 }}>
            <UserName>{colecionador && colecionador.name}</UserName>
            <Row>
              <Star src={StarImg} />
              <StarRating>24</StarRating>
              <Star src={JoystickImg} />
              <Joystick>10</Joystick>
            </Row>
          </div>
        </CollectorMargin>
        <p>Itens mais estrelados</p>
        <Charts chartData={{
          labels: ['Red', 'Orange', 'Blue'],
          datasets: [
            {
              label: "Users Gained ",
              data: [55, 23, 96],
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
              ]
            }
          ]
        }} />
      </BackgroundLight>
    </Container>
  )
}