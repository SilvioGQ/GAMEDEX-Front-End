import React, { useContext, useEffect, useState } from 'react'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { UserContext } from '../../context/UserContext'
import { BackgroundLight, Container, ListGames, ListGamesFlex, RowWrap } from '../../resource/globalsStyles'
import { GetUsers } from '../api'
import { RowBetween } from '../Games/styles'
import { Title } from './styles'


export default function Collectors() {
  const [hoveringInput, setHoveringInput] = useState(false);
  const { state:userState, dispatch: userDispatch } = useContext(UserContext);
  const [pesquisar, setPesquisar] = useState('');
  const [colecionadores, setColecionadores] = useState('');
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0
})
  const Colletions = async() => {
    await GetUsers().then((res) => { setColecionadores(res.users.filter((i)=>i.id !== userState.id));})
}
console.log(colecionadores)
useEffect(() => {
  Colletions()
}, [pagination])
  return (
    <Container>
      <Header selected={'collectors'} />
      <BackgroundLight>
        <RowBetween>
          <Title>Colecionadores</Title>
          <Search
            placeholder="Pesquisar"
            value={pesquisar}
            onChange={setPesquisar}
            hovering={hoveringInput}
            setHoveringInput={setHoveringInput} />
        </RowBetween>
        <ListGamesFlex>
          {colecionadores && colecionadores.map((i)=>{ return <Collector key={i.id} i={i}/>})}
        </ListGamesFlex>
      </BackgroundLight>
    </Container>
  )
}