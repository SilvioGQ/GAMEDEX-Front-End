import React, { useEffect, useState, useContext } from 'react'
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
import Arrow from '../../components/Arrow'
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme, VictoryPolarAxis, VictoryBar } from 'victory';
import { UserContext } from '../../context/UserContext'
export default function Statistics() {
  const navigate = useNavigate();
  const { state:userState} = useContext(UserContext);
  const [hoveringInput, setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  const [colecionadores, setColecionadores] = useState('');
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0
})
  const [games,
    setGames] = useState([]);
  const Colletions = async() => {
    await GetUsers().then((res) => { setColecionadores(res.users);})
}
  const GetGames = async () => {
    await getGames(7, pagination).then((res) => { setGames(res.games); })
  }
  useEffect(() => {
    Colletions()
    GetGames()
  }, [pagination])
  return (
    <Container>
      <Header selected={'statistics'} />
      <BackgroundLight>
        <CollectorMargin>
          <Profile src='https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg' />
          <div style={{ display: 'flex', flexDirection: 'column', margin: 0 }}>
            <UserName>{userState.name}</UserName>
            <Row>
              <Star src={StarImg} />
              <StarRating>24</StarRating>
              <Star src={JoystickImg} />
              <Joystick>10</Joystick>
            </Row>
          </div>
        </CollectorMargin>
        <p>Itens mais estrelados</p>
        <div style={{height:520,width:720}}>
        <VictoryChart
              width={480}
              minDomain={{ y: 0 }}
              domainPadding={{ x: 20 }}
              theme={VictoryTheme.material}
            >
              <VictoryBar
                style={{ data: { fill: "yellow" } }}
                data={[{x:'god of war',y:20},{x:'god of war 2',y:10},{x:'god of war 3',y:25}]}
                barRatio={0.3}
              />
            </VictoryChart>
        </div>
        <p>Estatísticas globais</p>
        
        {colecionadores && colecionadores.map((i)=>{ return <Collector key={i.id} i={i}/>})}
      </BackgroundLight>
    </Container>
  )
}