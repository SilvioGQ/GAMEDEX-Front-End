import React, { useContext, useEffect, useState } from 'react'
import Collector from '../../components/Collector'
import Header from '../../components/Header'
import Search from '../../components/Search'
import { UserContext } from '../../context/UserContext'
import { BackgroundLight, Container, ListGames, ListGamesFlex, RowWrap } from '../../resource/globalsStyles'
import { GetUsers } from '../api'
import { Title, RowBetween } from './styles'


export default function Collectors() {
  const [hoveringInput, setHoveringInput] = useState(false);
  const userState =JSON.parse(localStorage.getItem('user'))
  const [pesquisar, setPesquisar] = useState('');
  const [colecionadores, setColecionadores] = useState('');
  const [pagination, setPagination] = useState({
    limit: 10,
    offset: 0
  })
  const [totalColecionadores, settotalColecionadores] = useState(0)
  const Colletions = async() => {
    await GetUsers(pagination.limit,pagination.offset,pesquisar).then((res) => { 
      console.log(res)
      setColecionadores(res.users);
      settotalColecionadores(res.count)
    })
}
useEffect(() => {
  Colletions()
}, [pagination, pesquisar])
  return (
    <Container>
      <Header selected={'collectors'} />
      <BackgroundLight>
        <RowBetween>
          <Title>Colecionadores</Title>
          <div style={{width:360,marginTop: -5}}>
          <Search
            placeholder="Pesquisar"
            value={pesquisar}
            onChange={setPesquisar}
            hovering={hoveringInput}
            setHoveringInput={setHoveringInput} />
          </div>
        </RowBetween>
        <ListGamesFlex>
          {colecionadores && colecionadores.map((i)=>{ return <Collector key={i.id} i={i}/>})}
        </ListGamesFlex>
      </BackgroundLight>
      <div style={{ display: "flex", width: "30%", gap: "1vw" }}>
              {pagination.offset > 0 && <p onClick={() => setPagination({ ...pagination, offset: pagination.offset-pagination.limit})}>{"<"} Anterior</p>}
              <p>Página {(pagination.offset/pagination.limit)+1}</p>
              {totalColecionadores > pagination.offset+pagination.limit  && <p onClick={() => setPagination({ ...pagination, offset: pagination.offset+pagination.limit})}>Proximo {">"}</p>}
      </div>
    </Container>
  )
}