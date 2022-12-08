import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { BackgroundLight, ListEvidences, ListGamesFlex, Row ,} from '../../resource/globalsStyles'
import { getGames, GetUserById, GetUsers, MostPossesedItens, MostStaredItens, MostUsersItens } from '../api'
import { RowBetween } from '../Games/styles'
import { CollectorMargin, Container, Joystick, Profile, Star, StarRating, Title, UserName } from './styles'
import Person from '../../assets/PersonWhite.png'
import StarImg from '../../assets/star.png'
import Game from '../../components/Game'
import Arrow from '../../components/Arrow'
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme, VictoryPolarAxis, VictoryBar } from 'victory';
import { UserContext } from '../../context/UserContext'
import { useWindowDimensions } from '../../constants'
export default function Statistics() {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const userState = JSON.parse(localStorage.getItem('user'))
  const [hoveringInput, setHoveringInput] = useState(false);
  const [pesquisar, setPesquisar] = useState('');
  const [colecionadores, setColecionadores] = useState('');
  const [topUsersItens, setTopUsersItens] = useState();
  const [topItens, setTopItens] = useState([]);
  const [topUsersStar, setTopUsersStar] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0
  })
  const [games,
    setGames] = useState([]);

  const Colletions = async () => {
    await GetUsers(10, 0, '').then((res) => { setColecionadores(res.users); })
    await MostUsersItens().then((i) => setTopUsersItens(i.users));
    await MostPossesedItens().then((i) => {
      let array = [];
      for (let c = 0; i.items.length > c; c++) {
        array.push({ x: i.items[c].game_name, y: Number(i.items[c].game_qt) })
      }
      setTopItens(array);
    });
    await MostStaredItens().then((i) =>{
      setTopUsersStar(i.items);
      console.log(i);
      // let array = [];
      // console.log(i);
      // for (let c = 0; i.items.length > c; c++) {
      //   array.push({ x: i.items[c].game_name, y: Number(i.items[c].stars) })
      // }
      // setTopUsersStar(array);
    });
  };
  console.log(topUsersStar)
  const GetGames = async () => {
    await getGames(7, pagination.offset, '').then((res) => { setGames(res.games); })
  }
  useEffect(() => {
    Colletions()
    GetGames()
  }, [pagination])
  return (
    <Container>
      <Header selected={'statistics'} />
      <BackgroundLight>
        <h1>Estatísticas globais</h1>
        <h3>Itens mais estrelados (evidências)</h3>
        <div style={{ width: '70vw' }}>
          <ListEvidences>

          {topUsersStar && topUsersStar.map((i)=>{
            console.log(i)
            return (
            <CollectorMargin>
              <Profile style={{ backgroundImage: `url(${i.evidence_img})` }}/>
              <div style={{ display: 'flex', flexDirection: 'column', margin: 0 }}>
                <UserName>{i.game_name}</UserName>
                <Row>
                  <Star src={StarImg} />
                  <StarRating>{i.stars}</StarRating>
                  <Star src={Person} />
                  <Joystick>{i.id_user}</Joystick>
                </Row>
              </div>
            </CollectorMargin>
            )
          })}
          </ListEvidences>
       
          {/* {topUsersStar.length > 0 &&
            <VictoryChart
              width={1200}
              height={width > 1100 ? 500 : 800}
              minDomain={{ y: 0 }}
              domainPadding={{ x: 20 }}
              theme={VictoryTheme.material}
            >
              <VictoryBar
              animate={{
                duration: 2500,
                onLoad: { duration: 2000 }
              }}
                style={{ data: { fill: "yellow" } }}
                data={topUsersStar}
                barRatio={0.3}
              />
            </VictoryChart>
          } */}
        </div>
          <h3>Jogos mais populares</h3>
        <div style={{ height: 520, width: '70vw' }}>
          {topItens.length > 0 &&
            <VictoryChart
              width={1200}
              height={width > 1100 ? 500 : 1000}
              minDomain={{ y: 0 }}
              domainPadding={{ x: 20 }}
              theme={VictoryTheme.material}
            >
              <VictoryBar
              animate={{
                duration: 2500,
                onLoad: { duration: 3000 }
              }}
                style={{ data: { fill: "blue" } }}
                data={topItens}
                barRatio={0.3}
              />
            </VictoryChart>
          }
        </div>

        <h3>Usuários com mais jogos</h3>
        {topUsersItens && topUsersItens.map((i) => { return <Collector key={i.id} i={i} /> })}

      </BackgroundLight>
    </Container>
  )
}